package Catalog.backend.Product;

import Catalog.backend.Store.Store;
import Catalog.backend.Store.StoreRepository;
import Catalog.backend.Tag.Tag;
import Catalog.backend.Tag.TagDtoInterface;
import Catalog.backend.Tag.TagRepository;
import Catalog.backend.Tag.TagService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final StoreRepository storeRepository;
    private final ProductRepository repository;
    private final TagRepository tagRepository;
    private final TagService tagService;

    public ConfirmationResponse saveNewProduct (SaveProductRequest requestBody){

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String email = ((UserDetails) principal).getUsername();
        Store store = storeRepository.findByUserEmail(email);
        ArrayList<Tag> tags =  tagService.findOrSaveTags(requestBody.getTags());

        Product product = Product.builder()
                .name(requestBody.name)
                .price(requestBody.price)
                .img_path(requestBody.image)
                .store(store)
                .description(requestBody.description)
                .tag(tags)
                .build();

        repository.save(product);


        return ConfirmationResponse.builder().msg("success").build();
    }

    public ProcutListResponse productList() {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Collection<ProductDtoInterface>  list;
        Collection<ProductResponse> productsList = new ArrayList<>();
        if(principal instanceof UserDetails) {
            Store store = storeRepository.findByUserEmail(((UserDetails) principal).getUsername());
            list = repository.findByStore(store);
            for(var product:list){
                Collection<TagDtoInterface> tags = tagRepository.findByProductId(product.getId());
                Collection<String> tagsName = new ArrayList<>();
                for(var tag:tags)
                {
                    tagsName.add(tag.getName());
                }
                productsList.add(ProductResponse.builder()
                        .id(product.getId())
                        .name(product.getName())
                        .description(product.getDescription())
                        .price(product.getPrice())
                        .img_path(product.getImg_path())
                        .tags(tagsName)
                        .build()
                );
            }
        }

        return ProcutListResponse.builder().products(productsList).build();


    }

    public ConfirmationResponse update(UpdateProductRequest requestBody) {

        ArrayList<Tag> tags =  tagService.findOrSaveTags(requestBody.getTags());

        repository.setProductById(requestBody.name,requestBody.price,requestBody.description,requestBody.image,requestBody.id, tags);


        return ConfirmationResponse.builder().msg("success").build();

    }

}
