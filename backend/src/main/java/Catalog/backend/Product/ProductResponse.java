package Catalog.backend.Product;

import Catalog.backend.Tag.TagDtoInterface;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse {

        @Id
        @GeneratedValue
        private Integer id;

        private String name;

        private String description;

        private String img_path;

        private Double price;

        private Collection<String> tags;


}
