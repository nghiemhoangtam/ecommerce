package rookies.training.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import rookies.training.dto.ProductDTO;
import rookies.training.entity.Category;
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

	public ProductServiceImpl(ProductRepository productRepository, ModelMapper modelMapper) {
		this.productRepository=productRepository;
		this.modelMapper=modelMapper;
	}
//	@Autowire

	@Override
	public List<ProductDTO> getAllProduct() {
//		Pageable paging= PageRequest.of(0,10);
		return productRepository.findAll().stream().map((product) -> modelMapper.map(product,ProductDTO.class)).collect(Collectors.toList());
	}

	@Override
	public ProductDTO getProductById(Long id) {
		Optional<Product> optionalProduct=productRepository.findById(id);
		if (optionalProduct.isEmpty())	return null;
		return modelMapper.map(optionalProduct.get(),ProductDTO.class);
	}

	@Override
	public ProductDTO createProduct(Product product) {
		if (categoryRepository.findById(product.getCategory().getId()).isEmpty()){
			categoryRepository.saveAndFlush(product.getCategory());
		}
		product = productRepository.save(product);
		ProductDTO productDTO=modelMapper.map(product,ProductDTO.class);
		return productDTO;
	}

	@Override
	public ProductDTO updateProduct(Long id,Product product) {
		if (categoryRepository.findById(product.getCategory().getId()).isEmpty()){
			categoryRepository.saveAndFlush(product.getCategory());
		}
		if (productRepository.findById(id).isEmpty())	return null;
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

	@Override
	public List<ProductDTO> getProductsByCategoryId(Long id) {
		Category category=categoryRepository.findById(id).get();
		if (category==null){
			return null;
		}
		return category.getListProduct().stream().map((product -> modelMapper.map(product,ProductDTO.class))).collect(Collectors.toList());
	}
}
