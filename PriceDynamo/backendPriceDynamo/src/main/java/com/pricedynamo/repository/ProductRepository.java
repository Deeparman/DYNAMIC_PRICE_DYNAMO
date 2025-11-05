package com.pricedynamo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pricedynamo.Model.Product;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByName(String name);
}