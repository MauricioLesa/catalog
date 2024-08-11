package Catalog.backend.Auth;


import Catalog.backend.User.Role;
import Catalog.backend.User.User;
import Catalog.backend.User.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repository;

    private final AuthenticationManager authenticationManager;

    private final PasswordEncoder passwordEncoder;

    private final SecurityContextRepository securityContextRepository = new HttpSessionSecurityContextRepository();


    public AuthenticationResponse register (HttpServletRequest request, RegisterRequest requestBody){

        if(!repository.findByEmail(requestBody.getEmail()).isEmpty())
            return AuthenticationResponse.builder().msg("ya existe el usuario").build();

        var user = User.builder()
                .firstName(requestBody.getFirstName())
                .lastName(requestBody.getLastName())
                .email(requestBody.getEmail())
                .password(passwordEncoder.encode(requestBody.getPassword()))
                .role(Role.CUSTOMER)
                .build();

        repository.save(user);


        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        requestBody.getEmail(),
                        requestBody.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String res = authentication.toString();

        return AuthenticationResponse.builder().msg("usuario guardado").build();
    }


    public AuthenticationResponse login (HttpServletRequest request, LoginRequest requestBody) throws BadCredentialsException {

        HttpSession session = request.getSession(true);
        SecurityContext securityContext = SecurityContextHolder.getContext();

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(requestBody.getEmail(), requestBody.getPassword());

        Authentication authentication = authenticationManager.authenticate(token);

        securityContext.setAuthentication(authentication);
        session.setAttribute("SPRING_SECURITY_CONTEXT", securityContext);

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

}
