package Catalog.backend.Tag;

import Catalog.backend.Product.Product;
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
@Entity(name = "tas")
public class Tag {
    @Id
    @GeneratedValue
    private Integer id;

    private String name;

    @ManyToMany
    @JoinTable(
            name="products_tags",
            joinColumns=
            @JoinColumn(name="tag_id", referencedColumnName="id"),
            inverseJoinColumns=
            @JoinColumn(name="product_id", referencedColumnName="id")
    )
    private Collection<Product> product;
}
