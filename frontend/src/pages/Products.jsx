import { useEffect, useState } from "react";
import { getProducts } from "../api/productService";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      const res = await getProducts();
      setProducts(res.data);
    };

    cargar();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Productos Disponibles</h1>

      <div style={styles.grid}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#222",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default Products;
