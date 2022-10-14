package rookies.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import rookies.training.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
