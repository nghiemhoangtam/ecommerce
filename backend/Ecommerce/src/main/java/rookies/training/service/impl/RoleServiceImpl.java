package rookies.training.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import rookies.training.dto.RoleDTO;
import rookies.training.entity.Role;
import rookies.training.repository.RoleRepository;
import rookies.training.service.RoleService;

@Service
public class RoleServiceImpl implements RoleService {

	@Autowired
	ModelMapper modelMapper;

	@Autowired
	RoleRepository roleRepository;
	
	@Override
	public List<RoleDTO> getAllRoles() {
		return roleRepository.findAll().stream().map((role)-> modelMapper.map(role, RoleDTO.class)).collect(Collectors.toList());
	}

	@Override
	public RoleDTO getRoleById(Long id) {
		
		Role role = roleRepository.findById(id).get();
		return modelMapper.map(role, RoleDTO.class);
	}

	@Override
	public RoleDTO createRole(RoleDTO roleDTO) {
		Role role= modelMapper.map(roleDTO,Role.class);
		role =roleRepository.save(role);
		return modelMapper.map(role, RoleDTO.class);
	}

	@Override
	public RoleDTO updateRole(Long id, RoleDTO roleDTO) {
		Role role=roleRepository.findById(id).get();
		if (role==null) {
			return null;
		}
		role.setName(roleDTO.getName());
		roleRepository.save(role);
		return modelMapper.map(role, RoleDTO.class);
	}

	@Override
	public boolean deleteRoleById(Long id) {
		Role role=roleRepository.findById(id).get();
		if (role==null) {
			return false;
		}
		roleRepository.deleteById(id);
		return true;
	}


}
