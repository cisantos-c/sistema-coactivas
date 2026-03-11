import { useState } from "react"
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
  const [openMenus, setOpenMenus] = useState({})

  const activePath = location.pathname

  const toggleMenu = (key) => {
    if (collapsed) return
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const hasActiveChild = (item) => {
    if (!item.submenu) return item.path === activePath
    return item.submenu.some((sub) => hasActiveChild(sub))
  }

  const renderMenuItems = (items, level = 0, parentKey = "") => {
    return items.map((item, index) => {
      const key = `${parentKey}${level}-${index}-${item.title}`
      const Icon = item.icon
      const hasSubmenu = !!item.submenu
      const isActive = item.path === activePath
      const isParentActive = hasActiveChild(item)
      const isOpen = !!openMenus[key] || isParentActive

      if (!hasSubmenu) {
        return (
          <li key={key} style={{ marginBottom: "6px" }}>
            <Link
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                //color: isActive ? "#ffffff" : "#d8e6f3",
                //background: isActive ? "rgba(255,255,255,0.14)" : "transparent",
                color: isActive ? "#ffffff" : "#E8F0FF",
                background: isActive ? "rgba(255,255,255,0.18)" : "transparent",
                border: isActive
                  ? "1px solid rgba(255,255,255,0.14)"
                  : "1px solid transparent",
                padding: "10px 12px",
                borderRadius: "10px",
                fontWeight: isActive ? 700 : 500,
                fontSize: level === 0 ? "15px" : "14px",
                marginLeft: `${level * 10}px`,
                transition: "all 0.2s ease",
                //transition: "all 0.25s ease",
                
              }}
            >
              {Icon && <Icon size={16} />}
              {!collapsed && <span>{item.title}</span>}
            </Link>
          </li>
        )
      }

      return (
        <li key={key} style={{ marginBottom: "6px" }}>
          <button
            onClick={() => toggleMenu(key)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: isParentActive ? "rgba(255,255,255,0.10)" : "transparent",
              border: isParentActive
                ? "1px solid rgba(255,255,255,0.14)"
                : "1px solid transparent",
              color: "#ffffff",
              padding: "10px 12px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: isParentActive ? 700 : 500,
              fontSize: level === 0 ? "15px" : "14px",
              marginLeft: `${level * 10}px`,
              transition: "all 0.2s ease"
            }}
          >
            {Icon && <Icon size={16} />}
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
                margin: "6px 0 0 0",
                padding: 0
              }}
            >
              {renderMenuItems(item.submenu, level + 1, `${key}-`)}
            </ul>
          )}
        </li>
      )
    })
  }

  return (
    <aside
      style={{
        width: collapsed ? "84px" : "290px",
        minWidth: collapsed ? "84px" : "290px",
        height: "100vh",
        position: "sticky",
        top: 0,
        //background: "linear-gradient(180deg, #0b2a4a 0%, #123b62 100%)",
        //background: "linear-gradient(180deg, #1E4E96 0%, #2E63B0 100%)",
        //background: "#1E4E96",
        background: "rgb(26, 75, 148)",
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
          {renderMenuItems(menuConfig)}
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