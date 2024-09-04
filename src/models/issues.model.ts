import { IssueFormat, IssueFormatDetail } from "@/interfaces";
import db from "../databases/database";
import {
  createIssueQuery,
  deleteIssueQuery,
  editIssueQuery,
  fetchIssueQuery,
} from "../queries/issues.queries";

export class IssueModel {
  public createIssue = async (issueData: IssueFormat) => {
    const sqlConnect = await db.pool;
    const issueQuery = createIssueQuery(issueData);
    const resultQueryIssue = await db.request.query(issueQuery);
    sqlConnect.transaction();

    return resultQueryIssue.rowsAffected[0];
  };

  public fetchIssue = async (id: number) => {
    const sqlConnect = await db.pool;
    const issueQuery = fetchIssueQuery(id);
    const resultQueryIssue = await db.request.query(issueQuery);
    sqlConnect.transaction();

    return resultQueryIssue.recordset[0];
  };

  public updateIssue = async (
    issueDetails: IssueFormatDetail
  ): Promise<number> => {
    const sqlConnect = await db.pool;
    const issueQuery = editIssueQuery(issueDetails);
    const resultQueryIssue = await db.request.query(issueQuery);
    sqlConnect.transaction();

    return resultQueryIssue.rowsAffected[0];
  };

  public deleteIssue = async (id: number): Promise<number> => {
    const sqlConnect = await db.pool;
    const issueQuery = deleteIssueQuery(id);
    const resultQueryIssue = await db.request.query(issueQuery);
    sqlConnect.transaction();

    return resultQueryIssue.rowsAffected[0];
  };
}
