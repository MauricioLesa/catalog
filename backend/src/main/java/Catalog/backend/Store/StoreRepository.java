package Catalog.backend.Store;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StoreRepository extends JpaRepository<Store, Integer> {

    Optional<Store> findByName(String name);

    Store findByUserEmail(String email);

}
