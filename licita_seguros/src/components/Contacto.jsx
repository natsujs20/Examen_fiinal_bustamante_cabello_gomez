import React from "react";
import ContactForm from "./ContactForm";

function Contacto() {
  return (
    <section
      className="container my-5 p-4 rounded-4 shadow-lg position-relative"
      style={{
        background: "linear-gradient(120deg, #f8f9fa 60%, #e3f0ff 100%)",
        maxWidth: 800,
      }}
    >
      {/* Icono decorativo arriba */}
      <div className="text-center mb-2">
        <span
          className="d-inline-block p-3 rounded-circle shadow"
          style={{
            background: "rgba(13,110,253,0.08)",
            marginBottom: "1rem",
            animation: "pulseGlow 2s infinite",
          }}
        >
          <i className="bi bi-chat-dots-fill text-primary" style={{ fontSize: "2rem" }}></i>
        </span>
      </div>
      <h2 className="mb-3 text-center text-primary fw-bold display-5 animate__animated animate__fadeInDown">
        Contáctanos
      </h2>
      <p className="lead text-center mb-4 text-secondary animate__animated animate__fadeInUp">
        ¿Tienes dudas, sugerencias o necesitas ayuda? Completa el formulario y nuestro equipo te responderá a la brevedad.
      </p>
      <div className="d-flex justify-content-center">
        <ContactForm />
      </div>
      <div className="text-center mt-4">
        <a
          href="mailto:contacto@licitaseguro.cl"
          className="text-primary text-decoration-none fw-semibold"
          style={{
            fontSize: "1.15rem",
            background: "rgba(13,110,253,0.07)",
            borderRadius: "2rem",
            padding: "0.5em 1.5em",
            boxShadow: "0 2px 8px #e3f0ff",
            transition: "background 0.2s",
            display: "inline-block",
          }}
        >
          <i className="bi bi-envelope-fill me-2"></i>
          contacto@licitaseguro.cl
        </a>
      </div>
      {/* Animación personalizada */}
      <style>
        {`
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 0 0 rgba(13,110,253,0.15); }
            70% { box-shadow: 0 0 0 18px rgba(13,110,253,0); }
            100% { box-shadow: 0 0 0 0 rgba(13,110,253,0.15); }
          }
        `}
      </style>
    </section>
  );
}

export default Contacto;