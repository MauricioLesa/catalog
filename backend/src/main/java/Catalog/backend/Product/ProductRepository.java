package Catalog.backend.Product;

import Catalog.backend.Store.Store;
import Catalog.backend.Tag.Tag;
import Catalog.backend.Tag.TagDtoInterface;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

interface ProductRepository  extends JpaRepository <Product, Integer> {

    Collection<ProductQueryDto> findByStore(Store store_id);

    @Modifying
    @Transactional
    @Query("update products p " +
            "set p.name = ?1, p.price = ?2, p.description = ?3, p.image = ?4, p.tag = ?6  " +
            "where p.id = ?5 ")
    void setProductById(String name, Double price, String description, String img_path, Integer productId, Collection<Tag> tag);

    Collection<ProductQueryDto> findFirst20ByOrderByIdDesc();

    Collection<ProductQueryDto> findFirst5ByOrderByIdDesc();

    Collection<ProductQueryDto> findByTagName(String tag);

    ProductQueryDto findFirst1ByOrderByIdDesc();

}

interface ProductQueryDto{
    String getName();
    String getDescription();
    String getImage();
    Double getPrice();
    Collection<TagDtoInterface> getTag();
    int getId();
}