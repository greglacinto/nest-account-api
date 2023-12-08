import { NotFoundException } from "@nestjs/common";

const oracledb = require('oracledb');

const executeSQL = async (statement: any, binds: any) => {
    try {
        const conn = await oracledb.getConnection();
        conn.callTimeout = 5 * 1000 //Reduced the timeout to 10 seconds
        const result = await conn.execute(statement, binds);
        await conn.close();
        return result
    } catch (error) {
        console.error("Got an error during OracleDb connection: ", error);
        throw new NotFoundException(error.message) 
    } 
}

export default executeSQL