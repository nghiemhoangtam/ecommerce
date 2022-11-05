package rookies.training.dto;

import lombok.Getter;
import lombok.Setter;
import rookies.training.entity.Role;
import rookies.training.entity.Wishlist;

@Getter
@Setter
public class UserDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    
    private Role role;
    
    private Wishlist wishlist;
    
    
}
