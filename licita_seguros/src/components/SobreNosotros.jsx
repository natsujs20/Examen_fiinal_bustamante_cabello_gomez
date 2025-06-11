import React from "react";

function SobreNosotros() {
  return (
    <section
      className="container my-5 p-4 rounded-4 shadow-lg"
      style={{
        background: "linear-gradient(90deg, #f8f9fa 60%, #e3f0ff 100%)",
        maxWidth: 1000,
      }}
    >
      <h2 className="mb-4 text-center text-primary fw-bold display-5 animate__animated animate__fadeInDown">
        <i className="bi bi-people-fill me-2"></i>
        Sobre Nosotros
      </h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 mb-4 mb-md-0 text-center animate__animated animate__fadeInLeft">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/09/32/business-1868726_1280.jpg"
            alt="Equipo Licitaseguro"
            className="img-fluid rounded-4 shadow"
            style={{
              maxHeight: 260,
              objectFit: "cover",
              border: "4px solid #e3f0ff",
            }}
          />
        </div>
        <div className="col-md-7 animate__animated animate__fadeInRight">
          <p className="lead text-center text-md-start mb-4">
            <span className="fw-bold text-primary">Licitaseguro</span> nace con el
            objetivo de facilitar el acceso a la información sobre licitaciones
            públicas en Chile, promoviendo la transparencia y la igualdad de
            oportunidades para empresas y proveedores.
          </p>
          <p className="mb-4 text-center text-md-start">
            Nuestro equipo está comprometido con entregar una plataforma
            confiable, intuitiva y actualizada, que permita a los usuarios
            consultar, filtrar y analizar licitaciones del Mercado Público de
            manera eficiente.
          </p>
          <ul className="list-unstyled mb-4">
            <li className="mb-2">
              <span
                className="badge bg-success bg-opacity-10 text-success px-3 py-2 me-2"
                style={{ borderRadius: "1rem" }}
              >
                <i className="bi bi-check-circle-fill me-1"></i>
                Transparencia y acceso abierto a la información.
              </span>
            </li>
            <li className="mb-2">
              <span
                className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 me-2"
                style={{ borderRadius: "1rem" }}
              >
                <i className="bi bi-stars me-1"></i>
                Plataforma fácil de usar y siempre actualizada.
              </span>
            </li>
            <li className="mb-2">
              <span
                className="badge bg-info bg-opacity-10 text-info px-3 py-2 me-2"
                style={{ borderRadius: "1rem" }}
              >
                <i className="bi bi-people-fill me-1"></i>
                Apoyo y acompañamiento en cada paso del proceso.
              </span>
            </li>
          </ul>
          <div className="text-center text-md-start">
            <a
              href="#/contacto"
              className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow animate__animated animate__pulse animate__infinite"
              style={{ fontSize: "1.1rem", letterSpacing: "1px" }}
            >
              <i className="bi bi-envelope-paper-heart me-2"></i>
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;