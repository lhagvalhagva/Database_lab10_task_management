// db.mjs

import mysql from "mysql";

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "lhagva1592",
  database: "db_lab_10",
};

function query(sql, args) {
  const connection = mysql.createConnection(dbConfig);

  return new Promise((resolve, reject) => {
    connection.query(sql, args, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      connection.end();
      resolve(results);
    });
  });
}

export { query };
