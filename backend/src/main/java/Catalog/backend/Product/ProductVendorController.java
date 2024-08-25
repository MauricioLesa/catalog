package Catalog.backend.Product;

import Catalog.backend.Auth.AuthenticationResponse;
import Catalog.backend.Auth.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class ProductVendorController {

    private final ProductService service;

    @GetMapping("/save")
    public ResponseEntity<AuthenticationResponse> register(
    ){
        return ResponseEntity.ok(service.saveNewProduct());
    }
}
