package rookies.training.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.google.gson.Gson;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.web.bind.annotation.RequestBody;
import rookies.training.dto.CategoryDTO;
import rookies.training.dto.ProductDTO;
import rookies.training.entity.Category;
import rookies.training.repository.CategoryRepository;
import rookies.training.service.CategoryService;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	CategoryRepository categoryRepository;

	@Autowired
	ModelMapper modelMapper;

//	public CategoryServiceImpl(CategoryRepository categoryRepository, ModelMapper modelMapper) {
//		this.modelMapper =
//	}

	@Override
	public List<CategoryDTO> getAllCategories() {
		return categoryRepository.findAll().stream().map(category -> modelMapper.map(category,CategoryDTO.class)).collect(Collectors.toList());
	}

	@Override
	public CategoryDTO getCategoryById(Long id) {
		Optional<Category> optionCategory=categoryRepository.findById(id);
		if (optionCategory.isEmpty())	return null;
		return modelMapper.map(optionCategory.get(),CategoryDTO.class);
	}

	@Override
	public CategoryDTO createCategory(CategoryDTO categoryDTO) {
		Category category=modelMapper.map(categoryDTO,Category.class);
		category=categoryRepository.save(category);
		CategoryDTO res= modelMapper.map(category,CategoryDTO.class);
		return res;
	}

	@Override
	public String updateCategory(Long id,Category category) {
		Optional<Category> optionCategory2=categoryRepository.findById(id);
		if (optionCategory2.isEmpty())	return "category is not exist";
		Category category2=optionCategory2.get();
		category2.setName(category.getName());
		category2.setUrl(category.getUrl());
		category2.setUrl(category.getLogoUrl());
		categoryRepository.saveAndFlush(category2);
		CategoryDTO res= modelMapper.map(category,CategoryDTO.class);
		return "success";
	}

	@Override
	public void deleteCategoryById(Long id) {
		Optional<Category> optionalCategory=categoryRepository.findById(id);
		if (optionalCategory.isEmpty())	return;
		categoryRepository.deleteById(id);
	}

	@Override
	public List<ProductDTO> getProductsByCategory(Long id) {
		Optional<Category> optionalCategory=categoryRepository.findById(id);
		if (optionalCategory.isEmpty())	return null;
		return optionalCategory.get().getListProduct().stream().map((product)->(modelMapper.map(product,ProductDTO.class))).collect(Collectors.toList());
	}
}
