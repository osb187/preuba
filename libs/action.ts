"use server"

import { redirect } from "next/navigation"
import { conn } from "./mysql"

export async function crearProducto(data:FormData) :Promise<void>{
    const name=data.get("nombre")
    const documentId=data.get("document")
    const description=data.get("descripcion")
    const price=Number(data.get("precio"))
    const crear=await conn.query("INSERT INTO product (name,documentId,description,price) VALUES (?,?,?,?)",[name,documentId,description,price])
  redirect("/mensajes")
  

}