import { useState, useEffect, useContext } from "react";
import { getProducts, createProduct, deleteProduct } from "../api/productService";
import { AuthContext } from "../context/AuthContext";

const AdminProducts = () => {

  const { token } = useContext(AuthContext);

  const [products, setProducts] = useState([]);

  // Campos formulario
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");
  const [oferta, setOferta] = useState(false);

  // Mensajes de error
  const [errors, setErrors] = useState({});

  // Cargar productos
  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  // 🔥 VALIDACIONES
  const validarFormulario = () => {
    const newErrors = {};

    if (!nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!descripcion.trim()) newErrors.descripcion = "La descripción es obligatoria";

    if (!precio) newErrors.precio = "El precio es obligatorio";
    else if (isNaN(precio)) newErrors.precio = "El precio debe ser un número";
    else if (Number(precio) <= 0) newErrors.precio = "El precio debe ser mayor a 0";

    if (!categoria.trim()) newErrors.categoria = "La categoría es obligatoria";

    // Validación URL
    const urlRegex = /^https?:\/\/.+/;
    if (!imagenUrl.trim()) newErrors.imagenUrl = "La imagen es obligatoria";
    else if (!urlRegex.test(imagenUrl))
      newErrors.imagenUrl = "La URL debe empezar con http:// o https://";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Crear producto
  const handleCreate = async () => {

    if (!validarFormulario()) return; // ❌ NO SE MANDA SI HAY ERRORES

    const nuevo = {
      nombre,
      descripcion,
      precio: Number(precio),
      categoria,
      imagenUrl,
      oferta,
    };

    await createProduct(nuevo, token);
    cargarDatos();

    // Limpiar formulario
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setCategoria("");
    setImagenUrl("");
    setOferta(false);
    setErrors({});
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Administrar Productos</h1>

      {/* FORMULARIO */}
      <div style={{ width: "350px", marginBottom: "30px" }}>
        
        {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        {errors.descripcion && <p style={{ color: "red" }}>{errors.descripcion}</p>}
        <input
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        {errors.precio && <p style={{ color: "red" }}>{errors.precio}</p>}
        <input
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        {errors.categoria && <p style={{ color: "red" }}>{errors.categoria}</p>}
        <input
          placeholder="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

        {errors.imagenUrl && <p style={{ color: "red" }}>{errors.imagenUrl}</p>}
        <input
          placeholder="URL Imagen"
          value={imagenUrl}
          onChange={(e) => setImagenUrl(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={oferta}
            onChange={(e) => setOferta(e.target.checked)}
          />
          ¿Está en oferta?
        </label>

        <button
          style={{ marginTop: "10px", padding: "10px", backgroundColor: "green", color: "white" }}
          onClick={handleCreate}
        >
          Crear Producto
        </button>
      </div>


      <hr />
      <h2>Lista de Productos</h2>

      {products.map((p) => (
        <div key={p.id}>
          <strong>{p.nombre}</strong> - ${p.precio}
          <button style={{ marginLeft: "10px", background: "red", color: "white" }}
            onClick={() => deleteProduct(p.id, token).then(() => cargarDatos())}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminProducts;
