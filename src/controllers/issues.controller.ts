import { IssueFormat, IssueFormatDetail } from "@/interfaces";
import { IssuesServices } from "../services/issues.services";

import { RequestHandler } from "express";
import { isUndefined } from "util";

class IssuesController {
  public issueService = new IssuesServices();
  public createIssue: RequestHandler = async (
    req,
    res,
    next
  ): Promise<void> => {
    try {
      const issueDetails: IssueFormat = req.body;

      const newIssue = await this.issueService.createNewIssue(issueDetails);
      res
        .status(200)
        .json({ data: `${newIssue} issue added`, message: "successful" });
    } catch (error) {
      next(error);
    }
  };

  public getIssue: RequestHandler = async (req, res, next): Promise<void> => {
    try {
      const issueId: number = parseInt(req.params.id);

      const issueData = await this.issueService.getIssue(issueId);
      res.status(200).json(issueData);
    } catch (error) {
      next(error);
    }
  };

  public editIssue: RequestHandler = async (req, res, next): Promise<void> => {
    try {
      const issueDetails: IssueFormatDetail = req.body;
      const issueEdit = await this.issueService.editIssue(issueDetails);
      if (issueEdit === 1) {
        res.status(200).json({
          data: `edited issue details id = ${issueDetails.id}`,
          message: "successful",
        });
      }
    } catch (error) {
      next(error);
    }
  };

  public deleteIssue: RequestHandler = async (
    req,
    res,
    next
  ): Promise<void> => {
    try {
      const issueId: number = parseInt(req.params.id);
      const issueDelete = await this.issueService.deleteIssue(issueId);
      if (issueDelete === 1) {
        res
          .status(200)
          .json({ data: `issue id = ${issueId} deleted`, message: "success" });
      }
    } catch (error) {
      next(error);
    }
  };
}

export default IssuesController;
