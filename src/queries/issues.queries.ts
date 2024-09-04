import { IssueFormat, IssueFormatDetail } from "@/interfaces";

export const createIssueQuery = (issueData: IssueFormat): string => {
  const query = `
    INSERT INTO sitemate_issues_table (title, description)
    VALUES ('${issueData.title}', '${issueData.description}')
    `;
  return query;
};

export const fetchIssueQuery = (id: number): string => {
  const query = `
    SELECT * FROM sitemate_issues_table 
    WHERE id = ${id}
    `;
  return query;
};

export const editIssueQuery = (issueDetails: IssueFormatDetail): string => {
  const query = `
    UPDATE sitemate_issues_table 
    SET title = '${issueDetails.title}', description = '${issueDetails.description}'
    WHERE id = ${issueDetails.id}
    `;
  console.log(query);
  return query;
};

export const deleteIssueQuery = (id: number): string => {
  const query = `
    DELETE FROM sitemate_issues_table
    WHERE id = ${id}
    `;
  return query;
};
