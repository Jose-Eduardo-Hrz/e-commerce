
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load() {
    const productos = await prisma.producto.findMany({
        select : { id : true , imagen : true , nombre : true , precio : true , categoria : { select : { nombre : true } } }
    })
    return { productos }
}