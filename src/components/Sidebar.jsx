import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FaBars,
  FaHome,
  FaUsers,
  FaUserShield,
  FaCog,
  FaFileInvoice,
  FaGavel,
  FaChartBar
} from "react-icons/fa";

export default function Sidebar() {

  const [collapsed, setCollapsed] = useState(false);

  const menu =
    "flex items-center gap-3 p-3 rounded hover:bg-gray-700 transition";
    
  const active =
    "bg-gray-700";

  return (

    <div
      className={`bg-blue-900 text-white h-screen fixed transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >

      {/* HEADER */}

      <div className="flex items-center justify-between p-4 border-b border-gray-700">

        {!collapsed && (
          <h1 className="font-bold text-lg">
            Coactivas
          </h1>
        )}

        <FaBars
          className="cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        />

      </div>

      {/* MENU */}

      <nav className="p-2 space-y-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${menu} ${isActive ? active : ""}`
          }
        >
          <FaHome />
          {!collapsed && "Dashboard"}
        </NavLink>

        <NavLink
          to="/usuarios"
          className={({ isActive }) =>
            `${menu} ${isActive ? active : ""}`
          }
        >
          <FaUsers />
          {!collapsed && "Usuarios"}
        </NavLink>

        <NavLink
          to="/roles"
          className={({ isActive }) =>
            `${menu} ${isActive ? active : ""}`
          }
        >
          <FaUserShield />
          {!collapsed && "Roles"}
        </NavLink>

        <NavLink
          to="/configuracion"
          className={({ isActive }) =>
            `${menu} ${isActive ? active : ""}`
          }
        >
          <FaCog />
          {!collapsed && "Configuraciones"}
        </NavLink>

        <NavLink
          to="/autospago"
          className={({ isActive }) =>
            `${menu} ${isActive ? active : ""}`
          }
        >
          <FaFileInvoice />
          {!collapsed && "Autos de Pago"}
        </NavLink>

        <NavLink
          to="/embargos"
          className={({ isActive }) =>
            `${menu} ${isActive ? active : ""}`
          }
        >
          <FaGavel />
          {!collapsed && "Embargos"}
        </NavLink>

        <NavLink
          to="/reportes"
          className={({ isActive }) =>
            `${menu} ${isActive ? active : ""}`
          }
        >
          <FaChartBar />
          {!collapsed && "Reportes"}
        </NavLink>

      </nav>

    </div>
  );
}