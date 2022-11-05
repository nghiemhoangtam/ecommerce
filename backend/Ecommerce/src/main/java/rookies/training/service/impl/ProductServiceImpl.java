package rookies.training.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rookies.training.dto.ProductDTO;
import rookies.training.entity.Product;
import rookies.training.repository.CategoryRepository;
import rookies.training.repository.ProductRepository;
import rookies.training.service.CategoryService;
import rookies.training.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	ProductRepository productRepository;

	@Autowired
	CategoryRepository categoryRepository;
//	@Autowire

	@Override
	public List<ProductDTO> getAllProduct() {
		return productRepository.findAll().stream().map((product) -> modelMapper.map(product,ProductDTO.class)).collect(Collectors.toList());
	}

	@Override
	public ProductDTO getProductById(Long id) {
		
		Product product = productRepository.findById(id).get();
		return modelMapper.map(product,ProductDTO.class);
	}

	@Override
	public ProductDTO createProduct(Product product) {
		if (categoryRepository.findById(product.getCategory().getId()).isEmpty()){
			System.out.println("HELLO");
			categoryRepository.saveAndFlush(product.getCategory());
		}
		product = productRepository.save(product);
		ProductDTO productDTO=modelMapper.map(product,ProductDTO.class);
		return productDTO;
	}

	@Override
	public ProductDTO updateProduct(Product product) {
		if (categoryRepository.findById(product.getCategory().getId()).isEmpty()){
			categoryRepository.saveAndFlush(product.getCategory());
		}
		product = productRepository.save(product);
		ProductDTO productDTO=modelMapper.map(product,ProductDTO.class);
		return productDTO;
	}

	@Override
	public void deleteProductById(Long id) {
		if (productRepository.findById(id).isPresent()) {
			productRepository.deleteById(id);
		}
	}
}
