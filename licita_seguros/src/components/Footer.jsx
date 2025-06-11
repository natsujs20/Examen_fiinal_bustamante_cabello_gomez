import React from "react";

function Footer() {
  return (
    <footer
      className="py-4 mt-5 position-relative"
      style={{
        background: "linear-gradient(90deg, #0d6efd 60%, #4f8cff 100%)",
        color: "#fff",
        boxShadow: "0 -4px 24px 0 rgba(13,110,253,0.10)",
      }}
    >
      <div className="container text-center">
        <div className="mb-2">
          <span
            className="d-inline-block p-2 rounded-circle"
            style={{
              background: "rgba(255,255,255,0.12)",
              marginBottom: "0.5rem",
              boxShadow: "0 2px 8px #0d6efd33",
            }}
          >
            <i className="bi bi-shield-check" style={{ fontSize: "1.5rem", color: "#fff" }}></i>
          </span>
        </div>
        <small style={{ fontSize: "1.08rem", letterSpacing: "0.5px" }}>
          &copy; {new Date().getFullYear()} <strong>Licitaseguro</strong>. Todos los derechos reservados.
        </small>
        <div className="mt-2">
          <a
            href="mailto:contacto@licitaseguro.cl"
            className="text-white text-decoration-none"
            style={{
              opacity: 0.85,
              transition: "opacity 0.2s",
              fontWeight: 500,
            }}
            onMouseOver={e => (e.currentTarget.style.opacity = 1)}
            onMouseOut={e => (e.currentTarget.style.opacity = 0.85)}
          >
            <i className="bi bi-envelope-fill me-1"></i>
            contacto@licitaseguro.cl
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;