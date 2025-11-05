package com.pricedynamo.Model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class PriceHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;
    private double oldPrice;
    private double newPrice;
    private double profitChangePercent;
    private LocalDateTime timestamp = LocalDateTime.now();

    public PriceHistory() {
    }

    public PriceHistory(String productName, double oldPrice, double newPrice, double profitChangePercent) {
        this.productName = productName;
        this.oldPrice = oldPrice;
        this.newPrice = newPrice;
        this.profitChangePercent = profitChangePercent;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getOldPrice() {
        return oldPrice;
    }

    public void setOldPrice(double oldPrice) {
        this.oldPrice = oldPrice;
    }

    public double getNewPrice() {
        return newPrice;
    }

    public void setNewPrice(double newPrice) {
        this.newPrice = newPrice;
    }

    public double getProfitChangePercent() {
        return profitChangePercent;
    }

    public void setProfitChangePercent(double profitChangePercent) {
        this.profitChangePercent = profitChangePercent;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "PriceHistory{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", oldPrice=" + oldPrice +
                ", newPrice=" + newPrice +
                ", profitChangePercent=" + profitChangePercent +
                ", timestamp=" + timestamp +
                '}';
    }
}
