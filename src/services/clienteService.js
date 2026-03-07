import axios from "axios";

const API_URL = "http://localhost:8080/clientes";

export const getClientes = () => {
  return axios.get(API_URL);
};

export const crearCliente = (cliente) => {
  return axios.post(API_URL, cliente);
};

export const eliminarCliente = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const actualizarCliente = (id, cliente) => {
  return axios.put(`${API_URL}/${id}`, cliente);
};