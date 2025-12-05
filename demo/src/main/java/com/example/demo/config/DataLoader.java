package com.example.demo.config;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DataLoader {

    @Autowired
    private ProductRepository productRepository;

    @PostConstruct
    public void loadData() {

        if (productRepository.count() == 0) {

            productRepository.save(new Product("Torta Cuadrada de Chocolate", "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas.", 45000, "Tortas", "https://tortasdelacasa.com/wp-content/uploads/2024/02/DSC4340-scaled.jpg", false));
            productRepository.save(new Product("Torta Cuadrada de Frutas", "Mezcla de frutas frescas y crema chantilly.", 50000, "Tortas", "https://i.pinimg.com/originals/26/0a/31/260a31cf5eec34b32902475ed2ad6dca.jpg", false));
            productRepository.save(new Product("Torta Circular de Vainilla", "Bizcocho de vainilla clásico.", 40000, "Tortas", "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIVS2Pg1npCWqpk02xFmmBN3IwNjYnsHw4TbTWzYfVPG5fP1uTMYMHaMvEyfxlpIaMjEpQvDBgSThKoccRrFxm3S3D4i_mLuBb5FM20bK5H8Eg9GZZW5kyoj7PTwrgNTVGANesjOCqN_cU/s1600-rw/torta-vainilla-cumplea%25C3%25B1os.jpg", false));
            productRepository.save(new Product("Torta Circular de Manjar", "Torta tradicional chilena con manjar.", 42000, "Tortas", "https://www.elingenio.cl/productos/bizcocho-manjar-lucuma.jpg", false));

            productRepository.save(new Product("Mousse de Chocolate", "Postre individual cremoso hecho con chocolate de alta calidad.", 5000, "Postres", "https://www.gourmet.cl/wp-content/uploads/2016/09/Mousse-de-chocolate-ajustada-web-570x458.jpg", true));
            productRepository.save(new Product("Mousse de Maracuyá", "Delicioso mousse refrescante.", 5500, "Postres", "https://recetinas.com/wp-content/uploads/2023/07/mousse-de-maracuya.jpg", false));
            productRepository.save(new Product("Tiramisú Clásico", "Postre italiano con mascarpone y café.", 5500, "Postres", "https://i.pinimg.com/736x/48/76/f6/4876f69623902017e918feb2836a06b0.jpg", false));

            productRepository.save(new Product("Brownie Sin Azúcar", "Brownie sin azúcar, denso y sabroso.", 4000, "Sin Azúcar", "https://dulcesdiabeticos.com/wp-content/uploads/2021/02/Brownie-fit-w-opt.jpg", true));
            productRepository.save(new Product("Queque de Naranja Sin Azúcar", "Queque ligero endulzado naturalmente.", 48000, "Sin Azúcar", "https://dulcesdiabeticos.com/wp-content/uploads/2016/09/bizcocho-de-naranja-sin-azucar-entero.jpg", false));

            productRepository.save(new Product("Cheesecake de Frutilla", "Suave cheesecake de frutilla.", 47000, "Postres", "https://tofuu.getjusto.com/orioneat-local/resized2/fwcmjSWSoucFNEmXN-2400-x.webp", false));

            productRepository.save(new Product("Empanada de Manzana", "Pastelería tradicional rellena de manzana.", 3000, "Pastelería", "https://www.interpatagonia.com/recetas/empanadas_manzana/empanadas-manzana.jpg", false));
            productRepository.save(new Product("Tarta de Santiago", "Tarta tradicional de almendras.", 6000, "Pastelería", "https://www.lolitalapastelera.com/wp-content/uploads/Como-hacer-tarta-de-santiago-casera-Receta-de-tarta-de-santiago-original-2.jpg", false));
            productRepository.save(new Product("Pastel de Zanahoria", "Pastel de zanahoria con glaseado cremoso.", 6500, "Pastelería", "https://irp-cdn.multiscreensite.com/2af7b8f3/dms3rep/multi/zanahoria.jpg", false));

            productRepository.save(new Product("Pan Sin Gluten", "Pan sin gluten suave y esponjoso.", 3500, "Sin Gluten", "https://juanllorca.com/wp-content/uploads/2020/05/pan-sin-gluten-receta.jpg", false));
            productRepository.save(new Product("Galletas de Avena Sin Gluten", "Galletas crujientes de avena.", 4500, "Sin Gluten", "https://www.disfrutandosingluten.es/wp-content/uploads/2017/04/galletas-de-avena-y-platano-sin-gluten.jpg", false));

            productRepository.save(new Product("Torta Vegana de Chocolate y Avellana", "Torta vegana húmeda y deliciosa.", 50000, "Veganos", "https://www.ferrerorocher.com/ar/sites/ferrerorocher20_ar/files/2021-07/chocolate-cake-carousel-1.png", false));
            productRepository.save(new Product("Galletas Veganas de Avena", "Galletas veganas crujientes.", 4500, "Veganos", "https://mondaydreams.com/wp-content/uploads/2024/04/Blueberry-Oatmeal-Cookies-0001-web.webp", false));

            productRepository.save(new Product("Torta Especial de Cumpleaños", "Torta diseñada para celebraciones.", 55000, "Especiales", "https://i.pinimg.com/736x/f0/b3/c3/f0b3c3fe00c08617076f7636b7f48f52.jpg", false));
            productRepository.save(new Product("Torta Especial de Matrimonio", "Torta elegante para matrimonios.", 60000, "Especiales", "https://i.pinimg.com/736x/c3/f7/db/c3f7db75ac8718e329bdad4e8726d94e.jpg", false));
        }
    }
}
