package Catalog.backend.Auth;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.processing.SupportedOptions;

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
    )
    {
        return ResponseEntity.ok(service.register(request, requestBody));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> register(
            HttpServletRequest request,
            HttpServletResponse response,
            @RequestBody LoginRequest requestBody
    )
    {
        return ResponseEntity.ok(service.login(request, requestBody));
    }



    @PostMapping("/test")
    public String text(
    )
    {
        return "*";
    }


}
