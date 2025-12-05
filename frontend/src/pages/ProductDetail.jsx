import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={product.imagenUrl} style={styles.img} />

        <h1 style={styles.title}>{product.nombre}</h1>

        <p style={styles.desc}>{product.descripcion}</p>

        <p style={styles.price}>Precio: ${product.precio}</p>

        <p style={styles.cat}>Categoría: {product.categoria}</p>

        {product.oferta && (
          <p style={styles.offer}>🔥 Producto en oferta</p>
        )}

        <Link to="/products" style={styles.back}>
          ⬅ Volver atrás
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "600px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  img: {
    width: "100%",
    borderRadius: "15px",
  },
  title: {
    marginTop: "20px",
    fontSize: "32px",
    color: "#c2185b",
  },
  desc: {
    marginTop: "15px",
    fontSize: "18px",
    color: "#555",
  },
  price: {
    fontSize: "22px",
    margin: "15px 0",
  },
  cat: {
    fontSize: "18px",
    color: "#8a3e55",
  },
  offer: {
    marginTop: "10px",
    color: "white",
    backgroundColor: "#f50057",
    display: "inline-block",
    padding: "5px 12px",
    borderRadius: "6px",
  },
  back: {
    display: "inline-block",
    marginTop: "25px",
    padding: "10px 20px",
    backgroundColor: "#d81b60",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
  },
};
