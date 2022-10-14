package rookies.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import rookies.training.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {

}
