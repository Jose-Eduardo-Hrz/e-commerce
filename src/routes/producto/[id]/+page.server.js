
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load({ params }) {

    const { id } = params

    const producto = await prisma.producto.findUnique({
        where : { id : Number.parseInt(id) } , 
        select : { id : true , imagen : true , nombre : true , precio : true , categoria : { select : { nombre : true } } }
    })
    

    return {
        producto
    }
}