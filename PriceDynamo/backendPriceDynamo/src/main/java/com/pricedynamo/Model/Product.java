package com.pricedynamo.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private double myPrice;
    private double competitorPrice;
    private int inventory;

    public Product() {}

    public Product(String name, double myPrice, double competitorPrice, int inventory) {
        this.name = name;
        this.myPrice = myPrice;
        this.competitorPrice = competitorPrice;
        this.inventory = inventory;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getMyPrice() { return myPrice; }
    public void setMyPrice(double myPrice) { this.myPrice = myPrice; }

    public double getCompetitorPrice() { return competitorPrice; }
    public void setCompetitorPrice(double competitorPrice) { this.competitorPrice = competitorPrice; }

    public int getInventory() { return inventory; }
    public void setInventory(int inventory) { this.inventory = inventory; }
}