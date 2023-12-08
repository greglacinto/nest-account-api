// import oracledb from "oracledb";
const oracledb = require('oracledb');

export async function connection() {
    await oracledb.createPool({
      user: process.env.USER,
      password: process.env.PASS,
      connectString: process.env.CONN_STR
    });

  console.log('Connection pool started');
}
