import App from "./app";
import IssueRoute from "./routes/issue.route";

const app = new App([ new IssueRoute()]);

app.listen();
