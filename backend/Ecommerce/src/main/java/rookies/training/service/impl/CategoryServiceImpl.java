package rookies.training.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import com.google.gson.Gson;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.web.bind.annotation.RequestBody;
import rookies.training.dto.CategoryDTO;
import rookies.training.entity.Category;
import rookies.training.repository.CategoryRepository;
import rookies.training.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	CategoryRepository categoryRepository;

	@Autowired
	ModelMapper modelMapper;
	
	@Override
	public List<CategoryDTO> getAllCategories() {
		return categoryRepository.findAll().stream().map(category -> modelMapper.map(category,CategoryDTO.class)).collect(Collectors.toList());
	}

	@Override
	public CategoryDTO getCategoryById(Long id) {
		Category category=categoryRepository.findById(id).get();
		return modelMapper.map(category,CategoryDTO.class);
	}

	@Override
	public CategoryDTO createCategory(CategoryDTO categoryDTO) {
		Category category=modelMapper.map(categoryDTO,Category.class);
		categoryRepository.saveAndFlush(category);
		CategoryDTO res= modelMapper.map(category,CategoryDTO.class);
		return res;
	}

	@Override
	public String updateCategory(@RequestBody Category category) {
		Category category2=categoryRepository.findById(category.getId()).get();
		category2.setName(category.getName());
		categoryRepository.saveAndFlush(category2);
		CategoryDTO res= modelMapper.map(category,CategoryDTO.class);
		System.out.println(category.getId()+category.getName()+"|||---|");
		return "success";
	}

	@Override
	public void deleteCategoryById(Long id) {
		categoryRepository.deleteById(id);
	}

}
