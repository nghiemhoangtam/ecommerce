package rookies.training.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import rookies.training.dto.ProductDTO;
import rookies.training.entity.Product;
import rookies.training.repository.ProductRepository;
import rookies.training.service.ProductService;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ProductController {
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private ProductService productService;

	@GetMapping("/products")
	public List<ProductDTO> getAllProducts(){
		return productService.getAllProduct();
	}
	
	@GetMapping("/product/{id}")
	public ProductDTO getProduct(@PathVariable("id") Long id){
//		Product product = productService.getProductById(id);
//		ProductDTO productDTO=modelMapper.map(product,ProductDTO.class);
//		System.out.println(product.getBrand());
		return productService.getProductById(id);
	}
	
	@PostMapping("/product")
	public ProductDTO createProduct(@RequestBody ProductDTO productDTO) {
		Product product=modelMapper.map(productDTO,Product.class);
		productService.createProduct(product);
		System.out.println(product.getCategory().getName());
		return productDTO;
	}

	@PutMapping("/product")
	public ProductDTO updateProduct(@RequestBody ProductDTO productDTO){
		Product product=modelMapper.map(productDTO,Product.class);
		return productService.updateProduct(product);
	}

	@DeleteMapping("/product/{id}")
	public ResponseEntity deleteProductById(@PathVariable("id") Long id){
		productService.deleteProductById(id);
		return ResponseEntity.ok("Delete successfully");
	}
	
}
