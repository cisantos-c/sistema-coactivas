import { FileText, FolderOpen, Scale, TrendingUp } from "lucide-react"

function Card({ title, value, icon: Icon }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e7edf4",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.04)"
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          background: "#eef5fb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "14px"
        }}
      >
        <Icon size={20} color="#1f4f7a" />
      </div>

      <div style={{ fontSize: "14px", color: "#6b8094" }}>{title}</div>
      <div
        style={{
          marginTop: "8px",
          fontSize: "30px",
          fontWeight: 800,
          color: "#173550"
        }}
      >
        {value}
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <div style={{ marginBottom: "24px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "28px",
            color: "#16324f"
          }}
        >
          Resumen general
        </h2>
        <p
          style={{
            margin: "6px 0 0 0",
            color: "#6d8297"
          }}
        >
          Estado actual del sistema de coactivas.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "24px"
        }}
      >
        <Card title="Procesos Activos" value="128" icon={Scale} />
        <Card title="Autos de Pago" value="54" icon={FileText} />
        <Card title="Embargos" value="21" icon={TrendingUp} />
        <Card title="Archivos de Causa" value="13" icon={FolderOpen} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "16px"
        }}
      >
        <div
          style={{
            background: "#f9fbfd",
            border: "1px solid #e7edf4",
            borderRadius: "16px",
            padding: "20px"
          }}
        >
          <h3 style={{ marginTop: 0, color: "#173550" }}>
            Actividad reciente
          </h3>
          <div style={{ color: "#60758a", lineHeight: 1.9 }}>
            <div>• Se generó un nuevo Auto de Pago para el proceso 2025-001</div>
            <div>• Se registró un embargo bancario en el proceso 2025-004</div>
            <div>• Se archivó la causa del expediente 2024-019</div>
            <div>• Se actualizó el estado del proceso 2025-009</div>
          </div>
        </div>

        <div
          style={{
            background: "#f9fbfd",
            border: "1px solid #e7edf4",
            borderRadius: "16px",
            padding: "20px"
          }}
        >
          <h3 style={{ marginTop: 0, color: "#173550" }}>
            Alertas
          </h3>
          <div style={{ color: "#60758a", lineHeight: 1.9 }}>
            <div>• 5 procesos próximos a vencer</div>
            <div>• 2 embargos pendientes de validación</div>
            <div>• 4 documentos por revisar</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard