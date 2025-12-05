import axios from "axios";

export const getProducts = () => {
  return axios.get("http://localhost:8080/products");
};

export const createProduct = (product, token) => {
  return axios.post("http://localhost:8080/products", product, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteProduct = (id, token) => {
  return axios.delete(`http://localhost:8080/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateProduct = (id, product, token) => {
  return axios.put(`http://localhost:8080/products/${id}`, product, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
