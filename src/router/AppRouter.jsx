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

        <Route path="/autos-pago/nuevo" element={<PagePlaceholder title="Nuevo Auto de Pago" />} />
        <Route path="/autos-pago" element={<PagePlaceholder title="Listado de Autos de Pago" />} />

        <Route path="/embargos/nuevo" element={<PagePlaceholder title="Nuevo Embargo" />} />
        <Route path="/embargos" element={<PagePlaceholder title="Listado de Embargos" />} />

        <Route path="/continuaciones/nuevo" element={<PagePlaceholder title="Nueva Continuación" />} />
        <Route path="/continuaciones" element={<PagePlaceholder title="Listado de Continuaciones" />} />

        <Route path="/archivos-causa/nuevo" element={<PagePlaceholder title="Nuevo Archivo de Causa" />} />
        <Route path="/archivos-causa" element={<PagePlaceholder title="Listado de Archivos de Causa" />} />

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

        <Route path="/parametros/instituciones" element={<PagePlaceholder title="Instituciones" />} />
        <Route path="/parametros/tipos-oficio" element={<PagePlaceholder title="Tipos de Oficio" />} />
        <Route path="/parametros/medidas-cautelares" element={<PagePlaceholder title="Medidas Cautelares" />} />
        <Route path="/parametros/reglas-oficios" element={<PagePlaceholder title="Reglas de Oficios por Medida" />} />

      </Route>
    </Routes>
  )
}

export default AppRouter