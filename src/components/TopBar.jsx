import { FaUserCircle, FaBell } from "react-icons/fa";

export default function Topbar(){

  return(

    <div className="bg-white shadow h-16 flex items-center justify-between px-6">

      <h2 className="font-semibold text-gray-700">
        Sistema de Coactivas
      </h2>

      <div className="flex items-center gap-6">

        <FaBell className="text-gray-600 text-xl cursor-pointer"/>

        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl text-gray-700"/>
          <span className="text-gray-700">
            Administrador
          </span>
        </div>

      </div>

    </div>

  )

}