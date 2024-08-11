package Catalog.backend.Config;

import Catalog.backend.Auth.AuthenticationResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<String> badCredentialExceptionHandler(AuthenticationException e){
        return new ResponseEntity("Credenciales incorrectos", HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<String> usernameNotFoundExceptionHandler(AuthenticationException e){
        return ResponseEntity.status(401).build();
    }


}