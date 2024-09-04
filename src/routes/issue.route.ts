import IssuesController from "../controllers/issues.controller";
import { Routes } from "@interfaces";
import { Router } from "express";

class IssueRoute implements Routes {
  public router = Router();
  public issueController = new IssuesController();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post("/create", this.issueController.createIssue);
    this.router.get("/get/:id", this.issueController.getIssue);
    this.router.put("/update", this.issueController.editIssue);
    this.router.delete("/delete/:id", this.issueController.deleteIssue);
  }
}

export default IssueRoute;
