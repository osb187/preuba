import mysql from "serverless-mysql"
export const conn=mysql({
    config:{
        host:process.env.NEXT_HOST,
        user:process.env.NEXT_U,
        password:process.env.NEXT_PASS,
        port:Number(process.env.NEXT_PO),
        database:process.env.NEXT_DB
    }
})