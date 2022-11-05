package rookies.training.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RatingDTO {
	
	private Long score;
	
	private String comment;
	
	private Long userId;
	
	private Long productId;
}
