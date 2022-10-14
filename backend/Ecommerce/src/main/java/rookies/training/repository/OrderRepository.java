package rookies.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import rookies.training.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
