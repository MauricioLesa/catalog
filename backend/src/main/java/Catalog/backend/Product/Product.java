package Catalog.backend.Product;

import Catalog.backend.Offer.Offer;
import Catalog.backend.Store.Store;
import Catalog.backend.Tag.Tag;
import Catalog.backend.User.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue
    private Integer id;

    private String name;

    private String description;

    private String img_path;

    private Double price;

    @ManyToOne
    @JoinColumn(name = "store_id", referencedColumnName = "id")
    private Store store;

    @ManyToMany
    @JoinTable(
            name="products_tags",
            joinColumns=
            @JoinColumn(name="product_id", referencedColumnName="id"),
            inverseJoinColumns=
            @JoinColumn(name="tag_id", referencedColumnName="id")
    )
    private Collection<Tag> tag;

    @OneToMany(mappedBy = "product")
    private Collection<Offer> offer;

}
