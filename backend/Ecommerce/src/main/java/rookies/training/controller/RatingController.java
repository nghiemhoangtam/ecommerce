package rookies.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import rookies.training.dto.RatingDTO;
import rookies.training.repository.RatingRepository;
import rookies.training.service.RatingService;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {
	
	@Autowired
	RatingService ratingService;
	
	@GetMapping
	public ResponseEntity getAllRatings() {
		return ResponseEntity.ok(ratingService.getAllRatings()) ;
	}
	@GetMapping("/users/{userId}")
	public ResponseEntity getRatingsByUser(@PathVariable Long userId){
		List<RatingDTO> listRatings= ratingService.getRatingsByUser(userId);
		if (listRatings==null)	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("That user is not exist");
		return ResponseEntity.ok(listRatings);
	}
	
	@PostMapping
	public ResponseEntity createRating(@RequestBody RatingDTO ratingDTO) {
		boolean isCreated=ratingService.createRating(ratingDTO);
		return ResponseEntity.ok(isCreated);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity updateRating(@PathVariable Long id, @RequestBody RatingDTO ratingDTO) {
		boolean isUpdated=ratingService.updateRating(id,ratingDTO);
		return ResponseEntity.ok(isUpdated);
	}
}
