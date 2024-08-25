package Catalog.backend.Product;

import Catalog.backend.Auth.AuthenticationResponse;
import Catalog.backend.Auth.RegisterRequest;
import Catalog.backend.Store.Store;
import Catalog.backend.Store.StoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final StoreRepository storeRepository;

    public AuthenticationResponse saveNewProduct (){

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String email = ((UserDetails) principal).getUsername();
        Store store = storeRepository.findByUserEmail(email);




        return AuthenticationResponse.builder().msg(store.getName()).build();
    }
}
