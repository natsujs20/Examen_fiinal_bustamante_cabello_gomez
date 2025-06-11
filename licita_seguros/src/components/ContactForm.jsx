import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos a un backend o servicio de correo
    setEnviado(true);
  };

  return (
    <section
      className="container my-5 p-4 rounded-4 shadow-lg"
      style={{
        background: "linear-gradient(90deg, #f8f9fa 60%, #e3f0ff 100%)",
        maxWidth: 600,
      }}
    >
      <h2 className="mb-4 text-primary fw-bold text-center animate__animated animate__fadeInDown">
        <i className="bi bi-envelope-paper-heart me-2"></i>
        Contáctanos
      </h2>
      {enviado ? (
        <div
          className="alert alert-success text-center animate__animated animate__fadeInDown"
          style={{ borderRadius: "1.5rem" }}
        >
          <i className="bi bi-patch-check-fill me-2 fs-3"></i>
          ¡Mensaje enviado correctamente!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="animate__animated animate__fadeInUp"
        >
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label fw-semibold">
              <i className="bi bi-person-circle me-2 text-primary"></i>
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              style={{ borderRadius: "1.5rem", boxShadow: "0 2px 8px #e3f0ff" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              <i className="bi bi-envelope-at-fill me-2 text-primary"></i>
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="tucorreo@email.com"
              style={{
                borderRadius: "1.5rem",
                boxShadow: "0 2px 8px #e3f0ff",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label fw-semibold">
              <i className="bi bi-chat-dots-fill me-2 text-primary"></i>
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="mensaje"
              name="mensaje"
              rows="4"
              value={form.mensaje}
              onChange={handleChange}
              required
              placeholder="¿En qué podemos ayudarte?"
              style={{ borderRadius: "1.5rem", boxShadow: "0 2px 8px #e3f0ff" }}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-5 py-2 fw-bold shadow animate__animated animate__pulse animate__infinite"
              style={{ borderRadius: "2rem", fontSize: "1.1rem", letterSpacing: "1px" }}
            >
              <i className="bi bi-send-fill me-2"></i>
              Enviar
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

export default ContactForm;