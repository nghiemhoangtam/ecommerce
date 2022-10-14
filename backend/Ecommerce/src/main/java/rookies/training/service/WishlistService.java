package rookies.training.service;

import java.util.List;

import rookies.training.entity.Wishlist;

public interface WishlistService {
	
//	public List<Wishlist> getAllWishlists();
	
	public Wishlist getWishlistById();
	
	public Wishlist addWishlist(Wishlist wishlist);
	
	public Wishlist updateWishlist(Wishlist wishlist);
	
}
