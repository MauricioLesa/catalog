package Catalog.backend.Review;

import Catalog.backend.Product.Product;
import Catalog.backend.User.User;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Embeddable
@Data
public class ReviewPrimaryKey {

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user_id;

    @OneToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product_id;

}
