package rookies.training.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Products")
@Getter
@Setter
@NoArgsConstructor
public class Product {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column(name = "status")
	private boolean status;
	
	@Column(name="price")
	private Long price;
	
	@Column(name="img_url")
	private String imgUrl;
	
	@Column(name="brand")
	private String brand;
	
	@ManyToOne
	@JoinColumn(name = "category_id", referencedColumnName = "id")
	private Category category;
	
	public Product(Long id, Long price) {
		// TODO Auto-generated constructor stub
		this.id = id;
		this.price=price;
		
	}
	
	public Product() {
		
	}

	public Product(boolean status, Long price, String imgUrl, String brand, Category category) {
		super();
		this.status = status;
		this.price = price;
		this.imgUrl = imgUrl;
		this.brand = brand;
		this.category = category;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}
	
//	@OneToMany(mappedBy = "product")
//	private List<CartProduct> listCartProduct;
}
