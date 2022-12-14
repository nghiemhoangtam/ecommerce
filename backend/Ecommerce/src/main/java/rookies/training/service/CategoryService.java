package rookies.training.service;

import java.util.List;

import rookies.training.dto.CategoryDTO;
import rookies.training.dto.ProductDTO;
import rookies.training.entity.Category;

public interface CategoryService {
	
	public List<CategoryDTO> getAllCategories();
	
	public CategoryDTO getCategoryById(Long id);
	
	public CategoryDTO createCategory(CategoryDTO categoryDTO);
	
	public String updateCategory(Long id,Category category);
	
	public void deleteCategoryById(Long id);

	public List<ProductDTO> getProductsByCategory(Long id);
}
