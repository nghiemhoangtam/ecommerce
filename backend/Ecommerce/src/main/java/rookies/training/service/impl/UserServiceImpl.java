package rookies.training.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rookies.training.dto.RegisterDTO;
import rookies.training.dto.RoleDTO;
import rookies.training.dto.UserDTO;
import rookies.training.entity.User;
import rookies.training.entity.Wishlist;
import rookies.training.repository.RoleRepository;
import rookies.training.repository.UserRepository;
import rookies.training.repository.WishlistReposiroty;
import rookies.training.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	ModelMapper modelMapper;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	WishlistReposiroty wishlistReposiroty;

	@Autowired
	RoleRepository roleRepository;

	@Override
	public List<UserDTO> getAllUsers() {
		
		return userRepository.findAll().stream()
				.map((user) -> modelMapper.map(user, UserDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public UserDTO getUserById(Long id) {
		Optional<User> optionUser = userRepository.findById(id);
		if (optionUser.isEmpty()) {
			return null;
		}
		return modelMapper.map(optionUser.get(),UserDTO.class);
	}

	@Override
	public UserDTO createUser(RegisterDTO registerDTO) {
		Optional<User> optionalUser=userRepository.findByEmail(registerDTO.getEmail());
		if (optionalUser.isPresent())	return null;
		User user= modelMapper.map(registerDTO, User.class);
		if (user.getWishlist()==null) {
			user.setWishlist(wishlistReposiroty.save(new Wishlist()));
		}
		if (user.getRole()==null){
			user.setRole(roleRepository.findById(1L).get());
		}
		user = userRepository.save(user);
		return modelMapper.map(user,UserDTO.class);
	}

	@Override
	public UserDTO updateUser(UserDTO userDTO) {
		User user=userRepository.findByEmail(userDTO.getEmail()).get();
		if (user==null) {
			return null;
		}
		return modelMapper.map(user, UserDTO.class);
	}

	@Override
	public UserDTO getUserByEmail(String email) {
		Optional<User> optionUser=userRepository.findByEmail(email);
		if (optionUser.isEmpty()) {
			return null;
		}
		return modelMapper.map(optionUser.get(), UserDTO.class);
	}

	@Override
	public RoleDTO getRoleOfUserId(Long id) {
		User user = userRepository.findById(id).get();
		if (user==null) {
			return null;
		}
		return modelMapper.map(user.getRole(), RoleDTO.class);
	}

	@Override
	public boolean deleteUserById(Long id) {
		User user=userRepository.findById(id).get();
		if (user==null) return false;
		userRepository.deleteById(id);
		return true;
	}
}
