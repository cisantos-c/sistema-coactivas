import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Breadcrumbs from "../components/Breadcrumbs";

import { Outlet } from "react-router-dom";

export default function MainLayout(){

  return(

    <div className="flex">

      <Sidebar/>

      <div className="flex-1 ml-64 bg-gray-100 min-h-screen">

        <Topbar/>

        <div className="p-6">

          <Breadcrumbs/>

          <Outlet/>

        </div>

      </div>

    </div>

  )

}