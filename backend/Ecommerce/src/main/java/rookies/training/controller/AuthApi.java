package rookies.training.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rookies.training.dto.LoginDTO;
import rookies.training.dto.RegisterDTO;
import rookies.training.dto.UserDTO;
import rookies.training.entity.CustomUserDetails;
import rookies.training.entity.User;
import rookies.training.security.AuthResponse;
import rookies.training.security.JwtTokenUtil;
import rookies.training.service.UserService;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@CrossOrigin
@RestController
public class AuthApi {
	
	@Autowired
	AuthenticationManager authManager;

	@Autowired
	UserService userService;
	
	@Autowired
	JwtTokenUtil jwtTokenUtil;

//	@Autowired
//	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDTO request){
		try {
			Authentication authentication=authManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
			CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
			String accessToken=jwtTokenUtil.generateAccessToken(userDetails.getUser());
			User user=userDetails.getUser();
			AuthResponse response=new AuthResponse(user.getId(),user.getEmail(),accessToken,user.getFirstName()+" "+user.getLastName());
			return ResponseEntity.ok(response);
		} catch (BadCredentialsException e) {
			System.out.println("bad");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("The user name or password is incorrect");
		}
	}

	@PostMapping("/register")
	public ResponseEntity register(@RequestBody RegisterDTO registerDTO){
		BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
		registerDTO.setPassword(bCryptPasswordEncoder.encode(registerDTO.getPassword()));
		UserDTO userDTO= userService.createUser(registerDTO);
		if (userDTO==null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is exist");
		}
		return ResponseEntity.ok(true);
	}
}

