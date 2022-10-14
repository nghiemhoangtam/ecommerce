package rookies.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import rookies.training.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
