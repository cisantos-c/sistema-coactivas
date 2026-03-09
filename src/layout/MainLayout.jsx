import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#eef4f8"
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0
        }}
      >
        <div style={{ padding: "18px 18px 0 18px" }}>
          <Topbar />
        </div>

        <main
          style={{
            flex: 1,
            padding: "18px"
          }}
        >
          <div
            style={{
              background: "#ffffff",
              minHeight: "100%",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 8px 30px rgba(15, 35, 55, 0.06)"
            }}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout