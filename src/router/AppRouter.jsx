import { Routes, Route } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Dashboard from "../pages/Dashboard"

function PagePlaceholder({ title }) {
  return (
    <div>
      <h2 style={{ marginTop: 0, color: "#173550" }}>{title}</h2>
      <p style={{ color: "#688095" }}>Página en construcción.</p>
    </div>
  )
}

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/deudores/nuevo" element={<PagePlaceholder title="Nuevo Deudor" />} />
        <Route path="/deudores" element={<PagePlaceholder title="Consultar Deudores" />} />

        <Route path="/procesos/nuevo" element={<PagePlaceholder title="Nuevo Proceso" />} />
        <Route path="/procesos" element={<PagePlaceholder title="Consultar Procesos" />} />

        <Route path="/autos" element={<PagePlaceholder title="Autos de Pago" />} />
        <Route path="/embargos" element={<PagePlaceholder title="Embargos" />} />
        <Route path="/continuaciones" element={<PagePlaceholder title="Continuaciones" />} />
        <Route path="/archivos" element={<PagePlaceholder title="Archivos de Causa" />} />

        <Route path="/documentos/generar" element={<PagePlaceholder title="Generar Documentos" />} />
        <Route path="/documentos/subir" element={<PagePlaceholder title="Subir Documentos" />} />
        <Route path="/documentos" element={<PagePlaceholder title="Consultar Documentos" />} />

        <Route path="/reportes/procesos-activos" element={<PagePlaceholder title="Procesos Activos" />} />
        <Route path="/reportes/procesos-archivados" element={<PagePlaceholder title="Procesos Archivados" />} />
        <Route path="/reportes/embargos" element={<PagePlaceholder title="Reporte de Embargos" />} />
        <Route path="/reportes/deudores" element={<PagePlaceholder title="Reporte de Deudores" />} />

        <Route path="/admin/usuarios" element={<PagePlaceholder title="Usuarios" />} />
        <Route path="/admin/roles" element={<PagePlaceholder title="Roles" />} />
        <Route path="/admin/permisos" element={<PagePlaceholder title="Permisos" />} />
      </Route>
    </Routes>
  )
}

export default AppRouter