package Catalog.backend.Product;

import Catalog.backend.Store.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;

interface ProductRepository  extends JpaRepository <Product, Integer> {

    @Query(
            "select p.name as name, p.price as price, p.description as description, p.img_path as img_pah " +
            "from Product p " +
            "where p.store = ?1"
    )
    Collection<ProductDtoInterface> findByStore(Store store_id);
}
