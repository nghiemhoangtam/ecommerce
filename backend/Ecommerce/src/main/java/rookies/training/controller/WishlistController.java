package rookies.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import rookies.training.dto.ProductDTO;
import rookies.training.dto.UserProductDTO;
import rookies.training.dto.WishlistDTO;
import rookies.training.entity.User;
import rookies.training.repository.UserRepository;
import rookies.training.service.WishlistService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/wishlists")
public class WishlistController {
	
	@Autowired
	WishlistService wishlistService;

	@Autowired
	UserRepository userRepository;
	
	
	@GetMapping("/{id}")
	public ResponseEntity getWishlistById(@PathVariable Long id) {
		WishlistDTO wishlistDTO=wishlistService.getWishlistById(id);
		return ResponseEntity.ok(wishlistDTO);
	}

	@GetMapping("/users/{userId}/products")
	public ResponseEntity getProductsFromWishlistByUserId(@PathVariable Long userId){
		List<ProductDTO> listProducts = wishlistService.getAllProductsFromWishlistByUserId(userId);
		return ResponseEntity.ok(listProducts);
	}
	
	@PostMapping
	public ResponseEntity addProduct(@RequestBody UserProductDTO userProductDTO) {
		User user=userRepository.findById(userProductDTO.getUserId()).get();
		boolean isAdded = wishlistService.addProduct(user.getWishlist().getId(),userProductDTO.getProductId());
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
