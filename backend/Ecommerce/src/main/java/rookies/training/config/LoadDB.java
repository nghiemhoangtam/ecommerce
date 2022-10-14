package rookies.training.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import rookies.training.entity.Category;
import rookies.training.entity.Product;
import rookies.training.repository.CategoryRepository;
import rookies.training.service.ProductService;

@Configuration
public class LoadDB {
	
	@Autowired
	ProductService productService;
	
	@Autowired
	CategoryRepository categoryRepository;
	
	@Autowired 
	RoleS
	
	@Bean
	CommandLineRunner initDatabase() {
		return args -> {
			
			
			
			
			Category category=new Category();
			categoryRepository.save(category);
			productService.addProduct(new Product(true,300L,"###","Lenovo",category));
//			productService.addProduct(new Product(2L,300L));
		};
	}
}
