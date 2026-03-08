import { FaUserCircle } from "react-icons/fa";

function Navbar() {

  return (
    <div className="h-14 bg-white shadow flex items-center justify-end px-6">

      <div className="flex items-center gap-2">

        <FaUserCircle size={24} />
        <span className="text-sm font-medium">
          Administrador
        </span>

      </div>

    </div>
  );
}

export default Navbar;