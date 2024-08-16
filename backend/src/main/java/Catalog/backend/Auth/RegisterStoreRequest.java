package Catalog.backend.Auth;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterStoreRequest {

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String storeName;

    private String storeDescription;

    private String storeDirection;


}
