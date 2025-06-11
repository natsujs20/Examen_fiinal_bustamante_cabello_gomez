import React from "react";

function Productos() {
  return (
    <section className="container my-5">
      <h2 className="mb-4 text-center text-primary fw-bold display-5 animate__animated animate__fadeInDown">
        Nuestros Servicios
      </h2>
      <p className="lead text-center mb-5 text-secondary animate__animated animate__fadeInUp">
        Descubre cómo{" "}
        <span className="fw-bold text-primary">Licitaseguro</span> puede ayudarte a
        potenciar tu participación en licitaciones públicas y encontrar nuevas
        oportunidades de negocio.
      </p>
      <div className="row text-center g-4">
        <div className="col-md-4">
          <div
            className="card h-100 shadow-lg border-0 animate__animated animate__zoomIn"
            style={{ borderRadius: "1.5rem" }}
          >
            <div className="card-body">
              <div className="mb-3">
                <span className="d-inline-block p-3 rounded-circle bg-primary bg-opacity-10 shadow-sm mb-2">
                  <i className="bi bi-search display-4 text-primary"></i>
                </span>
              </div>
              <h5 className="card-title fw-bold">Consulta de Licitaciones</h5>
              <p className="card-text">
                Accede a un listado actualizado de licitaciones públicas
                disponibles en Mercado Público. Información clara, filtros rápidos
                y acceso directo a los detalles.
              </p>
              <a
                href="#/licitaciones"
                className="btn btn-primary rounded-pill px-4 mt-2 shadow-sm"
                style={{ fontWeight: 500, letterSpacing: "0.5px" }}
              >
                Ver licitaciones
              </a>
            </div>
            <div className="card-footer bg-transparent border-0">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 shadow-sm" style={{ borderRadius: "1rem" }}>
                Actualización diaria
              </span>
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
                <span className="d-inline-block p-3 rounded-circle bg-success bg-opacity-10 shadow-sm mb-2">
                  <i className="bi bi-funnel-fill display-4 text-success"></i>
                </span>
              </div>
              <h5 className="card-title fw-bold">Filtrado Avanzado</h5>
              <p className="card-text">
                Filtra licitaciones por fecha, estado, rubro y más. Encuentra las
                oportunidades más relevantes para tu empresa con solo unos clics.
              </p>
              <a
                href="#/licitaciones"
                className="btn btn-success rounded-pill px-4 mt-2 shadow-sm text-white"
                style={{ fontWeight: 500, letterSpacing: "0.5px" }}
              >
                Filtrar ahora
              </a>
            </div>
            <div className="card-footer bg-transparent border-0">
              <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 shadow-sm" style={{ borderRadius: "1rem" }}>
                Filtros inteligentes
              </span>
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
                <span className="d-inline-block p-3 rounded-circle bg-info bg-opacity-10 shadow-sm mb-2">
                  <i className="bi bi-person-badge-fill display-4 text-info"></i>
                </span>
              </div>
              <h5 className="card-title fw-bold">Búsqueda de Proveedores</h5>
              <p className="card-text">
                Busca proveedores por RUT y revisa su historial de participación en
                Mercado Público. Transparencia y confianza para tus decisiones.
              </p>
              <a
                href="#/proveedores"
                className="btn btn-info rounded-pill px-4 mt-2 shadow-sm text-white"
                style={{ fontWeight: 500, letterSpacing: "0.5px" }}
              >
                Buscar proveedor
              </a>
            </div>
            <div className="card-footer bg-transparent border-0">
              <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 shadow-sm" style={{ borderRadius: "1rem" }}>
                Datos confiables
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 animate__animated animate__fadeInUp">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/10/19/05/business-1979134_1280.png"
          alt="Servicios Licitaseguro"
          className="img-fluid rounded-4 shadow"
          style={{
            maxHeight: 220,
            objectFit: "cover",
            border: "4px solid #e3f0ff",
          }}
        />
      </div>
    </section>
  );
}

export default Productos;