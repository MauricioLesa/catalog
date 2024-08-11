package Catalog.backend.Auth;

import Catalog.backend.User.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.lang.reflect.Array;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SessionDataResponse {
    private String email;

    private Object[] role;
}
