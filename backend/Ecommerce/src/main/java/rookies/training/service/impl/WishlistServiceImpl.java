package rookies.training.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rookies.training.dto.WishlistDTO;
import rookies.training.entity.Product;
import rookies.training.entity.Wishlist;
import rookies.training.repository.ProductRepository;
import rookies.training.repository.WishlistReposiroty;
import rookies.training.service.WishlistService;

@Service
public class WishlistServiceImpl implements WishlistService{

	@Autowired
	WishlistReposiroty wishlistReposiroty;
	
	@Autowired
	ProductRepository productRepository;
	
	@Autowired 
	ModelMapper modelMapper;
	
	@Override
	public WishlistDTO getWishlistById(Long id) {
		
		Wishlist wishlist = wishlistReposiroty.findById(id).get();
		if (wishlist==null)	return null;
		return modelMapper.map(wishlist, WishlistDTO.class);
	}

	@Override
	public Wishlist updateWishlist(Wishlist wishlist) {
		
		return wishlistReposiroty.save(wishlist);
	}

	@Override
	public void deleteWishlistById(Long id) {
		wishlistReposiroty.deleteById(id);
	}

	@Override
	public boolean addProduct(Long id, Long productId) {
		Wishlist wishlist=wishlistReposiroty.findById(id).get();
		Product product=productRepository.findById(productId).get();
		if (product==null || wishlist==null)	return false;
		for (Product product2:wishlist.getListProduct()) {
			if (product.getId() == product2.getId()) {
				return false;
			}
		}
		wishlist.getListProduct().add(product);
		wishlistReposiroty.save(wishlist);
		return true;
	}

	@Override
	public boolean removeProductFromWishlist(Long id, Long productId) {
		Wishlist wishlist=wishlistReposiroty.findById(id).get();
		
		if (wishlist==null)	return false;
		List<Product> listProducts=wishlist.getListProduct();
		int i=0;
		for (i=0;i<listProducts.size();i++) {
			if (listProducts.get(i).getId()==productId) {
				break;
			}
		}
		if (i>=listProducts.size())	return false;
		listProducts.remove(i);
		wishlistReposiroty.save(wishlist);
		return true;
	}
	 
	
}
