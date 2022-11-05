package rookies.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rookies.training.dto.RoleDTO;
import rookies.training.entity.Role;
import rookies.training.service.RoleService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RoleController {

    @Autowired
    RoleService roleService;

    @GetMapping("/roles")
    public List<RoleDTO> getAllRoles(){
        return roleService.getAllRoles();
    }
    
    @PostMapping("/role")
    public RoleDTO createRole(RoleDTO roleDTO) {
    	return roleService.createRole(roleDTO);
    }
    
    @PutMapping("/role/{id}")
    public RoleDTO updateRole(@PathVariable("id") Long id,RoleDTO roleDTO) {
    	return roleService.updateRole(id,roleDTO);
    }
    
    @DeleteMapping("/role/{id}")
    public ResponseEntity deleteRoleById(@PathVariable("id") Long id) {
    	boolean isDeleted=roleService.deleteRoleById(id);
    	if (!isDeleted) {
    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This role is not exist");
    	}
    	return ResponseEntity.ok("This role was deleted successfully.");
    }

}
