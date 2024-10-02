package Catalog.backend.Product;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

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
            @RequestBody UpdateProductRequest requestBody
    ){
        return ResponseEntity.ok(service.update(requestBody));
    }

    @GetMapping("/product-store-list")
    public ResponseEntity<ProductListResponse> productStoreList(
    ) throws IOException {
        return ResponseEntity.ok(service.productStoreList());
    }
}
