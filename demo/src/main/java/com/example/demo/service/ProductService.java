package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public Product getById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }

    public Product create(Product product) {
        return productRepository.save(product);
    }

    public Product update(Long id, Product newProductData) {

        Product oldProduct = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

        oldProduct.setNombre(newProductData.getNombre());
        oldProduct.setDescripcion(newProductData.getDescripcion());
        oldProduct.setPrecio(newProductData.getPrecio());
        oldProduct.setCategoria(newProductData.getCategoria());
        oldProduct.setImagenUrl(newProductData.getImagenUrl());
        oldProduct.setOferta(newProductData.getOferta()); // ← AQUÍ EL CAMBIO

        return productRepository.save(oldProduct);
    }

    public void delete(Long id) {
        if (!productRepository.existsById(id)) {
            throw new RuntimeException("Producto no encontrado");
        }
        productRepository.deleteById(id);
    }
}
