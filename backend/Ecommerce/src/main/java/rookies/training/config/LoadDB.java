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
			Category category1=new Category("Máy ảnh","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon3.png","/may-anh");
			Category category2=new Category("Máy chơi game","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon6.png","/may-choi-game");
			Category category3=new Category("Loa để bàn","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon15.png","/loa-de-ban");
			Category category4=new Category("Tai nghe","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon17.png","/tai-nghe");
			Category category5=new Category("Smartwatch","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon14.png","/smartwatch");
			Category category6=new Category("Chuột máy tính","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon12.png","/chuot-may-tinh");
			Category category7=new Category("Bàn phím","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon16.png","/ban-phim-may-tinh");
			Category category8=new Category("Laptop","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon5.png","/laptop");
			Category category9=new Category("Máy tính bảng","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon13.png","/tablet");
			Category category10=new Category("Điện thoại","https://vmart.exdomain.net/image/catalog/vmart/danh_muc_sp/icon18.png","/dien-thoai");

			Product smartwatch1=new Product("Đồng Hồ Thông Minh Apple Watch Nike+ Series 5 GPS",true, 15990000L,"https://vmart.exdomain.net/image/cache/catalog/evo/apple-watch-228x228.jpg","Apple",category5);
			Product smartwatch2=new Product("Đồng Hồ Thông Minh Apple Watch Nike+ Series 3 GPS",true,9900000L,"https://vmart.exdomain.net/image/cache/catalog/evo/81800fba5a63eb3209a2cc18125fa7c7-455cda92-c3a6-40f6-b6a5-b78ebee91fe8-228x228.jpg","Apple",category5);
			Product smartwatch3=new Product("Apple Watch SE 40mm (4G) Viền Nhôm - Dây Vải Chính",true,9900000L,"https://vmart.exdomain.net/image/cache/catalog/evo/3bb5a68ad7cb4eb0194b83ed08fa8c0c-228x228.jpg","Apple",category5);
			Product smartwatch4=new Product("Apple Watch S6 40mm viền nhôm dây cao su (Product RED)",true,15990000L,"https://vmart.exdomain.net/image/cache/catalog/evo/66552ac4a5406e90845ae7948c00b073-228x228.jpg","Apple",category5);
			Product smartwatch5=new Product("Apple Watch S6 LTE 40mm viền nhôm dây cao su",true,15990000L,"https://vmart.exdomain.net/image/cache/catalog/evo/apple-watch-2-228x228.jpg","Apple",category5);

			Product laptop1=new Product("Laptop Dell XPS 13 9310 i5 1135G7/8GB/256GB/13.4",true,42990000L,"https://vmart.exdomain.net/image/cache/catalog/evo/xps-13-9310-228x228.jpg","Dell",category8);
			Product laptop2=new Product("Laptop Asus ZenBook Duo UX481FL BM048T i5",true,22900000L,"https://vmart.exdomain.net/image/cache/catalog/evo/laptop-asus-zenbook-ux425j-2-228x228.jpg","Asus",category8);
			Product laptop3=new Product("Laptop MSI Gaming GF63 THIN 10SCXR-1218VN",true,20990000L,"https://vmart.exdomain.net/image/cache/catalog/evo/f0a3bf16c58311fe86ae3695df95ae4d-228x228.jpg","MSI",category8);
			Product laptop4=new Product("Laptop MSI Gaming GL65 LEOPARD 10SCXK-089VN",true,24990000L,"https://vmart.exdomain.net/image/cache/catalog/evo/ccb55bb56f5b384e2819486a76922aad-228x228.jpg","MSI",category8);
			Product laptop5=new Product("Laptop MSI Gaming BRAVO 15 A4DCR-270VN",true,19490000L,"https://vmart.exdomain.net/image/cache/catalog/evo/f9fb4ffcd5f8a9ab04f5691d59bb6548-228x228.jpg","MSI",category8);
			Product laptop6=new Product("Laptop MSI Gaming GF65 THIN 10SER-622VN",true,20000000L,"https://vmart.exdomain.net/image/cache/catalog/evo/e7c53b0158b775d555988491b01d1103-228x228.jpg","MSI",category8);
			Product laptop7=new Product("Apple Macbook Pro 2020 - 13 Inchs (i5-8th/ 8GB/ 256GB) - Hàng Chính Hãng",true,39990000L,"https://vmart.exdomain.net/image/cache/catalog/evo/4225b9b34f41d1f718ce6f136ffcf96c-228x228.jpg","MSI",category8);
			Product laptop8=new Product("Apple Macbook Air 2020 - 13 Inchs (i3-10th/ 8GB/ 256GB) - Hàng Chính Hãng",true,28990000L,"https://vmart.exdomain.net/image/cache/catalog/evo/fa9543e473968692e579b66919286887-228x228.jpg","Apple",category8);
			Product laptop9=new Product("Laptop Apple MacBook Pro 2020 M1/8GB/256GB",true,36990000L,"https://vmart.exdomain.net/image/cache/catalog/evo/0aae2ebd7d4568cb577629db0a5c744b-228x228.jpg","Apple",category8);
			Product laptop10=new Product("MacBook Pro 16 inch 2019 Touch Bar 2.3GHz Core i9",true,30000000L,"https://vmart.exdomain.net/image/cache/catalog/evo/macbook-pro-16-touch-bar-2-6ghz-512gb-2019-1-2-228x228.jpg","Apple",category8);

			Product mouse1=new Product("Chuột Logitech G Pro Hero",true,890000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gearvn_logitech_g302_89980f1c046d49529fa5a8b15604c518-228x228.png","Logitech",category6);
			Product mouse2=new Product("Chuột gaming Logitech G300S",true,399000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/dm8xxy_633efb36a8b44c89bdc6a1acd0e7efea-228x228.jpg","Logitech",category6);
			Product mouse3=new Product("Chuột không dây Logitech M331 Silent",true,330000L,"https://vmart.exdomain.net/image/cache/catalog/vmart/san_pham/Logitech-M331-228x228.png","Logitech",category6);
			Product mouse4=new Product("Chuột Logitech B100",true,80000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/logitech-b100_e64e3cd6552e4e67ae74aa373ea5784d-228x228.jpg","Logitech",category6);
			Product mouse5=new Product("Chuột Logitech G Pro Wireless",true,2690000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gvn_logitech_gpro_wless_3d113e4c2ea74904bb2b01fd6d75be84-228x228.png","Logitech",category6);
			Product mouse6=new Product("Chuột Logitech G Pro X Superlight Wireless Black",true,2990000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gearvn-chuot-logitech-g-pro-x-superlight-wireless-black-666_83650815ce2e486f9108dbbb17c29159-228x228.jpg","Logitech",category6);
			Product mouse7=new Product("Chuột Logitech G Pro X Superlight Wireless Gray",true,400000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8-228x228.jpg","Logitech",category6);
			Product mouse8=new Product("Chuột Logitech G Pro X Superlight Wireless White",true,2990000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gvn_logitech_gpro_wless_3d113e4c2ea74904bb2b01fd6d75be84-228x228.png","Logitech",category6);
			Product mouse9=new Product("Chuột Logitech G302 Daedalus Prime",true,400000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gearvn_logitech_g302_89980f1c046d49529fa5a8b15604c518-228x228.png","Logitech",category6);
			Product mouse10=new Product("Chuột Logitech G102 Lightsync RGB White",true,790000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/logitech-g102-lightsync-rgb-white-1_eb113ff7e83b4289812fb9bff7034b4d-228x228.jpg","Logitech",category6);
			Product mouse11=new Product("Chuột Logitech G304 Lightspeed Wireless",true,790000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gvn_log_g304_3df28cd60a48412b8fb1d2ff762dc6a9-228x228.png","Logitech",category6);
			Product mouse12=new Product("Chuột Logitech G304 Lightspeed Wireless White",true,640000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gearvn-chuot-logitech-g304-lightspeed-wireless-white-1000_e28318985b5049099c4e8381695e810f-228x228.jpg","Logitech",category6);
			Product mouse13=new Product("Chuột Logitech G402 Hyperion",true,570000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gearvn-logitech-g402-hyperion-fury-ultra-fast-666_4a355fb41b804b15a858496e007e80b2-228x228.png","Logitech",category6);
			Product mouse14=new Product("Chuột Logitech G403 HERO",true,520000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gvn_logitech_g403ha_643f1513decf40fdaba66be65dd2ad12-228x228.jpg","Logitech",category6);
			Product mouse15=new Product("Chuột Logitech G502 Hero",true,190000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gearvn_logitech_g502hero-228x228.png","Logitech",category6);
			Product mouse16=new Product("Chuột Logitech G502 Hero Lightspeed Wireless",true,390000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gearvn-chuot-logitech-g502-hero-lightspeed-wireless-1995_2bf30f3970554d4e8c1aa01bc6ae6993-228x228.jpg","Logitech",category6);
			Product mouse17=new Product("Chuột Logitech G603 Lightspeed Wireless",true,120000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gearvn_g603-228x228.jpg","Logitech",category6);
			Product mouse18=new Product("Chuột Logitech G604 Hero Lightspeed Wireless",true,150000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/logitech_g604_lightspeed_wireless_gaming_mouse_ac27650_e8da5334adb34bf1a063d45acea66680-228x228.jpg","Logitech",category6);
			Product mouse19=new Product("Chuột Logitech G703 HERO Lightspeed Wireless",true,190000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gvn_logitech_g703hb_e86a9b10e50146819d11c20cf2b2709c-228x228.png","Logitech",category6);
			Product mouse20=new Product("Chuột Logitech M190 Wireless",true,270000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/gearvn-chuot-logitech-m190-wireless-6666_900e6c5b4bbc4ef89ac21e00d4d3d67f-228x228.png","Logitech",category6);
			Product mouse21=new Product("Chuột Logitech MX Anywhere 2S",true,390000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/anywhere-2s-gearvn-228x228.jpg","Logitech",category6);
			Product mouse22=new Product("Chuột Logitech MX Anywhere 3 for Mac",true,1790000L,"https://vmart.exdomain.net/image/cache/catalog/gearvn/logitech-mx-anywhere3-mac-b_ac5812aabc504d4a983eb904e2bcdf83-228x228.jpg","Logitech",category6);
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
			categoryRepository.save(category10);


			productService.createProduct(smartwatch1);
			productService.createProduct(smartwatch2);
			productService.createProduct(smartwatch3);
			productService.createProduct(smartwatch4);
			productService.createProduct(smartwatch5);

			productService.createProduct(laptop1);
			productService.createProduct(laptop2);
			productService.createProduct(laptop3);
			productService.createProduct(laptop4);
			productService.createProduct(laptop5);
			productService.createProduct(laptop6);
			productService.createProduct(laptop7);
			productService.createProduct(laptop8);
			productService.createProduct(laptop9);
			productService.createProduct(laptop10);

			productService.createProduct(mouse1);
			productService.createProduct(mouse2);
			productService.createProduct(mouse3);
			productService.createProduct(mouse4);
			productService.createProduct(mouse5);
			productService.createProduct(mouse6);
			productService.createProduct(mouse7);
			productService.createProduct(mouse8);
			productService.createProduct(mouse9);
			productService.createProduct(mouse10);
			productService.createProduct(mouse11);
			productService.createProduct(mouse12);
			productService.createProduct(mouse13);
			productService.createProduct(mouse14);
			productService.createProduct(mouse15);
			productService.createProduct(mouse16);
			productService.createProduct(mouse17);
			productService.createProduct(mouse18);
			productService.createProduct(mouse19);
			productService.createProduct(mouse20);
			productService.createProduct(mouse21);
			productService.createProduct(mouse22);
			
			
			userRepository.save(user1);
			userRepository.save(user2);
			userRepository.save(user3);
			userRepository.save(admin);
		};
	}
}
