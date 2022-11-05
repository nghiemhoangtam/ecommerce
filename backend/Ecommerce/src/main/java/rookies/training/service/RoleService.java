package rookies.training.service;

import java.util.List;

import rookies.training.dto.RoleDTO;
import rookies.training.entity.Role;

public interface RoleService {
	
	public List<RoleDTO> getAllRoles();
	
	public RoleDTO getRoleById(Long id);

	public RoleDTO createRole(RoleDTO roleDTO);
	
	public RoleDTO updateRole(Long id,RoleDTO roleDTO);
	
	public boolean deleteRoleById(Long id);
}
