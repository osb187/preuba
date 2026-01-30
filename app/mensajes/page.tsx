

import { auth } from "@clerk/nextjs/server"
import List from "../components/List"
export default async function MensajesPage(){
const documentId=await auth()
console.log(documentId)
// const identificador=documentId.user?.id as string

return(

<>
<List id={documentId.userId as string} />
</>
)


}