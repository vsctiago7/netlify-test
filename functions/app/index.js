import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import compression from "compression";

/* My express App */
export default function expressApp() {
  const app = express();
  const router = express.Router();

  // gzip responses
  router.use(compression());

  // Set router base path for local dev
  const routerBasePath =
    process.env.NODE_ENV === "dev"
      ? "/serverless"
      : "/.netlify/functions/serverless/";

  /* define routes */
  router.get("/", (req, res) => {
    res.send("This is the server.");
  });

  router.get("/users", (req, res) => {
    res.json({
      users: [
        {
          name: "steve"
        },
        {
          name: "joe"
        }
      ]
    });
  });

  router.get("/hello/", function(req, res) {
    res.send("hello world");
  });

  // Attach logger
  app.use(morgan("short"));

  // Setup routes
  app.use(routerBasePath, router);

  // Apply express middlewares
  router.use(cors());
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));

  return app;
}
