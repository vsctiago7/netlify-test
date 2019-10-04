import httpProxy from "http-proxy-middleware";

export default function(app) {
  app.use(
    httpProxy("/.netlify/functions", {
      target: "http://localhost:9000",
      "pathRewrite": {
        "^/\\.netlify/functions": ""
      }
    })
  );
}
