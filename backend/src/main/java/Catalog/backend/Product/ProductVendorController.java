package Catalog.backend.Product;

import Catalog.backend.Auth.AuthenticationResponse;
import Catalog.backend.Auth.RegisterRequest;
import Catalog.backend.Auth.RegisterStoreRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class ProductVendorController {

    private final ProductService service;

    @PostMapping("/save")
    public ResponseEntity<ConfirmationResponse> register(
            @RequestBody SaveProductRequest requestBody
    ){
        return ResponseEntity.ok(service.saveNewProduct(requestBody));
    }

    @PutMapping("/update")
    public ResponseEntity<ConfirmationResponse> update(
            @RequestBody SaveProductRequest requestBody
    ){
        return ResponseEntity.ok(ConfirmationResponse.builder().msg("producto actualizado").build());
    }

    @GetMapping("/product-store-list")
    public ResponseEntity<ProcutListResponse> productStoreList(
    ){
        return ResponseEntity.ok(service.productList());
    }
}
