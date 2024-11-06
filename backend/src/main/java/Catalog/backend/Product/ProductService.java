package Catalog.backend.Product;

import Catalog.backend.Store.Store;
import Catalog.backend.Store.StoreRepository;
import Catalog.backend.Tag.Tag;
import Catalog.backend.Tag.TagDtoInterface;
import Catalog.backend.Tag.TagRepository;
import Catalog.backend.Tag.TagService;
import Catalog.backend.Utils.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final StoreRepository storeRepository;
    private final ProductRepository repository;
    private final TagService tagService;
    private final ImageService imageService;

    public ConfirmationResponse saveNewProduct (SaveProductRequest requestBody){

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String email = ((UserDetails) principal).getUsername();
        Store store = storeRepository.findByUserEmail(email);
        ArrayList<Tag> tags =  tagService.findOrSaveTags(requestBody.getTags());

        Product product = Product.builder()
                .name(requestBody.name)
                .price(requestBody.price)
                .image(requestBody.image)
                .store(store)
                .description(requestBody.description)
                .tag(tags)
                .build();

        repository.save(product);


        return ConfirmationResponse.builder().msg("success").build();
    }

    public ProductListResponse productStoreList() throws IOException {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Collection<ProductResponse> productsList = new ArrayList<>();

        if(principal instanceof UserDetails) {

            Store store = storeRepository.findByUserEmail(((UserDetails) principal).getUsername());

            Collection<ProductQueryDto>  list  = repository.findByStore(store);

            for(var product:list){
                byte[] img = imageService.getImage(product.getImage());
                productsList.add(ProductResponse.builder()
                        .id(product.getId())
                        .name(product.getName())
                        .description(product.getDescription())
                        .price(product.getPrice())
                        .img(img)
                        .tags(product.getTag())
                        .build()
                );
            }

        }

        return ProductListResponse.builder().products(productsList).build();


    }

    public ConfirmationResponse update(UpdateProductRequest requestBody) {

        ArrayList<Tag> tags =  tagService.findOrSaveTags(requestBody.getTags());

        repository.setProductById(requestBody.name,requestBody.price,requestBody.description,requestBody.image,requestBody.id, tags);


        return ConfirmationResponse.builder().msg("success").build();

    }

    public ProductListResponse latestProductList() throws IOException {

        Collection<ProductResponse> productsList = new ArrayList<>();
        Collection<ProductQueryDto>  list;
        list = repository.findFirst20ByOrderByIdDesc();
        for(var product:list){
            byte[] img = imageService.getImage(product.getImage());
            productsList.add(ProductResponse.builder()
                    .id(product.getId())
                    .name(product.getName())
                    .description(product.getDescription())
                    .price(product.getPrice())
                    .img(img)
                    .tags(product.getTag())
                    .build()
            );
        }
        return ProductListResponse.builder().products(productsList).build();
    }

    public ProductListResponse topProductList() throws IOException {
        Collection<ProductResponse> productsList = new ArrayList<>();
        Collection<ProductQueryDto>  list = repository.findFirst5ByOrderByIdDesc();
        for(var product:list){
            byte[] img = imageService.getImage(product.getImage());
            productsList.add(ProductResponse.builder()
                    .id(product.getId())
                    .name(product.getName())
                    .description(product.getDescription())
                    .price(product.getPrice())
                    .img(img)
                    .build()
            );
        }
        return ProductListResponse.builder().products(productsList).build();
    }

    public ProductListResponse searchProductByTag(String tag) throws IOException {
        Collection<ProductResponse> productsList = new ArrayList<>();
        Collection<ProductQueryDto> list = repository.findByTagName(tag);
        for(var product:list){
            byte[] img = imageService.getImage(product.getImage());
            productsList.add(ProductResponse.builder()
                    .id(product.getId())
                    .name(product.getName())
                    .description(product.getDescription())
                    .price(product.getPrice())
                    .img(img)
                    .build()
            );
        }
        return ProductListResponse.builder().products(productsList).build();
    }

    public ProductQueryDto firstProduct() {
        return repository.findFirst1ByOrderByIdDesc();
    }
}
