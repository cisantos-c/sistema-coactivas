import {
  FaUsers,
  FaFileInvoice,
  FaGavel,
  FaMoneyBill
} from "react-icons/fa";

export default function Dashboard(){

  return(

    <div>

      <h1 className="text-2xl font-bold mb-6">
        Panel de Control
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white shadow rounded p-6 flex items-center gap-4">

          <FaUsers className="text-3xl text-blue-500"/>

          <div>
            <p className="text-gray-500">
              Usuarios
            </p>

            <h2 className="text-2xl font-bold">
              12
            </h2>
          </div>

        </div>

        <div className="bg-white shadow rounded p-6 flex items-center gap-4">

          <FaFileInvoice className="text-3xl text-green-500"/>

          <div>
            <p className="text-gray-500">
              Autos de Pago
            </p>

            <h2 className="text-2xl font-bold">
              34
            </h2>
          </div>

        </div>

        <div className="bg-white shadow rounded p-6 flex items-center gap-4">

          <FaGavel className="text-3xl text-red-500"/>

          <div>
            <p className="text-gray-500">
              Embargos
            </p>

            <h2 className="text-2xl font-bold">
              8
            </h2>
          </div>

        </div>

        <div className="bg-white shadow rounded p-6 flex items-center gap-4">

          <FaMoneyBill className="text-3xl text-yellow-500"/>

          <div>
            <p className="text-gray-500">
              Deuda Total
            </p>

            <h2 className="text-2xl font-bold">
              $120k
            </h2>
          </div>

        </div>

      </div>

    </div>

  )

}