package rookies.training.controller;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import rookies.training.dto.RegisterDTO;
import rookies.training.dto.UserDTO;
import rookies.training.entity.User;
import rookies.training.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	UserService userService;
	
	@GetMapping
	public List<UserDTO> getAllUser(){
		return userService.getAllUsers();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity getUserById(@PathVariable("id") Long id) {
		UserDTO userDTO= userService.getUserById(id);
		if (userDTO==null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with id is not exist");
		}
		return ResponseEntity.ok(userDTO);
	}
//	
	@PostMapping
	public ResponseEntity createUser(@RequestBody RegisterDTO registerDTO){
		UserDTO userDTO= userService.createUser(registerDTO);
		if (userDTO==null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with id is not exist");
		}
		return ResponseEntity.ok(userDTO);
	}

	@PutMapping("/{id}")
	public ResponseEntity updateUser(@PathVariable Long id,@RequestBody UserDTO userDTO){
		UserDTO userDTOResult= userService.updateUser(userDTO);
		if (userDTOResult==null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is not exist");
		}
		return ResponseEntity.ok(userDTOResult);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity deleteUser(@PathVariable Long id) {
		boolean isDeleted= userService.deleteUserById(id);
		return ResponseEntity.ok(isDeleted);
	}
	
}
