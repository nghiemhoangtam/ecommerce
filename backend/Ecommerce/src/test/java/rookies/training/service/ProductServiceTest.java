package rookies.training.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import rookies.training.dto.ProductDTO;
import rookies.training.entity.Product;
import rookies.training.repository.ProductRepository;
import rookies.training.service.impl.ProductServiceImpl;

import java.util.Optional;

public class ProductServiceTest {

    private ModelMapper modelMapper;
    private ProductRepository productRepository;

    private ProductService productService;

    @BeforeEach
    public void beforeEach(){
        productRepository= Mockito.mock(ProductRepository.class);
        modelMapper=Mockito.mock(ModelMapper.class);
        productService=new ProductServiceImpl(productRepository,modelMapper);
    }

    @Test
    public void getProductFail(){
        ProductDTO productDTO=productService.getProductById(-1L);
        Assertions.assertNull(productDTO);
    }
    @Test
    public void getProductSuccess(){
        Optional<Product> optionalProduct=Optional.of(new Product());
        Mockito.when(productRepository.findById(1L)).thenReturn(optionalProduct);
        Mockito.when(modelMapper.map(optionalProduct.get(),ProductDTO.class)).thenReturn(new ProductDTO());
        ProductDTO productDTO=productService.getProductById(1L);
        Assertions.assertNotNull(productDTO);
    }
}
