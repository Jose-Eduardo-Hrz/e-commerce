
import { redirect } from '@sveltejs/kit';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load({ params }) {
    const { id } = params
    const categoria = await prisma.categoria.findUnique({
        where : { id : Number.parseInt(id) } , select : { id : true , nombre : true }
    })
    if( !categoria?.id && !categoria?.nombre ) return redirect( 302 , '/' )  
    await prisma.pagina.update({
        where : { id : categoria.id }, data : { visitas : { increment : 1 } }
    })
    const productos = await prisma.producto.findMany({
        select : { id : true , imagen : true , nombre : true , precio : true , categoria : { select : { nombre : true } } },
        where : { categoriaId : categoria.id }
    })
    return {
        productos
    }
}