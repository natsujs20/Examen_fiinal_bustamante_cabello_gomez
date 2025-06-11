import React from "react";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Inicio from "./src/components/Inicio";
import Licitaciones from "./src/components/Licitaciones";
import Proveedores from "./src/components/Proveedores";
import Contacto from "./src/components/Contacto";

// Simple enrutamiento usando hash
function App() {
  const [route, setRoute] = React.useState(window.location.hash);

  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Scroll al top en cada cambio de ruta
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [route]);

  // Puedes agregar más rutas aquí si lo necesitas
  let Content;
  switch (route) {
    case "#/licitaciones":
      Content = <Licitaciones />;
      break;
    case "#/proveedores":
      Content = <Proveedores />;
      break;
    case "#/contacto":
      Content = <Contacto />;
      break;
    case "#/":
    default:
      Content = <Inicio />;
      break;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f8f9fa 60%, #e3f0ff 100%)",
        position: "relative",
      }}
    >
      <Header />
      <main
        className="animate__animated animate__fadeIn"
        style={{
          minHeight: "80vh",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {Content}
      </main>
      <Footer />
      {/* Elementos decorativos suaves */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <svg width="100%" height="100%">
          <circle cx="10%" cy="20%" r="80" fill="#0d6efd" fillOpacity="0.06" />
          <circle cx="90%" cy="80%" r="120" fill="#0d6efd" fillOpacity="0.09" />
          <circle cx="50%" cy="10%" r="40" fill="#fff" fillOpacity="0.07" />
        </svg>
      </div>
    </div>
  );
}

export default App;