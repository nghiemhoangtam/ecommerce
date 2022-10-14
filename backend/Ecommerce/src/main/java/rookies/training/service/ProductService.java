package rookies.training.service;

import java.util.List;

import rookies.training.entity.Product;

public interface ProductService {
	
	public List<Product> getAllProduct();
	
	public Product getProductById(Long id);
	
	public Product addProduct(Product product);
	
	public Product updateProduct(Product product);
	
	public void removeProductById(Long id);
	
}
