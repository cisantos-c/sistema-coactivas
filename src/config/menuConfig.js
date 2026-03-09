import {
  LayoutDashboard,
  Users,
  Scale,
  FileText,
  FolderOpen,
  BarChart3,
  ShieldCheck,
  PlusCircle,
  Search,
  FilePlus2,
  Upload,
  Settings,
  KeyRound
} from "lucide-react"

const menuConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Deudores",
    icon: Users,
    submenu: [
      { title: "Nuevo Deudor", path: "/deudores/nuevo", icon: PlusCircle },
      { title: "Consultar Deudores", path: "/deudores", icon: Search }
    ]
  },
  {
    title: "Procesos Coactivos",
    icon: Scale,
    submenu: [
      { title: "Nuevo Proceso", path: "/procesos/nuevo", icon: PlusCircle },
      { title: "Consultar Procesos", path: "/procesos", icon: Search }
    ]
  },
  {
    title: "Actuaciones Procesales",
    icon: FileText,
    submenu: [
      { title: "Autos de Pago", path: "/autos", icon: FilePlus2 },
      { title: "Embargos", path: "/embargos", icon: FilePlus2 },
      { title: "Continuaciones", path: "/continuaciones", icon: FilePlus2 },
      { title: "Archivos de Causa", path: "/archivos", icon: FolderOpen }
    ]
  },
  {
    title: "Documentos",
    icon: FolderOpen,
    submenu: [
      { title: "Generar Documentos", path: "/documentos/generar", icon: FilePlus2 },
      { title: "Subir Documentos", path: "/documentos/subir", icon: Upload },
      { title: "Consultar Documentos", path: "/documentos", icon: Search }
    ]
  },
  {
    title: "Reportes",
    icon: BarChart3,
    submenu: [
      { title: "Procesos Activos", path: "/reportes/procesos-activos", icon: BarChart3 },
      { title: "Procesos Archivados", path: "/reportes/procesos-archivados", icon: BarChart3 },
      { title: "Embargos", path: "/reportes/embargos", icon: BarChart3 },
      { title: "Deudores", path: "/reportes/deudores", icon: BarChart3 }
    ]
  },
  {
    title: "Administración",
    icon: ShieldCheck,
    submenu: [
      { title: "Usuarios", path: "/admin/usuarios", icon: Users },
      { title: "Roles", path: "/admin/roles", icon: Settings },
      { title: "Permisos", path: "/admin/permisos", icon: KeyRound }
    ]
  }
]

export default menuConfig