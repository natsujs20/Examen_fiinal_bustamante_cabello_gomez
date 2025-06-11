const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.mercadopublico.cl", // Cambia esto por la URL real de la API
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};