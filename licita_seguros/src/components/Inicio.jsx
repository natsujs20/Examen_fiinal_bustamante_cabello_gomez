import React from "react";
import Banner from "./Banner";

function Inicio() {
  return (
    <main>
      <Banner />
      <section className="container my-5">
        <h3 className="mb-4 text-center fw-bold text-primary display-6 animate__animated animate__fadeInDown">
          ¿Qué es Licitaseguro?
        </h3>
        <p className="lead text-center mb-5 animate__animated animate__fadeInUp">
          Somos una plataforma dedicada a facilitar el acceso y la transparencia de las licitaciones públicas en Chile.
          <br />
          <span className="text-primary fw-semibold">
            Consulta, filtra y analiza licitaciones del Mercado Público de manera simple y rápida.
          </span>
        </p>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-lg border-0 animate__animated animate__zoomIn" style={{ borderRadius: "1.5rem" }}>
              <div className="card-body">
                <div className="mb-3">
                  <span className="d-inline-block p-3 rounded-circle bg-primary bg-opacity-10 shadow-sm mb-2">
                    <i className="bi bi-search display-5 text-primary"></i>
                  </span>
                </div>
                <h5 className="card-title fw-bold">Consulta Licitaciones</h5>
                <p className="card-text">
                  Accede al listado actualizado de licitaciones públicas y encuentra oportunidades para tu empresa.
                </p>
                <a
                  href="#/licitaciones"
                  className="btn btn-primary rounded-pill px-4 mt-2 shadow-sm"
                  style={{ fontWeight: 500, letterSpacing: "0.5px" }}
                >
                  Ver licitaciones
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card h-100 shadow-lg border-0 animate__animated animate__zoomIn"
              style={{ animationDelay: "0.1s", borderRadius: "1.5rem" }}
            >
              <div className="card-body">
                <div className="mb-3">
                  <span className="d-inline-block p-3 rounded-circle bg-info bg-opacity-10 shadow-sm mb-2">
                    <i className="bi bi-funnel-fill display-5 text-info"></i>
                  </span>
                </div>
                <h5 className="card-title fw-bold">Filtra y Analiza</h5>
                <p className="card-text">
                  Filtra por fecha, estado y otros criterios para encontrar las licitaciones que más te interesan.
                </p>
                <a
                  href="#/licitaciones"
                  className="btn btn-info rounded-pill px-4 mt-2 shadow-sm text-white"
                  style={{ fontWeight: 500, letterSpacing: "0.5px" }}
                >
                  Filtrar ahora
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card h-100 shadow-lg border-0 animate__animated animate__zoomIn"
              style={{ animationDelay: "0.2s", borderRadius: "1.5rem" }}
            >
              <div className="card-body">
                <div className="mb-3">
                  <span className="d-inline-block p-3 rounded-circle bg-success bg-opacity-10 shadow-sm mb-2">
                    <i className="bi bi-person-badge-fill display-5 text-success"></i>
                  </span>
                </div>
                <h5 className="card-title fw-bold">Busca Proveedores</h5>
                <p className="card-text">
                  Encuentra información de proveedores por RUT y conoce su historial en Mercado Público.
                </p>
                <a
                  href="#/proveedores"
                  className="btn btn-success rounded-pill px-4 mt-2 shadow-sm text-white"
                  style={{ fontWeight: 500, letterSpacing: "0.5px" }}
                >
                  Buscar proveedor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="container my-5 py-4 px-4 rounded-4 shadow-lg"
        style={{
          background: "linear-gradient(90deg, #e3f0ff 0%, #f8f9fa 100%)",
          maxWidth: 900,
        }}
      >
        <h4 className="mb-3 text-center text-primary fw-bold">
          ¿Por qué elegir Licitaseguro?
        </h4>
        <ul className="list-unstyled row text-center">
          <li className="col-md-4 mb-3">
            <span className="d-inline-block p-3 rounded-circle bg-warning bg-opacity-25 shadow-sm mb-2">
              <i className="bi bi-lightbulb-fill text-warning display-6"></i>
            </span>
            <div className="fw-semibold mt-2">Transparencia total</div>
            <div className="small text-muted">
              Información clara y actualizada de todas las licitaciones públicas.
            </div>
          </li>
          <li className="col-md-4 mb-3">
            <span className="d-inline-block p-3 rounded-circle bg-success bg-opacity-25 shadow-sm mb-2">
              <i className="bi bi-speedometer2 text-success display-6"></i>
            </span>
            <div className="fw-semibold mt-2">Acceso rápido</div>
            <div className="small text-muted">
              Encuentra lo que buscas en segundos con filtros inteligentes.
            </div>
          </li>
          <li className="col-md-4 mb-3">
            <span className="d-inline-block p-3 rounded-circle bg-info bg-opacity-25 shadow-sm mb-2">
              <i className="bi bi-people-fill text-info display-6"></i>
            </span>
            <div className="fw-semibold mt-2">Soporte dedicado</div>
            <div className="small text-muted">
              Nuestro equipo te acompaña en cada paso del proceso.
            </div>
          </li>
        </ul>
      </section>
      <section className="container my-5">
        <h4 className="mb-4 text-center text-primary fw-bold">
          Últimas novedades y recursos
        </h4>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: "1.25rem" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  <i className="bi bi-newspaper text-primary me-2"></i>
                  Noticias del sector público
                </h5>
                <p className="card-text">
                  Mantente informado sobre cambios, oportunidades y tendencias en licitaciones públicas en Chile.
                </p>
                <a href="https://www.mercadopublico.cl/Home/noticias" target="_blank" rel="noopener noreferrer" className="btn btn-link text-primary fw-semibold px-0">
                  Ver noticias
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: "1.25rem" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  <i className="bi bi-book text-primary me-2"></i>
                  Recursos y ayuda
                </h5>
                <p className="card-text">
                  Accede a guías, tutoriales y preguntas frecuentes para aprovechar al máximo Licitaseguro y el Mercado Público.
                </p>
                <a href="#/sobre-nosotros" className="btn btn-link text-primary fw-semibold px-0">
                  Ver recursos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Inicio;