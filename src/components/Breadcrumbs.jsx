import { useLocation } from "react-router-dom";

export default function Breadcrumbs(){

  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(x => x);

  return(

    <div className="text-sm text-gray-500 mb-4">

      Inicio

      {pathnames.map((value, index)=>{

        return(
          <span key={index}>
            {" / "}
            {value}
          </span>
        )

      })}

    </div>

  )

}