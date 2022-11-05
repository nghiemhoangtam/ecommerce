package rookies.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import rookies.training.dto.WishlistDTO;
import rookies.training.service.WishlistService;

@RestController
@RequestMapping("/api")
public class WishlistController {
	
	@Autowired
	WishlistService wishlistService;
	
	
	@GetMapping("/wishlist/{id}")
	public ResponseEntity getWishlistById(@PathVariable Long id) {
		WishlistDTO wishlistDTO=wishlistService.getWishlistById(id);
		return ResponseEntity.ok(wishlistDTO);
	}
	
	@PostMapping("/wishlist/{id}")
	public ResponseEntity addProduct(@PathVariable Long id,@RequestParam Long productId) {
		boolean isAdded = wishlistService.addProduct(id,productId);
		return ResponseEntity.ok(isAdded);
	}
	
	@DeleteMapping("/wishlist/{id}/product")
	public ResponseEntity removeProductFromWishlist(@PathVariable("id") Long id,@RequestParam Long productId) {
		return ResponseEntity.ok(wishlistService.removeProductFromWishlist(id, productId));
	}
}
