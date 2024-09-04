import cors from "cors";
import express from "express";
import { Routes } from "@interfaces";
import { NODE_ENV, PORT, ORIGIN } from "./_config";

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = PORT || 3000;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
      console.log("Connected at dbase...");
      console.log(`Server location: ${process.env.DB_SERVER}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(cors({ origin: ORIGIN }));
    this.app.use(express.urlencoded({ extended: true })); //xxx-url-encoded
    this.app.use(express.json()); //json
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use(`/api/sitemate`, route.router);
    });
  }

}

export default App;
