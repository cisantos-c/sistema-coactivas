import { useLocation } from "react-router-dom"
import { Bell, Search, UserCircle2 } from "lucide-react"

function Topbar() {
  const location = useLocation()

  const getTitle = () => {
    const map = {
      "/": "Dashboard",
      "/dashboard": "Dashboard",
      "/deudores/nuevo": "Nuevo Deudor",
      "/deudores": "Consultar Deudores",
      "/procesos/nuevo": "Nuevo Proceso",
      "/procesos": "Consultar Procesos",
      "/autos": "Autos de Pago",
      "/embargos": "Embargos",
      "/continuaciones": "Continuaciones",
      "/archivos": "Archivos de Causa",
      "/documentos/generar": "Generar Documentos",
      "/documentos/subir": "Subir Documentos",
      "/documentos": "Consultar Documentos",
      "/reportes/procesos-activos": "Procesos Activos",
      "/reportes/procesos-archivados": "Procesos Archivados",
      "/reportes/embargos": "Reporte de Embargos",
      "/reportes/deudores": "Reporte de Deudores",
      "/admin/usuarios": "Usuarios",
      "/admin/roles": "Roles",
      "/admin/permisos": "Permisos"
    }

    return map[location.pathname] || "Sistema de Coactivas"
  }

  return (
    <header
      style={{
        height: "78px",
        background: "#ffffff",
        borderBottom: "1px solid #e6edf5",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        borderRadius: "0 0 16px 16px"
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "24px",
            color: "#18344f"
          }}
        >
          {getTitle()}
        </h1>
        <p
          style={{
            margin: "4px 0 0 0",
            color: "#6a7f94",
            fontSize: "14px"
          }}
        >
          Panel de gestión institucional
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#f3f7fb",
            border: "1px solid #e5edf5",
            borderRadius: "12px",
            padding: "10px 12px",
            minWidth: "240px"
          }}
        >
          <Search size={16} color="#6a7f94" />
          <span style={{ color: "#92a2b3", fontSize: "14px" }}>
            Buscar...
          </span>
        </div>

        <button
          style={{
            border: "1px solid #e5edf5",
            background: "#fff",
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            cursor: "pointer"
          }}
        >
          <Bell size={18} color="#38516b" />
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#f9fbfd",
            border: "1px solid #e5edf5",
            borderRadius: "14px",
            padding: "8px 12px"
          }}
        >
          <UserCircle2 size={28} color="#38516b" />
          <div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#1d3954" }}>
              Carlos
            </div>
            <div style={{ fontSize: "12px", color: "#6f8498" }}>
              Administrador
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar