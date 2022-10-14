package rookies.training.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name="shipping_fee")
	private Long shippingFee;
	
	@Column(name="created_date")
	private LocalDateTime createdDate;
	
	@Column(name="payment_method")
	private boolean paymentMethod;
	
	@ManyToOne
	@JoinColumn(name="cart_id",referencedColumnName = "id")
	private Cart cart;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getShippingFee() {
		return shippingFee;
	}

	public void setShippingFee(Long shippingFee) {
		this.shippingFee = shippingFee;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public boolean isPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(boolean paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}
	
	
}
