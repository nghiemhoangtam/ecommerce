package rookies.training.service;

import rookies.training.entity.Cart;

public interface CartService {
	
	public Cart getCartById(Long id);
	
	public Cart addCart(Cart cart);
	
	public Cart updateCart(Cart cart);
}
