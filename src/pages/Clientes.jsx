import { useEffect, useState } from "react";
import {
  getClientes,
  crearCliente,
  eliminarCliente,
  actualizarCliente
} from "../services/clienteService";

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({
    nombre: "",
    cedula: ""
  });

  const [editandoId, setEditandoId] = useState(null);
  const [clienteAEliminar, setClienteAEliminar] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [errores, setErrores] = useState({});

  const cargarClientes = () => {
    getClientes()
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.error("Error al obtener clientes:", error);
      });
  };

  const clientesFiltrados = clientes.filter((c) =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    c.cedula.includes(busqueda)
  );

  const ordenarClientes = () => {
    const ordenados = [...clientes].sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );
    setClientes(ordenados);
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();

   // if (!nombre.trim() || !cedula.trim()) return;

    // VALIDACIÓN
    if (!cliente.nombre || !cliente.cedula) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const clienteData = { nombre, cedula };

    if (editandoId) {
      actualizarCliente(editandoId, clienteData)
        .then(() => {
          setEditandoId(null);
          setNombre("");
          setCedula("");
          cargarClientes();
        })
        .catch(error => {
          console.error("Error al actualizar:", error);
        });
    } else {
      crearCliente(clienteData)
        .then(() => {
          setNombre("");
          setCedula("");
          cargarClientes();
        })
        .catch(error => {
          console.error("Error al crear:", error);
        });
    }
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    let nuevosErrores = {};

    if (!cliente.nombre) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (!cliente.cedula) {
      nuevosErrores.cedula = "La cédula es obligatoria";
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    try {
      await crearCliente(cliente);
      setCliente({ nombre: "", cedula: "" });
      setErrores({});
      cargarClientes();
    } catch (error) {
      console.error("Error al crear cliente:", error);
    }
  };

  const confirmarEliminar = () => {
    if (!clienteAEliminar) return;

    eliminarCliente(clienteAEliminar.id)
      .then(() => {
        cargarClientes();
        setClienteAEliminar(null);
      })
      .catch(error => {
        console.error("Error al eliminar cliente:", error);
      });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>

      {/* FORMULARIO */}
<form onSubmit={handleSubmit} className="mb-6">

  <input
    type="text"
    placeholder="Nombre del cliente"
    value={cliente.nombre}
    onChange={(e) =>
      setCliente({ ...cliente, nombre: e.target.value })
    }
    className="border p-2 w-full mb-2"
  />

  {errores.nombre && (
    <p className="text-red-500 text-sm mb-2">{errores.nombre}</p>
  )}

        <input
          type="text"
          placeholder="Cédula"
          value={cliente.cedula}
          onChange={(e) =>
            setCliente({ ...cliente, cedula: e.target.value })
          }
          className="border p-2 w-full mb-2"
        />

        {errores.cedula && (
          <p className="text-red-500 text-sm mb-2">{errores.cedula}</p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Guardar
        </button>

      </form>

      <input
        type="text"
        placeholder="Buscar cliente..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* LISTA */}


      {clientes.length === 0 ? (
        <p>No hay clientes registrados</p>
      ) : (
        <ul>
          {clientesFiltrados.map(cliente => (
            <li
              key={cliente.id}
              className="border p-2 mb-2 flex justify-between items-center"
            >
              <span>
                {cliente.nombre} - {cliente.cedula}
              </span>

              <div className="space-x-2">
                <button
                  onClick={() => {
                    setCliente({
                      nombre: cliente.nombre,
                      cedula: cliente.cedula
                    });
                    setEditandoId(cliente.id);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Editar
                </button>

                <button
                  onClick={() => setClienteAEliminar(cliente)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>

                <button onClick={ordenarClientes}>
                  Ordenar por nombre
                </button>
                
              </div>
            </li>
          ))}
        </ul>
      )}

      {clienteAEliminar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">

          <div className="bg-white p-6 rounded shadow-lg w-96">

            <h2 className="text-lg font-bold mb-4">
              Confirmar eliminación
            </h2>

            <p className="mb-4">
              ¿Seguro que deseas eliminar a
              <span className="font-semibold">
                {" "}{clienteAEliminar.nombre}
              </span>?
            </p>

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setClienteAEliminar(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>

              <button
                onClick={confirmarEliminar}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Eliminar
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Clientes;