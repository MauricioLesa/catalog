package Catalog.backend.Auth;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.processing.SupportedOptions;
import javax.naming.NameAlreadyBoundException;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthController {

    private final AuthService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            HttpServletRequest request,
            @RequestBody RegisterRequest requestBody
    ){
        return ResponseEntity.ok(service.register(request, requestBody));
    }

    @PostMapping("/register-store")
    public ResponseEntity<AuthenticationResponse> registerStore(
            HttpServletRequest request,
            @RequestBody RegisterStoreRequest requestBody
    )
    {
        return ResponseEntity.ok(service.registerStore(request, requestBody));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            HttpServletRequest request,
            HttpServletResponse response,
            @RequestBody LoginRequest requestBody
    )
    {
        return ResponseEntity.ok(service.login(request, requestBody));
    }

    @GetMapping("/sessionData")
    public ResponseEntity<SessionDataResponse> isLogged(
    )
    {
        return ResponseEntity.ok(service.isLogged());
    }


}
