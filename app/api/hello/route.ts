import { NextResponse } from "next/server";
import {conn} from "../../../libs/mysql"

export  async function GET(req:Request){
    const data=await conn.query("SELECT * FROM product where documentId=?",["user_38yqZXBv25xnIb1nqFT0B3bQheK"])
    console.log(data)
return NextResponse.json(data)
}

export async function POST(req:Request){

    const reqBody=await req.json()
const crear=await conn.query("INSERT INTO product (name,documentId,description,price) VALUES (?,?,?,?)",[reqBody.name,reqBody.documentId,reqBody.description,reqBody.price])
return NextResponse.json({message:crear})
}