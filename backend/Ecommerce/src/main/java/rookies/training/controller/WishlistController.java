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
@RequestMapping("/api/wishlists")
public class WishlistController {
	
	@Autowired
	WishlistService wishlistService;
	
	
	@GetMapping("/{id}")
	public ResponseEntity getWishlistById(@PathVariable Long id) {
		WishlistDTO wishlistDTO=wishlistService.getWishlistById(id);
		return ResponseEntity.ok(wishlistDTO);
	}
	
	@PostMapping("/{id}/products/{productId}")
	public ResponseEntity addProduct(@PathVariable Long id,@PathVariable Long productId) {
		boolean isAdded = wishlistService.addProduct(id,productId);
		return ResponseEntity.ok(isAdded);
	}
	
	@DeleteMapping("/{id}/products/{productId}")
	public ResponseEntity removeProductFromWishlist(@PathVariable("id") Long id,@PathVariable Long productId) {
		return ResponseEntity.ok(wishlistService.removeProductFromWishlist(id, productId));
	}
	@DeleteMapping("/{id}")
	public ResponseEntity deleteWishlist(@PathVariable Long id){
		return ResponseEntity.ok(wishlistService.deleteWishlistById(id));
	}
}
