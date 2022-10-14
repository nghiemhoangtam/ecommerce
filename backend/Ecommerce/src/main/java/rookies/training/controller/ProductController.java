package rookies.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import rookies.training.entity.Product;
import rookies.training.repository.ProductRepository;
import rookies.training.service.ProductService;

@RestController
@RequestMapping("/api")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/product")
	public List<Product> getAllProducts(){
		return productService.getAllProduct();
	}
	
	@GetMapping("/product/{id}")
	public Product getProduct(@PathVariable("id") Long id){
		Product product = productService.getProductById(id);
		System.out.println(product.getBrand());
		return product;
	}
	
}
