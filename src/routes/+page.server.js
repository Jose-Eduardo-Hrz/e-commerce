
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load() {
    try {
        await prisma.pagina.update({
            where : { id : 4 }, data : { visitas : { increment : 1 } }
        })
        const productos = await prisma.producto.findMany({
            select : { id : true , imagen : true , nombre : true , precio : true , categoria : { select : { nombre : true } } }
        })
        return {
            productos
        }
    } catch (error) {
        return { productos : [] }
    }
}