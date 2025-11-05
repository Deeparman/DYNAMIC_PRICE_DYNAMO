package com.pricedynamo.Controller;

import com.pricedynamo.Model.Product;
import com.pricedynamo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*") // Allow React frontend
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @PutMapping("/update")
    public Product updatePrice(
            @RequestParam String productName,
            @RequestParam double competitorPrice,
            @RequestParam int inventory) {
        return service.updatePrice(productName, competitorPrice, inventory);
    }
}
