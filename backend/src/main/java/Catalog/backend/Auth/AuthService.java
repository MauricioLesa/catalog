package Catalog.backend.Auth;


import Catalog.backend.Store.Store;
import Catalog.backend.Store.StoreRepository;
import Catalog.backend.User.Role;
import Catalog.backend.User.User;
import Catalog.backend.User.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextHolderStrategy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repository;

    private final StoreRepository storeRepository;

    private final AuthenticationManager authenticationManager;

    private final PasswordEncoder passwordEncoder;

    private final SecurityContextRepository securityContextRepository = new HttpSessionSecurityContextRepository();

    private final SecurityContextHolderStrategy securityContextHolderStrategy = SecurityContextHolder.getContextHolderStrategy();

    public AuthenticationResponse register (HttpServletRequest request, HttpServletResponse response, RegisterRequest requestBody){

        if(!repository.findByEmail(requestBody.getEmail()).isEmpty())
            return AuthenticationResponse.builder().msg("email_used").build();

        var user = User.builder()
                .firstName(requestBody.getFirstName())
                .lastName(requestBody.getLastName())
                .email(requestBody.getEmail())
                .password(passwordEncoder.encode(requestBody.getPassword()))
                .role(Role.CUSTOMER)
                .build();
        repository.save(user);

        authenticate(request,response, requestBody.getEmail(), requestBody.getPassword());

        return AuthenticationResponse.builder().msg("success").build();
    }


    public AuthenticationResponse login (HttpServletRequest request, HttpServletResponse response, LoginRequest requestBody) {

        var user = repository.findByEmail(requestBody.getEmail());
        if(user.isEmpty())
            return AuthenticationResponse.builder().msg("user_password_not_found").build();

        String pass = user.map(User::getPassword).orElse("");

        if(!passwordEncoder.matches(requestBody.getPassword(),pass))
            return AuthenticationResponse.builder().msg("user_password_not_found").build();

        authenticate(request,response, requestBody.getEmail(), requestBody.getPassword());

        return AuthenticationResponse.builder().msg("success").build();
    }

    public SessionDataResponse isLogged(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(principal instanceof UserDetails)
            return SessionDataResponse
                    .builder()
                    .role(((UserDetails) principal).getAuthorities().toArray())
                    .email(((UserDetails) principal).getUsername())
                    .build();
        else
            return SessionDataResponse
                .builder()
                .role(new Object[0])
                .email("")
                .build();
    }

    public AuthenticationResponse registerStore(HttpServletRequest request, HttpServletResponse response, RegisterStoreRequest requestBody) {

        if(!repository.findByEmail(requestBody.getEmail()).isEmpty())
            return AuthenticationResponse.builder().msg("email_used").build();

        if(!storeRepository.findByName(requestBody.getStoreName()).isEmpty())
            return AuthenticationResponse.builder().msg("name_used").build();

        var user = User.builder()
                .firstName(requestBody.getFirstName())
                .lastName(requestBody.getLastName())
                .email(requestBody.getEmail())
                .password(passwordEncoder.encode(requestBody.getPassword()))
                .role(Role.VENDOR)
                .build();
        repository.save(user);

        User userId = repository.findByEmail(requestBody.getEmail()).map(userRep -> userRep).orElse(null);

        var store = Store.builder()
                .name(requestBody.getStoreName())
                .description(requestBody.getStoreDescription())
                .direction(requestBody.getStoreDirection())
                .user(userId)
                .build();
        storeRepository.save(store);

        authenticate(request,response, requestBody.getEmail(),requestBody.getPassword());

        return AuthenticationResponse.builder().msg("usuario guardado").build();

    }

    private void authenticate(HttpServletRequest request,HttpServletResponse response, String email, String password){
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(email, password);
        Authentication authentication = authenticationManager.authenticate(token);
        SecurityContext context = securityContextHolderStrategy.createEmptyContext();
        context.setAuthentication(authentication);
        securityContextHolderStrategy.setContext(context);
        securityContextRepository.saveContext(context, request, response);
    }
}


