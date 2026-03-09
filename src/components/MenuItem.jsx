import { useState } from "react";
import { Link } from "react-router-dom";

function MenuItem({ item }) {

  const [open, setOpen] = useState(false);

  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <li>

      <div
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between"
        }}
        onClick={() => hasSubmenu && setOpen(!open)}
      >

        {item.path ? (
          <Link to={item.path} style={{ color: "white", textDecoration: "none" }}>
            {item.title}
          </Link>
        ) : (
          item.title
        )}

        {hasSubmenu && <span>{open ? "▲" : "▼"}</span>}

      </div>

      {hasSubmenu && open && (

        <ul style={{ listStyle: "none", paddingLeft: "20px" }}>

          {item.submenu.map((sub, index) => (
            <MenuItem key={index} item={sub} />
          ))}

        </ul>

      )}

    </li>
  );
}

export default MenuItem;