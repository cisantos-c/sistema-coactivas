import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard";

import Usuarios from "./pages/Usuarios";
import Roles from "./pages/Roles";

import Configuracion from "./pages/Configuracion";

import AutosPago from "./pages/AutosPago";

import Embargos from "./pages/Embargos";

import Reportes from "./pages/Reportes";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Dashboard />} />

        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/roles" element={<Roles />} />

        <Route path="/configuracion" element={<Configuracion />} />

        <Route path="/autospago" element={<AutosPago />} />

        <Route path="/embargos" element={<Embargos />} />

        <Route path="/reportes" element={<Reportes />} />

      </Route>
    </Routes>
  );
}

export default App;