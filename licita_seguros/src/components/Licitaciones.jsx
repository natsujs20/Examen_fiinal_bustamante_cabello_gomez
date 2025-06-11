import React, { useEffect, useState } from "react";

const ESTADOS = [
  { codigo: "", nombre: "Todos" },
  { codigo: "5", nombre: "Publicada" },
  { codigo: "6", nombre: "Cerrada" },
  { codigo: "7", nombre: "Desierta" },
  { codigo: "8", nombre: "Adjudicada" },
  { codigo: "18", nombre: "Revocada" },
  { codigo: "19", nombre: "Suspendida" },
];

function Licitaciones() {
  const [licitaciones, setLicitaciones] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filtros individuales
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    fetch('/api/mercadoPublico/resultado.json')
      .then(res => res.json())
      .then(data => {
        setLicitaciones(data.Listado || []);
        setLoading(false);
      });
  }, []);

  // Filtrado por cada campo
  const licitacionesFiltradas = licitaciones.filter(licitacion => {
    const matchCodigo = licitacion.CodigoExterno.toLowerCase().includes(codigo.toLowerCase());
    const matchNombre = licitacion.Nombre.toLowerCase().includes(nombre.toLowerCase());
    const matchEstado =
      estado === "" ||
      String(licitacion.CodigoEstado).trim() === String(estado).trim();
    const matchFecha = fecha === "" || licitacion.FechaCierre.startsWith(fecha);
    return matchCodigo && matchNombre && matchEstado && matchFecha;
  });

  // Función para mostrar el nombre del estado
  const getEstadoNombre = (codigo) => {
    const found = ESTADOS.find(e => e.codigo === codigo);
    return found ? found.nombre : codigo;
  };

  // Opcional: función para asignar color al estado
  const getEstadoColor = (codigo) => {
    switch (codigo) {
      case "5": return "bg-primary";      // Publicada
      case "6": return "bg-secondary";    // Cerrada
      case "7": return "bg-warning";      // Desierta
      case "8": return "bg-success";      // Adjudicada
      case "18": return "bg-danger";      // Revocada
      case "19": return "bg-dark";        // Suspendida
      default: return "bg-info";
    }
  };

  return (
    <section className="container my-5">
      <h2 className="mb-4 text-center text-primary fw-bold display-5 animate__animated animate__fadeInDown">
        <i className="bi bi-file-earmark-text me-2"></i>
        Licitaciones Disponibles
      </h2>
      {/* Filtros */}
      <div className="row mb-3 g-2">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Código Externo"
            value={codigo}
            onChange={e => setCodigo(e.target.value)}
            style={{ borderRadius: "1.5rem" }}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            style={{ borderRadius: "1.5rem" }}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select shadow-sm"
            value={estado}
            onChange={e => setEstado(e.target.value)}
            style={{ borderRadius: "1.5rem" }}
          >
            {ESTADOS.map(e => (
              <option key={e.codigo} value={e.codigo}>{e.nombre}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <input
            type="date"
            className="form-control shadow-sm"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            style={{ borderRadius: "1.5rem" }}
          />
        </div>
      </div>
      {/* Tabla */}
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      ) : (
        <div className="table-responsive shadow rounded-4 animate__animated animate__fadeInUp">
          <table className="table table-hover align-middle table-bordered table-striped mb-0" style={{ borderRadius: "1.5rem", overflow: "hidden" }}>
            <thead className="table-primary">
              <tr>
                <th className="text-center"><i className="bi bi-hash me-1"></i>Código</th>
                <th className="text-center"><i className="bi bi-card-text me-1"></i>Nombre</th>
                <th className="text-center"><i className="bi bi-flag-fill me-1"></i>Estado</th>
                <th className="text-center"><i className="bi bi-calendar-event me-1"></i>Fecha de Cierre</th>
              </tr>
            </thead>
            <tbody>
              {licitacionesFiltradas.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center text-muted">
                    <i className="bi bi-emoji-frown me-2"></i>
                    No se encontraron resultados.
                  </td>
                </tr>
              ) : (
                licitacionesFiltradas.map((licit, idx) => (
                  <tr key={idx} className="animate__animated animate__fadeIn">
                    <td className="text-center fw-semibold">{licit.CodigoExterno}</td>
                    <td>{licit.Nombre}</td>
                    <td className="text-center">
                      <span className={`badge ${getEstadoColor(licit.CodigoEstado)} text-light shadow-sm`} style={{ fontSize: "1rem", borderRadius: "1rem" }}>
                        {getEstadoNombre(licit.CodigoEstado)}
                      </span>
                    </td>
                    <td className="text-center">{licit.FechaCierre}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
      {/* Animación personalizada para badges */}
      <style>
        {`
          .badge {
            transition: box-shadow 0.2s, transform 0.2s;
          }
          .badge:hover {
            box-shadow: 0 2px 12px #0d6efd33;
            transform: scale(1.08);
          }
        `}
      </style>
    </section>
  );
}

export default Licitaciones;