const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  let paymentUrl = "https://connect.squareupsandbox.com/v2";

  app.use(
    "/payments",
    createProxyMiddleware({
      target: paymentUrl,
      changeOrigin: true,
    })
  );
};
