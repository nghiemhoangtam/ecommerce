package rookies.training.controller;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rookies.training.dto.CategoryDTO;
import rookies.training.entity.Category;
import rookies.training.service.CategoryService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @Autowired
    Gson gson;

    @GetMapping("/categories")
    public List<CategoryDTO> getAllCategories(){
        return categoryService.getAllCategories();
    }

    @GetMapping("/category/{id}")
    public CategoryDTO getCategory(@PathVariable("id") Long id){
        return categoryService.getCategoryById(id);
    }

    
    @PostMapping("/category")
    public CategoryDTO createCategory(@RequestBody CategoryDTO categoryDTO){
//        System.out.println(category.getId()+category.getName());
        return categoryService.createCategory(categoryDTO);
    }

    @PutMapping("/category")
    public  String updateCategory(@RequestBody Category category){
        return categoryService.updateCategory(category);
    }

    @DeleteMapping("/category/{id}")
    public ResponseEntity deleteCategoryById(Long id){
        categoryService.deleteCategoryById(id);
        return ResponseEntity.ok("category with id "+id+" was deleted");
    }
}
