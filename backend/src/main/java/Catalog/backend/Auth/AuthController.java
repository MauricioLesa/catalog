package Catalog.backend.Auth;


import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
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
            @RequestBody LoginRequest requestBody
    )
    {
        return ResponseEntity.ok(service.login(request, requestBody));
    }

    @GetMapping("/text")
    public ResponseEntity<AuthenticationResponse> text(
            @RequestBody LoginRequest request
    )
    {
        return ResponseEntity.ok(service.test());
    }


}
