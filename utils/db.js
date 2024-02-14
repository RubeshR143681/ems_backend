import mysql from "mysql";

const con = mysql.createConnection({
  host: "bj4shloa1ymhzbugzrwz-mysql.services.clever-cloud.com",
  user: "uu65nojj3g3zghte",
  password: "ktqAkNtjWkaPo14XqWl7",
  database: "bj4shloa1ymhzbugzrwz",
  port: "3306",
});

con.connect(function (err) {
  if (err) {
    console.log("connection error");
  } else {
    console.log("Connected");
  }
});

export default con;
