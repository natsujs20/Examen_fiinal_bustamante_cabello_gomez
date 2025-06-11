import React from "react";

function Header() {
  return (
    <header
      className="mb-4 shadow-lg"
      style={{
        background: "linear-gradient(90deg, #0d6efd 60%, #4f8cff 100%)",
        color: "#fff",
        boxShadow: "0 4px 24px 0 rgba(13,110,253,0.10)",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Logo Licitaseguro"
            width="54"
            height="54"
            className="me-3 rounded-circle border border-white shadow"
            style={{
              background: "#fff",
              animation: "logoPop 1.2s cubic-bezier(.68,-0.55,.27,1.55)",
            }}
          />
          <h1
            className="h3 mb-0 fw-bold"
            style={{
              letterSpacing: "1px",
              textShadow: "0 2px 8px #0d6efd55",
              fontFamily: "'Segoe UI', 'Arial', sans-serif",
            }}
          >
            Licitaseguro
          </h1>
        </div>
        <nav>
          <a
            href="#/"
            className="text-white mx-2 fw-semibold nav-link d-inline-block position-relative header-link"
          >
            <i className="bi bi-house-door-fill me-1"></i>
            Inicio
          </a>
          <a
            href="#/licitaciones"
            className="text-white mx-2 fw-semibold nav-link d-inline-block position-relative header-link"
          >
            <i className="bi bi-file-earmark-text-fill me-1"></i>
            Licitaciones
          </a>
          <a
            href="#/proveedores"
            className="text-white mx-2 fw-semibold nav-link d-inline-block position-relative header-link"
          >
            <i className="bi bi-people-fill me-1"></i>
            Proveedores
          </a>
          <a
            href="#/contacto"
            className="text-white mx-2 fw-semibold nav-link d-inline-block position-relative header-link"
          >
            <i className="bi bi-envelope-fill me-1"></i>
            Contacto
          </a>
        </nav>
      </div>
      <style>
        {`
          @keyframes logoPop {
            0% { transform: scale(0.7) rotate(-10deg); opacity: 0; }
            60% { transform: scale(1.1) rotate(5deg); opacity: 1; }
            100% { transform: scale(1) rotate(0deg); }
          }
          .header-link {
            transition: color 0.2s, text-shadow 0.2s;
          }
          .header-link:hover, .header-link:focus {
            color: #ffe066 !important;
            text-shadow: 0 2px 8px #fff799;
          }
        `}
      </style>
    </header>
  );
}

export default Header;