package Catalog.backend.Product;

import Catalog.backend.Auth.AuthenticationResponse;
import Catalog.backend.Auth.RegisterRequest;
import Catalog.backend.Store.Store;
import Catalog.backend.Store.StoreRepository;
import Catalog.backend.Utils.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final StoreRepository storeRepository;
    private final ProductRepository repository;
    private final ImageService imageService;

    public AuthenticationResponse saveNewProduct (SaveProductRequest requestBody){

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String email = ((UserDetails) principal).getUsername();
        Store store = storeRepository.findByUserEmail(email);

        Product product = Product.builder()
                .name(requestBody.name)
                .price(requestBody.price)
                .img_path(requestBody.image)
                .store(store)
                .description(requestBody.description)
                .build();

        repository.save(product);


        return AuthenticationResponse.builder().msg("success").build();
    }
}
