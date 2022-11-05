package rookies.training.dto;

import lombok.Data;
import rookies.training.entity.Category;

import javax.persistence.Id;

@Data
public class ProductDTO {

    private Long id;
    private String name;
    private boolean status;
    private Long price;
    private String imgUrl;
    private String brand;

    private Category category;
//    private

}
