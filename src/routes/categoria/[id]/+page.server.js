
import { redirect } from '@sveltejs/kit';
import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export async function load({ params, cookies }) {
    try {
        const { id } = params
        const categoria = await prisma.categoria.findUnique({
            where: { id: Number.parseInt(id) }, select: { id: true, nombre: true }
        })
        if (!categoria?.id && !categoria?.nombre) return redirect(302, '/')
        const fecha = await prisma.fecha.upsert({
            where : { fecha : (new Date).toLocaleDateString() } ,
            update : {},
            create : { fecha : (new Date).toLocaleDateString() }
        })
        if( !cookies.get( "visita" ) ){
            cookies.set( "visita" , "true" , { path : "/" } )
            await prisma.visitaGeneral.upsert({
                where : { idFecha : fecha.id } ,
                update : { vistas : { increment : 1 } },
                create : { idFecha : fecha.id }
            })
        }
        let visitaCategoria = await prisma.visitaCategoria.findFirst({
            where : { idCategoria : categoria.id , idFecha : fecha.id }
        })
        if( !visitaCategoria ){
            visitaCategoria = await prisma.visitaCategoria.create({
                data : { idCategoria : categoria.id , idFecha : fecha.id }
            })
        }
        let categorias = JSON.parse(cookies.get("categorias") || "[]")
        if (!categorias) {
            cookies.set("categorias", JSON.stringify(categorias), { path: "/" })
        }
        if (!categorias.includes(categoria.id)) {
            categorias.push(categoria.id);
            cookies.set( "categorias" , JSON.stringify(categorias) , { path : "/" } )
            await prisma.visitaCategoria.update({
                where : { id : visitaCategoria.id } , data : { vistas : { increment : 1 } }
            })
        }
        const productos = await prisma.producto.findMany({
            select: { id: true, imagen: true, nombre: true, precio: true, categoria: { select: { nombre: true } } },
            where: { idCategoria: categoria.id }
        })
        return {
            productos , categoria
        }
    } catch (error) {
        console.log( error );
        
        return {
            productos : [],
        }
    }
}