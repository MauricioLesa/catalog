package Catalog.backend.Product;

import Catalog.backend.Tag.TagDtoInterface;

import java.util.ArrayList;

public interface ProductDtoInterface {

    Integer getId();

    String getName();

    String getDescription();

    String getImg_path();

    Double getPrice();

    ArrayList<TagDtoInterface> getTags();


}
