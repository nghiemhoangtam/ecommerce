package rookies.training.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import rookies.training.entity.Category;
import rookies.training.entity.Product;
import rookies.training.entity.Role;
import rookies.training.entity.User;
import rookies.training.entity.Wishlist;
import rookies.training.repository.CategoryRepository;
import rookies.training.repository.RoleRepository;
import rookies.training.repository.UserRepository;
import rookies.training.repository.WishlistReposiroty;
import rookies.training.service.ProductService;
import rookies.training.service.RoleService;

@Configuration
public class LoadDB {
	
	@Autowired
	ProductService productService;
	
	@Autowired
	CategoryRepository categoryRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	WishlistReposiroty wishlistReposiroty;
	
//	@Autowired 
//	RoleService roleService;
	
	@Bean
	CommandLineRunner initDatabase() {
		return args -> {
			Category category1=new Category("Máy ảnh","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon3.png");
			Category category2=new Category("Máy chơi game","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon6.png");
			Category category3=new Category("Loa để bàn","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon15.png");
			Category category4=new Category("Tai nghe","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon17.png");
			Category category5=new Category("Smartwatch","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon14.png");
			Category category6=new Category("Chuột máy tính","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon12.png");
			Category category7=new Category("Bàn phím","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon16.png");
			Category category8=new Category("Laptop","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon5.png");
			Category category9=new Category("Máy tính bảng","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon13.png");

			Product product1=new Product("SmartPhone",true,300L,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACcCAMAAAC9ZjJ/AAAAP1BMVEUCAQAHAwEEAgADAgAFAwEFAgAEAgBHcEwGAwEDAQAEAgAHBAEJBQEIBAEKBQENBwF6CwBHBQD2HQC2EQACAAAVbKG9AAAAFHRSTl","Lenovo",category1);
			Product product2=new Product("samsung galaxy",true,400L,"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScSpgs_socwZzW5o5Ao0RsON1K2AEbnFS5TY301pi_JmIwkXIAoUjg82kNuYSyt1tGaXEsHwpvPw&usqp=CAc","Samsung",category2);
			Product product3=new Product("Watch i2",true,600L,"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7INbU5zJH6RQnbW0I3nlz9HDGqQJCzgapuC7_vzvM4sKkbUGGjuNh6ovpz6LW&usqp=CAc","Asus",category3);
			
			Role role1=roleRepository.save(new Role(3L,"CUSTOMER"));
			BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
			User user1=new User("Nguyen Van","A","nguyenvana@gmail.com","01234556",bCryptPasswordEncoder.encode("12345"),role1);
			User user2=new User("Nguyen Van","B","nguyenvanb@gmail.com","01234557",bCryptPasswordEncoder.encode("12345"),role1);
			User user3=new User("Nguyen Van","C","nguyenvanc@gmail.com","01234558",bCryptPasswordEncoder.encode("12345"),role1);

			Role role2=roleRepository.save(new Role(3L,"ADMIN"));
			User admin=new User("Nghiem ","Tam","nghiemtam@gmail.com","09999999",bCryptPasswordEncoder.encode("12345"),role2);
			
			user1.setWishlist(wishlistReposiroty.save(new Wishlist()));		
			user2.setWishlist(wishlistReposiroty.save(new Wishlist()));
			user3.setWishlist(wishlistReposiroty.save(new Wishlist()));
			
			categoryRepository.save(category1);
			categoryRepository.save(category2);
			categoryRepository.save(category3);
			categoryRepository.save(category4);
			categoryRepository.save(category5);
			categoryRepository.save(category6);
			categoryRepository.save(category7);
			categoryRepository.save(category8);
			categoryRepository.save(category9);


			productService.createProduct(product1);
			productService.createProduct(product2);
			productService.createProduct(product3);
//			productService.addProduct(new Product(2L,300L));
			
			
			userRepository.save(user1);
			userRepository.save(user2);
			userRepository.save(user3);
		};
	}
}
