"use client"
import { crearProducto } from "@/libs/action"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"

export default function DashbordPage(){
const datos= useUser()
console.log(datos)
    return(<div>Dashbord Page
<Link href={"/mensajes"}>Ir a mensajes</Link>
        <p>{datos.user?.fullName}</p>

        <form action={crearProducto}>

<label htmlFor="nombre" >nombre</label>

<input type="text" name="nombre"  defaultValue={datos.user?.firstName as string} />



<input type="hidden" name="document" defaultValue={datos.user?.id} />

<label htmlFor="precio">precio</label>

<input type="number" name="precio" />

<input type="text" name="descripcion" id="" />
<input type="submit" value="enviar" />

        </form>
    </div>      )
}