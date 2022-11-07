package rookies.training.controller;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rookies.training.dto.CategoryDTO;
import rookies.training.entity.Category;
import rookies.training.service.CategoryService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping
    public ResponseEntity getAllCategories(){
        return ResponseEntity.ok(categoryService.getAllCategories()) ;
    }

    @GetMapping("/{id}")
    public ResponseEntity getCategory(@PathVariable("id") Long id){
        return ResponseEntity.ok(categoryService.getCategoryById(id)) ;
    }

    
    @PostMapping
    public ResponseEntity createCategory(@RequestBody CategoryDTO categoryDTO){
//        System.out.println(category.getId()+category.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.createCategory(categoryDTO)) ;
    }

    @PutMapping("/{id}")
    public  String updateCategory(@PathVariable Long id,@RequestBody Category category){
        return categoryService.updateCategory(id,category);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCategoryById(Long id){
        categoryService.deleteCategoryById(id);
        return ResponseEntity.ok("category with id "+id+" was deleted");
    }

    @GetMapping("/{id}/products")
    public ResponseEntity getProductsByCategory(@PathVariable Long id){
        return ResponseEntity.ok(categoryService.getProductsByCategory(id));
    }
}
