package rookies.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import rookies.training.entity.Rating;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
	
	
}
