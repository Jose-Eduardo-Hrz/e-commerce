import { redirect } from '@sveltejs/kit';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load({ params , url ,cookies }) {
    let nombre = url.searchParams.get('nombre') || "";
    if ( !nombre || nombre.length == 0) return redirect(302, '/')
    if( !cookies.get( "visita" ) ){
        cookies.set( "visita" , "true" , { path : "/" } )
        const fecha = await prisma.fecha.upsert({
            where : { fecha : (new Date).toLocaleDateString() } ,
            update : {},
            create : { fecha : (new Date).toLocaleDateString() }
        })
        await prisma.visitaGeneral.upsert({
            where : { idFecha : fecha.id } ,
            update : { vistas : { increment : 1 } },
            create : { idFecha : fecha.id }
        })
    }
    const productos = await prisma.producto.findMany({
        select : { id : true , imagen : true , nombre : true , precio : true , categoria : { select : { nombre : true } } },
        where : { nombre : { contains : nombre } }
    })
    return {
        productos
    }
}