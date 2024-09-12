package Catalog.backend.Product;

import Catalog.backend.Store.Store;
import Catalog.backend.Tag.Tag;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;
import java.util.Collection;

interface ProductRepository  extends JpaRepository <Product, Integer> {

    @Query(
            "select p.id as id,p.name as name, p.price as price, p.description as description, p.img_path as img_pah " +
            "from products p " +
            "where p.store = ?1 "
    )
    Collection<ProductDtoInterface> findByStore(Store store_id);

    @Modifying
    @Transactional
    @Query("update products p " +
            "set p.name = ?1, p.price = ?2, p.description = ?3, p.img_path = ?4, p.tag = ?6  " +
            "where p.id = ?5 ")
    void setProductById(String name, Double price, String description, String img_path, Integer productId, Collection<Tag> tag);

}
