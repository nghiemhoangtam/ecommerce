package rookies.training.service;

import java.util.List;

import rookies.training.dto.WishlistDTO;
import rookies.training.entity.Wishlist;

public interface WishlistService {
	
//	public List<Wishlist> getAllWishlists();
	
	public WishlistDTO getWishlistById(Long id);
	
//	public Wishlist createWishlist(Wishlist wishlist);
	
	public Wishlist updateWishlist(Wishlist wishlist);
	
	public void deleteWishlistById(Long id);

	public boolean addProduct(Long id, Long productId);
	
	public boolean removeProductFromWishlist(Long id,Long productId);
	
}
