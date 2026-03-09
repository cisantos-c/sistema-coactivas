import { useMemo, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  ChevronDown,
  ChevronRight,
  Menu,
  Scale
} from "lucide-react"
import menuConfig from "../config/menuConfig"

function Sidebar() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [openMenus, setOpenMenus] = useState({
    Deudores: false,
    "Procesos Coactivos": false,
    "Actuaciones Procesales": true,
    Documentos: false,
    Reportes: false,
    Administración: false
  })

  const activePath = location.pathname

  const activeParents = useMemo(() => {
    const parents = {}
    menuConfig.forEach((item) => {
      if (item.submenu) {
        parents[item.title] = item.submenu.some((sub) => sub.path === activePath)
      }
    })
    return parents
  }, [activePath])

  const toggleMenu = (title) => {
    if (collapsed) return
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const itemStyle = (active = false) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
    color: active ? "#ffffff" : "#d8e6f3",
    background: active ? "rgba(255,255,255,0.14)" : "transparent",
    border: active ? "1px solid rgba(255,255,255,0.14)" : "1px solid transparent",
    padding: collapsed ? "12px 10px" : "12px 14px",
    borderRadius: "12px",
    transition: "all 0.2s ease",
    fontWeight: active ? 700 : 500,
    minHeight: "46px"
  })

  return (
    <aside
      style={{
        width: collapsed ? "84px" : "290px",
        minWidth: collapsed ? "84px" : "290px",
        height: "100vh",
        position: "sticky",
        top: 0,
        background: "linear-gradient(180deg, #0b2a4a 0%, #123b62 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        transition: "width 0.25s ease, min-width 0.25s ease",
        boxShadow: "4px 0 18px rgba(0,0,0,0.08)"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          padding: "18px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.10)"
        }}
      >
        {!collapsed && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Scale size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "18px", lineHeight: 1.1 }}>
                Coactivas
              </div>
              <div style={{ fontSize: "12px", color: "#c4d6e8", marginTop: "3px" }}>
                Sistema institucional
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            border: "none",
            background: "rgba(255,255,255,0.10)",
            color: "white",
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Menu size={18} />
        </button>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "12px 10px"
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {menuConfig.map((item) => {
            const Icon = item.icon
            const hasSubmenu = !!item.submenu
            const isParentActive = activeParents[item.title]

            if (!hasSubmenu) {
              const active = activePath === item.path
              return (
                <li key={item.title} style={{ marginBottom: "8px" }}>
                  <Link to={item.path} style={itemStyle(active)}>
                    <Icon size={18} />
                    {!collapsed && <span>{item.title}</span>}
                  </Link>
                </li>
              )
            }

            const isOpen = openMenus[item.title] || isParentActive

            return (
              <li key={item.title} style={{ marginBottom: "8px" }}>
                <button
                  onClick={() => toggleMenu(item.title)}
                  style={{
                    width: "100%",
                    ...itemStyle(isParentActive || openMenus[item.title]),
                    border: (isParentActive || openMenus[item.title])
                      ? "1px solid rgba(255,255,255,0.14)"
                      : "1px solid transparent",
                    cursor: "pointer"
                  }}
                >
                  <Icon size={18} />
                  {!collapsed && (
                    <>
                      <span style={{ flex: 1, textAlign: "left" }}>{item.title}</span>
                      {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </>
                  )}
                </button>

                {!collapsed && isOpen && (
                  <ul
                    style={{
                      listStyle: "none",
                      margin: "8px 0 0 0",
                      padding: "0 0 0 10px",
                      borderLeft: "1px solid rgba(255,255,255,0.10)"
                    }}
                  >
                    {item.submenu.map((sub) => {
                      const SubIcon = sub.icon
                      const active = activePath === sub.path

                      return (
                        <li key={sub.title} style={{ marginBottom: "6px", marginLeft: "8px" }}>
                          <Link
                            to={sub.path}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              textDecoration: "none",
                              color: active ? "#ffffff" : "#c9d9e8",
                              background: active ? "rgba(255,255,255,0.14)" : "transparent",
                              padding: "10px 12px",
                              borderRadius: "10px",
                              fontSize: "14px",
                              fontWeight: active ? 700 : 500,
                              transition: "all 0.2s ease"
                            }}
                          >
                            <SubIcon size={16} />
                            <span>{sub.title}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      {!collapsed && (
        <div
          style={{
            padding: "14px",
            borderTop: "1px solid rgba(255,255,255,0.10)"
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "14px",
              padding: "12px"
            }}
          >
            <div style={{ fontSize: "13px", color: "#dbe8f4", fontWeight: 700 }}>
              Entorno activo
            </div>
            <div style={{ fontSize: "12px", color: "#bdd1e4", marginTop: "4px" }}>
              Sistema de gestión coactiva
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}

export default Sidebar