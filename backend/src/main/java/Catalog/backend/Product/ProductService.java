package Catalog.backend.Product;

import Catalog.backend.Auth.AuthenticationResponse;
import Catalog.backend.Store.Store;
import Catalog.backend.Store.StoreRepository;
import Catalog.backend.User.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final StoreRepository storeRepository;
    private final ProductRepository repository;
    private final UserRepository userRepository;

    public ConfirmationResponse saveNewProduct (SaveProductRequest requestBody){

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


        return ConfirmationResponse.builder().msg("success").build();
    }

    public ProcutListResponse productList() {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Collection<ProductDtoInterface>  list;
        if(principal instanceof UserDetails) {

            Store store = storeRepository.findByUserEmail(((UserDetails) principal).getUsername());

            list = repository.findByStore(store);
        }
        else list = new ArrayList<>();

        return ProcutListResponse.builder().products(list).build();


    }
}
