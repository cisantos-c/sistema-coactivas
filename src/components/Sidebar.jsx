import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

  const [adminOpen, setAdminOpen] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const [autosOpen, setAutosOpen] = useState(false);
  const [embargosOpen, setEmbargosOpen] = useState(false);
  const [reportesOpen, setReportesOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white w-64 h-screen fixed p-4 overflow-y-auto">

      <h1 className="text-xl font-bold mb-6">
        Sistema Coactivas
      </h1>

      <nav className="space-y-2">

        <Link
          to="/"
          className="block p-2 rounded hover:bg-gray-700"
        >
          Dashboard
        </Link>

        {/* ADMINISTRACION */}

        <button
          onClick={() => setAdminOpen(!adminOpen)}
          className="w-full text-left p-2 rounded hover:bg-gray-700"
        >
          Administración
        </button>

        {adminOpen && (
          <div className="ml-4 flex flex-col">
            <Link to="/usuarios" className="p-1 hover:text-gray-300">
              Usuarios
            </Link>

            <Link to="/roles" className="p-1 hover:text-gray-300">
              Roles
            </Link>
          </div>
        )}

        {/* CONFIGURACIONES */}

        <button
          onClick={() => setConfigOpen(!configOpen)}
          className="w-full text-left p-2 rounded hover:bg-gray-700"
        >
          Configuraciones
        </button>

        {configOpen && (
          <div className="ml-4 flex flex-col">
            <Link to="/configuracion" className="p-1 hover:text-gray-300">
              Configuración General
            </Link>
          </div>
        )}

        {/* AUTOS DE PAGO */}

        <button
          onClick={() => setAutosOpen(!autosOpen)}
          className="w-full text-left p-2 rounded hover:bg-gray-700"
        >
          Autos de Pago
        </button>

        {autosOpen && (
          <div className="ml-4 flex flex-col">
            <Link to="/autospago" className="p-1 hover:text-gray-300">
              Gestión de Autos
            </Link>
          </div>
        )}

        {/* EMBARGOS */}

        <button
          onClick={() => setEmbargosOpen(!embargosOpen)}
          className="w-full text-left p-2 rounded hover:bg-gray-700"
        >
          Embargos
        </button>

        {embargosOpen && (
          <div className="ml-4 flex flex-col">
            <Link to="/embargos" className="p-1 hover:text-gray-300">
              Gestión de Embargos
            </Link>
          </div>
        )}

        {/* REPORTES */}

        <button
          onClick={() => setReportesOpen(!reportesOpen)}
          className="w-full text-left p-2 rounded hover:bg-gray-700"
        >
          Reportes
        </button>

        {reportesOpen && (
          <div className="ml-4 flex flex-col">
            <Link to="/reportes" className="p-1 hover:text-gray-300">
              Reportes del Sistema
            </Link>
          </div>
        )}

      </nav>
    </div>
  );
}