package rookies.training.service;

import java.util.List;

import rookies.training.dto.ProductDTO;
import rookies.training.entity.Product;

public interface ProductService {
	
	public List<ProductDTO> getAllProduct();
	
	public ProductDTO getProductById(Long id);
	
	public ProductDTO createProduct(Product product);
	
	public ProductDTO updateProduct(Long id,Product product);
	
	public void deleteProductById(Long id);

	public List<ProductDTO> getProductsByCategoryId(Long id);
	
}
