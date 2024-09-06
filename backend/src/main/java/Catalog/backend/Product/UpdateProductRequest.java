package Catalog.backend.Product;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateProductRequest {
    Integer id;
    String name;
    Double price;
    String description;
    String image;
    ArrayList<String> tags;
}
