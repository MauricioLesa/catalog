package Catalog.backend.Product;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Collection;

@RestController
@RequestMapping("/public/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService service;

    @GetMapping("product-list")
    public ResponseEntity<ProductListResponse> productList() throws IOException {

        return ResponseEntity.ok(service.latestProductList());
    }
}
