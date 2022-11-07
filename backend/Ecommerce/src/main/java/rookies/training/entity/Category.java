package rookies.training.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;

@Entity
@Table(name="Categories")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Category {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column(name="name")
	private String name;

	@Column(name="logo_url")
	private String logoUrl;

	@Column(name="url")
	private String url;

	@JsonIgnore
	@OneToMany(mappedBy = "category")
	private List<Product> listProduct;
	
	public Category(String name,String logoUrl,String url) {
		this.name = name;
		this.logoUrl=logoUrl;
		this.url = url;
	}

	public Category(Long id, String name) {
		this.id = id;
		this.name = name;
	}

//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public List<Product> getListProduct() {
//		return listProduct;
//	}
//
//	public void setListProduct(List<Product> listProduct) {
//		this.listProduct = listProduct;
//	}
	
	
	
	
}
