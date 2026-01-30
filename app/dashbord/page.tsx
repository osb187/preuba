"use client"
import { useUser } from "@clerk/nextjs"

export default function DashbordPage(){
const datos= useUser()
console.log(datos)
    return(<div>Dashbord Page

        <p>{datos.user?.fullName}</p>
    </div>      )
}