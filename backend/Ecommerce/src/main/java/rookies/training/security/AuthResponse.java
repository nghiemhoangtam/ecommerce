package rookies.training.security;

public class AuthResponse {
	private Long id;
	private String email;
	private String accessToken;

	private String name;
	
	public AuthResponse() {
		
	}
	public AuthResponse(Long id,String email, String accessToken, String name) {
		this.id = id;
		this.email = email;
		this.accessToken = accessToken;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	public String getName(){return name;}
	public void setName(String name){
		this.name = name;
	}
}