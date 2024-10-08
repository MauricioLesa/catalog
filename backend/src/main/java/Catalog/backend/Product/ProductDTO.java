package Catalog.backend.Product;

import lombok.*;

@Getter
@Setter
public class ProductDTO {

    private Integer id;

    private String name;

    private String description;

    private String img_path;

    private Double price;

}
