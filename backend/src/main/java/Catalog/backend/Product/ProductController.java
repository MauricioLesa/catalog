package Catalog.backend.Product;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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

    @GetMapping("top-product")
    public ResponseEntity<ProductListResponse> topProductList() throws IOException {
        return ResponseEntity.ok(service.topProductList());
    }

    @GetMapping("product-by-tag")
    public ResponseEntity<ProductListResponse> productByTag(
            @RequestParam("tag") String tag
    ) throws IOException {
        return ResponseEntity.ok(service.searchProductByTag(tag));
    }
}
