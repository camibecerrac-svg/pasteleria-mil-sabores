import { useState, useContext } from "react";
import { login } from "../api/authService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await login(email, password);
      loginUser(res.token, res.role);
      navigate("/");
    } catch (err) {
      setError("Credenciales inválidas ❌");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Iniciar Sesión</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>

        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#ffe6f2",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "18px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  title: {
    color: "#c2185b",
    fontSize: "34px",
    marginBottom: "25px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "14px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "1px solid #f8bbd0",
  },
  button: {
    padding: "12px",
    backgroundColor: "#d81b60",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "0.3s",
  },
  error: {
    marginTop: "15px",
    color: "red",
    fontSize: "16px",
  },
};
