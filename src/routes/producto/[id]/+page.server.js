
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load({ params }) {

    const { id } = params

    await prisma.producto.update({
        where : { id : Number.parseInt(id) }, data : { visitas : { increment : 1 } }
    })

    const producto = await prisma.producto.findUnique({
        where : { id : Number.parseInt(id) } , 
        select : { id : true , imagen : true , nombre : true , precio : true , categoria : { select : { nombre : true } } }
    })

    return {
        producto
    }
}