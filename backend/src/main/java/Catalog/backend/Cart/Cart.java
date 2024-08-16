package Catalog.backend.Cart;

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
@Table(name = "carts")
public class Cart {

    @EmbeddedId
    private CartPrimaryKey cart_id;

}
