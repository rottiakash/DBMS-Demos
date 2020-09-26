import * as express from "express";
import * as mysql from "mysql";
import * as cors from "cors";
const app = express();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "demo",
  database: "Demo",
});
app.use(cors());
app.get("/getStudents", (req, res) => {
  con.query("SELECT * FROM Students", (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(8080, () => {
  console.log("Server is running");
});
