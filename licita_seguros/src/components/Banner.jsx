import React from "react";

function Banner() {
  return (
    <section
      className="py-5 position-relative"
      style={{
        background: "linear-gradient(120deg, #4f8cff 0%, #e3f0ff 100%)",
        overflow: "hidden",
        minHeight: "420px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      }}
    >
      <div className="container text-center position-relative" style={{ zIndex: 2 }}>
        <div className="mb-4">
          <span
            className="d-inline-block p-3 rounded-circle shadow"
            style={{
              background: "rgba(255,255,255,0.7)",
              marginBottom: "1rem",
              animation: "pulseGlow 2s infinite",
            }}
          >
            <svg width="48" height="48" fill="#0d6efd" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0Zm0 15A7 7 0 1 1 15 8 7 7 0 0 1 8 15Zm3.5-7a.5.5 0 0 1-.5.5H8.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708.708L8.707 7.5H11a.5.5 0 0 1 .5.5Z" />
            </svg>
          </span>
        </div>
        <h2 className="display-4 mb-3 fw-bold text-primary animate__animated animate__fadeInDown">
          Transparencia y acceso a licitaciones públicas en Chile
        </h2>
        <p className="lead mb-4 animate__animated animate__fadeInUp text-dark">
          <span style={{ background: "rgba(255,255,255,0.6)", borderRadius: "1rem", padding: "0.25em 0.75em" }}>
            <strong>Licitaseguro</strong> te ayuda a encontrar y analizar licitaciones del Mercado Público de forma simple y rápida.
          </span>
        </p>
        <a
          href="#/licitaciones"
          className="btn btn-primary btn-lg px-5 py-3 shadow-lg animate__animated animate__pulse animate__infinite"
          style={{
            fontSize: "1.25rem",
            borderRadius: "2rem",
            letterSpacing: "1px",
            boxShadow: "0 4px 24px 0 rgba(13,110,253,0.15)",
            transition: "transform 0.2s",
          }}
        >
          <i className="bi bi-search me-2"></i>
          Ver licitaciones
        </a>
      </div>
      {/* Elementos decorativos */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <svg width="100%" height="100%">
          <circle cx="10%" cy="20%" r="80" fill="#0d6efd" fillOpacity="0.09" />
          <circle cx="90%" cy="80%" r="120" fill="#0d6efd" fillOpacity="0.13" />
          <circle cx="50%" cy="10%" r="40" fill="#fff" fillOpacity="0.10" />
        </svg>
      </div>
      {/* Animación personalizada */}
      <style>
        {`
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 0 0 rgba(13,110,253,0.3); }
            70% { box-shadow: 0 0 0 18px rgba(13,110,253,0); }
            100% { box-shadow: 0 0 0 0 rgba(13,110,253,0.3); }
          }
        `}
      </style>
    </section>
  );
}

export default Banner;