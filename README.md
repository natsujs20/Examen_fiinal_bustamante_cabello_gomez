### Descripción del Proyecto

**Licitaseguro** es una plataforma web desarrollada con React y Vite que tiene como propósito simplificar y transparentar el acceso a licitaciones públicas en Chile. Permite consultar, filtrar y analizar licitaciones activas en el sistema de Mercado Público, además de buscar proveedores por RUT, todo a través de una interfaz visual amigable y responsiva.

### Tecnologías utilizadas

-   React v19
-   Vite v6
-   Bootstrap 5
-   Animate.css
-   JavaScript (ES6+)
-   HTML5 + CSS3

### Funcionalidades principales

-   Consulta de licitaciones públicas con filtros por código, nombre, estado y fecha.
-   Visualización ordenada mediante una tabla responsiva con insignias de estado.
-   Formulario de contacto funcional y personalizado.
-   Búsqueda de proveedores.
-   Animaciones suaves y componentes reutilizables.
-   Diseño adaptable a dispositivos móviles.

###  Estructura del Proyecto

```
licita_seguros/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── components/
│       ├── Header.jsx
│       ├── Footer.jsx
│       ├── Inicio.jsx
│       ├── Licitaciones.jsx
│       ├── Proveedores.jsx
│       ├── Contacto.jsx
│       ├── ContactForm.jsx
│       └── Banner.jsx
├── index.css
├── package.json
├── vite.config.js
└── README.md

```

### Instrucciones de uso

1.  Instalar dependencias:

    ```
    npm install

    ```

2.  Iniciar servidor de desarrollo:

    ```
    npm run dev

    ```

3.  Acceder vía navegador: `http://localhost:5173/`

Rutas disponibles:

-   Inicio: `#/`

-   Licitaciones: `#/licitaciones`

-   Proveedores: `#/proveedores`

-   Contacto: `#/contacto`

### Lógica general del funcionamiento

**Licitaseguro** es una aplicación construida con React y Vite que actúa como una SPA (Single Page Application). Toda la navegación se maneja mediante hash-routing (`window.location.hash`), lo que significa que el sitio no recarga al cambiar de sección, sino que actualiza el contenido dinámicamente según la ruta seleccionada.

Desde el archivo principal `App.jsx`, se gestiona el enrutamiento sencillo hacia los distintos módulos:

-   `#/` --- Página de inicio (`Inicio.jsx`)

-   `#/licitaciones` --- Módulo de búsqueda y filtro de licitaciones

-   `#/proveedores` --- Módulo (presuntamente) para búsqueda de proveedores por RUT

-   `#/contacto` --- Página de formulario de contacto

###  Flujo principal: Consulta de licitaciones

En el componente `Licitaciones.jsx`, se ejecuta una llamada fetch al archivo `/api/mercadoPublico/resultado.json`, simulando el consumo de un endpoint real del Mercado Público.

Una vez obtenida la data:

1.  Se guarda en el estado global del componente como `licitaciones`.

2.  Los filtros por **código**, **nombre**, **estado** y **fecha** se implementan con campos controlados (inputs y selects).

3.  Se renderiza una tabla interactiva que muestra los resultados filtrados, acompañados de etiquetas visuales (`badges`) que representan el estado de cada licitación.

Cada estado tiene un código (`5`, `6`, etc.) y se transforma en su nombre correspondiente ("Publicada", "Adjudicada", etc.), además de colorearse con clases de Bootstrap para mayor claridad visual.

###  Formulario de contacto

En `Contacto.jsx`, se despliega un formulario mediante el componente `ContactForm`. Este formulario está envuelto en un diseño visual elegante con animaciones suaves, botón de envío y un mail de contacto visible.

Aunque el backend para este formulario no está detallado, la estructura ya está preparada para capturar los datos del usuario y enviarlos a un endpoint o vía correo.

###  Página de inicio

El componente `Inicio.jsx` funciona como una **landing page** clara y orientada al usuario. Presenta:

-   Una introducción a la plataforma.

-   Tres beneficios clave en cards interactivas.

-   Una sección visual para destacar novedades y recursos externos.

Esta página se apoya fuertemente en **Bootstrap y Animate.css** para lograr una estética moderna, liviana y responsiva.
