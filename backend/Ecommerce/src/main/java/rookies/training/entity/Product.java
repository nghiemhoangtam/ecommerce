package rookies.training.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Entity
@Table(name="Products")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name = "status")
	private boolean status;
	
	@Column(name="price")
	private Long price;
	
	@Column(name="img_url")
	private String imgUrl;
	
	@Column(name="brand")
	private String brand;
	
//	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "category_id", referencedColumnName = "id")
	private Category category;
	
	@JsonIgnore
	@OneToMany(mappedBy = "product",targetEntity = Rating.class)
	private List<Rating> listRating=new ArrayList<>();
	
	public Product(String name,boolean status, Long price, String imgUrl, String brand, Category category) {
		this.name = name;
		this.status = status;
		this.price = price;
		this.imgUrl = imgUrl;
		this.brand = brand;
		this.category = category;
//		this.listRating=new ArrayList<Rating>();
	}

}
