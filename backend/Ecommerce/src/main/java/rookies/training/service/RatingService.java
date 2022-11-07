package rookies.training.service;

import java.util.List;

import rookies.training.dto.RatingDTO;
import rookies.training.entity.Product;

public interface RatingService {
	public List<RatingDTO> getAllRatings();
	
	public boolean createRating(RatingDTO ratingDTO);
	
	public boolean updateRating(Long id,RatingDTO ratingDTO);

	List<RatingDTO> getRatingsByUser(Long userId);
}
