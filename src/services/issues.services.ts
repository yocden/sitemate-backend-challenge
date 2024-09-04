import { IssueFormat, IssueFormatDetail } from "@/interfaces";
import { IssueModel } from "../models/issues.model";
export class IssuesServices {
  public issueModel = new IssueModel();

  public createNewIssue = async (issue: IssueFormat): Promise<number> => {
    const newFacility = await this.issueModel.createIssue(issue);
    return newFacility;
  };

  public getIssue = async (id: number): Promise<IssueFormatDetail> => {
    const issueDetails = await this.issueModel.fetchIssue(id);
    return issueDetails;
  };

  public editIssue = async (
    issueDetails: IssueFormatDetail
  ): Promise<number> => {
    const updatedIssue = await this.issueModel.updateIssue(issueDetails);
    return updatedIssue;
  };

  public deleteIssue = async (id: number): Promise<number> => {

    const deleteIssue = await this.issueModel.deleteIssue(id);
    return deleteIssue;
  };
}
