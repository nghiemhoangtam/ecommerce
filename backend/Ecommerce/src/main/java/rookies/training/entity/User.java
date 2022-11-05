package rookies.training.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "email",unique = true)
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name="phone")
	private String phone;
	
	@OneToOne
	@JoinColumn(name="wishlist_id",referencedColumnName = "id")
	private Wishlist wishlist;
	
	@ManyToOne
	@JoinColumn(name="role_id",referencedColumnName = "id")
	private Role role;
	
	@OneToMany(mappedBy = "user", targetEntity = Rating.class)
	private List<Cart> listCart;

	@OneToMany(mappedBy = "user",targetEntity = Rating.class)
	private List<Rating> listRating=new ArrayList<>(); 
	
	public User(String firstName, String lastName, String email, String phone,String password, Role role) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.role = role;
		this.password = password;
	}
	
}
