package rookies.training.security;

public class AuthResponse {
	private String email;
	private String accessToken;

	private String name;
	
	public AuthResponse() {
		
	}
	public AuthResponse(String email, String accessToken, String name) {
		this.email = email;
		this.accessToken = accessToken;
		this.name = name;
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