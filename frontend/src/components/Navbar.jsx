import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { token, role, logoutUser } = useContext(AuthContext);

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Inicio</Link>
      <Link to="/products" style={styles.link}>Productos</Link>

      {role === "ADMIN" && (
        <Link to="/admin/products" style={styles.link}>Admin</Link>
      )}

      {!token ? (
        <Link to="/login" style={styles.link}>Login</Link>
      ) : (
        <button onClick={logoutUser} style={styles.logout}>Cerrar sesión</button>
      )}
    </nav>
  );
};

export default Navbar;

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    background: "#f6f6f6",
  },
  link: {
    textDecoration: "none",
    fontWeight: "600",
    color: "#222",
  },
  logout: {
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};
