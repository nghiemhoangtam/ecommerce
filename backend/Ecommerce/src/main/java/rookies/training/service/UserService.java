package rookies.training.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import rookies.training.dto.RegisterDTO;
import rookies.training.dto.RoleDTO;
import rookies.training.dto.UserDTO;
import rookies.training.entity.User;

public interface UserService {
	public List<UserDTO> getAllUsers();
	
	public UserDTO getUserById(Long id);
	
	public UserDTO createUser(RegisterDTO registerDTO);
	
	public UserDTO updateUser(UserDTO userDTO);

	public UserDTO getUserByEmail(String email);

	public RoleDTO getRoleOfUserId(Long id);
	
	public boolean deleteUserById(Long id);
}
