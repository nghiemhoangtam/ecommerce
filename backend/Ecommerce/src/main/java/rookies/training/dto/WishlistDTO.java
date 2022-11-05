package rookies.training.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import rookies.training.entity.Product;

@Getter
@Setter
public class WishlistDTO {
	
	private Long id;
	
	private List<Product> listProduct;
}
