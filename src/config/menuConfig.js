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
  KeyRound,
  Building2,
  Shield,
  GitBranch
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
      {
        title: "Autos de Pago",
        icon: FilePlus2,
        submenu: [
          { title: "Nuevo", path: "/autos-pago/nuevo", icon: PlusCircle },
          { title: "Listado", path: "/autos-pago", icon: Search }
        ]
      },
      {
        title: "Embargos",
        icon: FileText,
        submenu: [
          { title: "Nuevo", path: "/embargos/nuevo", icon: PlusCircle },
          { title: "Listado", path: "/embargos", icon: Search }
        ]
      },
      {
        title: "Continuaciones",
        icon: FileText,
        submenu: [
          { title: "Nuevo", path: "/continuaciones/nuevo", icon: PlusCircle },
          { title: "Listado", path: "/continuaciones", icon: Search }
        ]
      },
      {
        title: "Archivos de Causa",
        icon: FolderOpen,
        submenu: [
          { title: "Nuevo", path: "/archivos-causa/nuevo", icon: PlusCircle },
          { title: "Listado", path: "/archivos-causa", icon: Search }
        ]
      }
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
      {
        title: "Seguridad",
        icon: Shield,
        submenu: [
          { title: "Usuarios", path: "/admin/usuarios", icon: Users },
          { title: "Roles", path: "/admin/roles", icon: Settings },
          { title: "Permisos", path: "/admin/permisos", icon: KeyRound }
        ]
      },
      {
        title: "Parámetros del Sistema",
        icon: Settings,
        submenu: [
          { title: "Instituciones", path: "/parametros/instituciones", icon: Building2 },
          { title: "Tipos de Oficio", path: "/parametros/tipos-oficio", icon: FileText },
          { title: "Medidas Cautelares", path: "/parametros/medidas-cautelares", icon: Shield },
          { title: "Reglas de Oficios por Medida", path: "/parametros/reglas-oficios", icon: GitBranch }
        ]
      }
    ]
  }
]

export default menuConfig