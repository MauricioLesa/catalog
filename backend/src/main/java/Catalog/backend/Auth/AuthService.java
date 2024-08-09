package Catalog.backend.Auth;


import Catalog.backend.User.Role;
import Catalog.backend.User.User;
import Catalog.backend.User.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
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
        var user = User.builder().firstName(requestBody.getFirstName()).lastName(requestBody.getLastName())
                .email(requestBody.getEmail()).password(passwordEncoder.encode(requestBody.getPassword())).role(Role.CUSTOMER).build();
        repository.save(user);

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        requestBody.getEmail(),
                        requestBody.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String res = authentication.toString();

        return AuthenticationResponse.builder().msg(res).build();
    }


    public AuthenticationResponse login (HttpServletRequest request, LoginRequest requestBody){

        if(repository.findByEmail(requestBody.getEmail()).isEmpty()) return AuthenticationResponse.builder().msg("no existe el usuario").build();

        HttpSession session = request.getSession(true);
        if(!session.getId().isEmpty()) return AuthenticationResponse.builder().msg(session.toString()).build();

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(requestBody.getEmail(), requestBody.getPassword()));

        if(!authentication.isAuthenticated()) return AuthenticationResponse.builder().msg("error de autenticacion").build();


        SecurityContext securityContext = SecurityContextHolder.getContext();
        securityContext.setAuthentication(authentication);
        session.setAttribute("SPRING_SECURITY_CONTEXT", securityContext);

        return AuthenticationResponse.builder().msg("success").build();
    }


}
