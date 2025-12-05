export default function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.imagenUrl} alt={product.nombre} style={styles.img} />

      <h3>{product.nombre}</h3>
      <p>${product.precio}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    background: "white",
  },
  img: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px"
  }
};
