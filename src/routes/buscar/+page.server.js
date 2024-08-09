import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load({ params , url }) {
    let nombre = url.searchParams.get('nombre') || "";
    const productos = await prisma.producto.findMany({
        select : { id : true , imagen : true , nombre : true , precio : true , categoria : { select : { nombre : true } } },
        where : { nombre : { contains : nombre } }
    })
    return {
        productos
    }
}