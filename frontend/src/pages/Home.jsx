import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#ffe6f2",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: "#c2185b",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Pastelería Mil Sabores
      </h1>

      <h3
        style={{
          fontSize: "22px",
          color: "#ad1457",
        }}
      >
        {user ? `Bienvenida ${user.email}` : "No has iniciado sesión"}
      </h3>

      <p
        style={{
          marginTop: "30px",
          fontSize: "20px",
          color: "#880e4f",
        }}
      >
        ¡Los mejores dulces, tortas y postres para alegrar tu día! 🍰💕
      </p>
    </div>
  );
}
