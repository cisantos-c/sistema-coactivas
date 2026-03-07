import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-4 font-bold border-b">
        Menú
      </div>

      <nav className="flex flex-col p-2 space-y-2">
        <Link to="/" className="hover:bg-blue-100 p-2 rounded">
          Principal
        </Link>

        <Link to="/control" className="hover:bg-blue-100 p-2 rounded">
          Control Deuda
        </Link>

        <Link to="/consultas" className="hover:bg-blue-100 p-2 rounded">
          Consultas
        </Link>
      </nav>
    </div>
  )
}