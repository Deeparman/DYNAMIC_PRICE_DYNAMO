package com.pricedynamo.service;

// import com.pricedynamo.Model.PriceHistory;
import com.pricedynamo.Model.Product;
import com.pricedynamo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;

    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    public Product updatePrice(String productName, double competitorPrice, int inventory) {
        Product product = repo.findByName(productName)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        double myPrice = product.getMyPrice();

        // Dynamic formula
        double competitionFactor = 0.6 * competitorPrice + 0.4 * myPrice;
        double inventoryFactor = 1.0;

        if (inventory > 50)
            inventoryFactor = 0.95;
        else if (inventory < 10)
            inventoryFactor = 1.10;

        double newPrice = competitionFactor * inventoryFactor * 1.05;

        // Profit comparison
        double oldProfit = myPrice * 0.25;
        double newProfit = newPrice * 0.25;
        double profitChange = ((newProfit - oldProfit) / oldProfit) * 100;
        System.out.println("Profit Change: " + profitChange + "%");

        product.setMyPrice(newPrice);
        product.setInventory(inventory);
        repo.save(product);

        // (Optional) save to PriceHistory table
        return product;
    }
}
