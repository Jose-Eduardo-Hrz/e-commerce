
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load({ params }) {
    const { id } = params
    await prisma.producto.update({
        where : { id : Number.parseInt(id) }, data : { solicitados : { increment : 1 } }
    })
}