import React, { useState } from "react";

function Proveedores() {
  const [rut, setRut] = useState("");
  const [proveedor, setProveedor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProveedor(null);
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.mercadopublico.cl/servicios/v1/Publico/Empresas/BuscarProveedor?rutempresaproveedor=${rut}&ticket=AC3A098B-4CD0-41AF-81A5-41284248419B`
      );
      const data = await response.json();
      if (data.Listado && data.Listado.length > 0) {
        setProveedor(data.Listado[0]);
      } else {
        setError("Proveedor no encontrado.");
      }
    } catch {
      setError("Error al buscar el proveedor.");
    }
    setLoading(false);
  };

  return (
    <section className="container my-5">
      <h2 className="mb-4 text-center text-success fw-bold display-5 animate__animated animate__fadeInDown">
        <i className="bi bi-person-vcard me-2"></i>
        Buscar Proveedor por RUT
      </h2>
      <p className="lead text-center mb-4 text-secondary animate__animated animate__fadeInUp">
        Ingresa el RUT del proveedor para consultar su información y participación en Mercado Público.
      </p>
      <form className="row justify-content-center mb-4" onSubmit={handleSubmit}>
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Ej: 12345678-9"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            required
            style={{ borderRadius: "2rem", boxShadow: "0 2px 8px #d1e7dd" }}
          />
        </div>
        <div className="col-md-2 mb-2">
          <button className="btn btn-success w-100 shadow-sm" type="submit" disabled={loading} style={{ borderRadius: "2rem" }}>
            <i className="bi bi-search me-1"></i>
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </div>
      </form>
      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-success" role="status"></div>
        </div>
      )}
      {error && (
        <div className="alert alert-danger text-center animate__animated animate__shakeX">{error}</div>
      )}
      {proveedor && (
        <div className="card shadow-lg mx-auto animate__animated animate__fadeInUp" style={{ maxWidth: 500, borderRadius: "1.5rem" }}>
          <div className="card-body">
            <div className="mb-3">
              <span className="d-inline-block p-3 rounded-circle bg-success bg-opacity-25 mb-2">
                <i className="bi bi-building text-success" style={{ fontSize: "2rem" }}></i>
              </span>
            </div>
            <h5 className="card-title fw-bold mb-2">{proveedor.Nombre}</h5>
            <div className="mb-2">
              <span className="badge bg-success bg-opacity-75">{proveedor.EstadoEmpresa}</span>
            </div>
            <p className="card-text mb-1"><strong>RUT:</strong> {proveedor.RutEmpresa}</p>
            <p className="card-text mb-1"><strong>Dirección:</strong> {proveedor.Direccion}</p>
            <p className="card-text mb-1"><strong>Comuna:</strong> {proveedor.Comuna}</p>
            <p className="card-text mb-1"><strong>Teléfono:</strong> {proveedor.Telefono}</p>
            <p className="card-text mb-1"><strong>Email:</strong> {proveedor.Email}</p>
          </div>
        </div>
      )}
      <style>
        {`
          .badge {
            transition: box-shadow 0.2s, transform 0.2s;
          }
          .badge:hover {
            box-shadow: 0 2px 12px #19875433;
            transform: scale(1.08);
          }
        `}
      </style>
    </section>
  );
}

export default Proveedores;