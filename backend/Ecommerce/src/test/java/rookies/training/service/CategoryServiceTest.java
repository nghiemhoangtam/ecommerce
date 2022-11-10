package rookies.training.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import rookies.training.EcommerceApplication;
import rookies.training.dto.CategoryDTO;
import rookies.training.entity.Category;
import rookies.training.repository.CategoryRepository;
import rookies.training.service.impl.CategoryServiceImpl;

import java.util.List;
import java.util.Optional;


public class CategoryServiceTest {

    private CategoryRepository categoryRepository;
    private CategoryService categoryService;

    private ModelMapper modelMapper;

    @BeforeEach
    public void beforeEach(){
        categoryRepository = Mockito.mock(CategoryRepository.class);
        modelMapper = Mockito.mock(ModelMapper.class);
        categoryService = new CategoryServiceImpl(categoryRepository,modelMapper);
    }

    @Test
    public void createCategory(){
        Category category=Mockito.mock(Category.class);
        CategoryDTO categoryDTO=new CategoryDTO();
//        categoryDTO.setName("Đồ điện");
//        categoryDTO.setUrl("https://url");
//        categoryDTO.setLogoUrl("https://logoUrl");

//        Mockito.when(modelMapper.map(categoryDTO, Category.class)).thenReturn(category);
        Mockito.when(categoryRepository.save(category)).thenReturn(category);
        categoryDTO=modelMapper.map(category,CategoryDTO.class);
//        Mockito.when(modelMapper.map(category,CategoryDTO.class)).thenReturn(categoryDTO);
        CategoryDTO res= categoryService.createCategory(categoryDTO);

//        Assertions.assertNotEquals(null,categoryDTO.getId());
        Assertions.assertEquals(categoryDTO,res);
    }

    @Test
    public void updateWithCateNotExist(){
        String expected="category is not exist";
        Optional<Category> optional=Optional.empty();
        String actual=categoryService.updateCategory(-1L,new Category());
        Assertions.assertEquals(expected,actual);
    }

    @Test
    public  void updateSuccess(){
        String expected="success";
        Optional<Category> optional=Optional.of(new Category());
        Mockito.when(categoryRepository.findById(-1L)).thenReturn(optional);
        String actual=categoryService.updateCategory(-1L,new Category());
        Assertions.assertEquals(expected,actual);
    }

    @Test
    public void getCategoryNotExist(){
        CategoryDTO categoryDTO=categoryService.getCategoryById(-1L);
        Assertions.assertNull(categoryDTO);
    }

    @Test
    public void getCateSuccess(){
        CategoryDTO categoryDTO=Mockito.mock(CategoryDTO.class);
        Mockito.when(modelMapper.map(null,CategoryDTO.class)).thenReturn(categoryDTO);
        Assertions.assertNotNull(categoryDTO);
    }
}
