package Catalog.backend.Review;

import Catalog.backend.Product.Product;
import Catalog.backend.User.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user_id;

    @Id
    @OneToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product_id;

    private String comment;

    private Integer score;

}
