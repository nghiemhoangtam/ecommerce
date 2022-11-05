package rookies.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import rookies.training.dto.RatingDTO;
import rookies.training.repository.RatingRepository;
import rookies.training.service.RatingService;

@RestController
@RequestMapping("/api")
public class RatingController {
	
	@Autowired
	RatingService ratingService;
	
	@GetMapping("/ratings")
	public List<RatingDTO> getAllRatings() {
		return ratingService.getAllRatings();
	}
	
	@PostMapping("/rating")
	public ResponseEntity createRating(@RequestBody RatingDTO ratingDTO) {
		boolean isCreated=ratingService.createRating(ratingDTO);
		return ResponseEntity.ok(isCreated);
	}
	
	@PutMapping("/rating")
	public ResponseEntity updateRating(@RequestBody RatingDTO ratingDTO) {
		boolean isUpdated=ratingService.updateRating(ratingDTO);
		return ResponseEntity.ok(isUpdated);
	}
}
