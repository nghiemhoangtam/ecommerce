package rookies.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import rookies.training.entity.Wishlist;

public interface WishlistReposiroty extends JpaRepository<Wishlist, Long> {

}
