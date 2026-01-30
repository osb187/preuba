import { conn } from "@/libs/mysql"
type Respuesta={
    id:number,
    name:string,
    documentId:string,
    description:string,
    price:string,
    createdAt:string
}

export default async function List({id}:{id:string}){
  const data=await conn.query("SELECT * FROM product where documentId=?",[id]) as Respuesta[]
    console.log(data)


    return(<>
        <h2>lista</h2>
        {data.map((el)=>{

            return(<li key={el.id}>{el.description} y el precio es {el.price}</li>)
        })}
        
        </>)

}