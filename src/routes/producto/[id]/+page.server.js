import { redirect } from '@sveltejs/kit';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load({ params, cookies }) {
    const { id } = params
    const producto = await prisma.producto.findUnique({
        where: { id: Number.parseInt(id) },
        select: {
            id: true, imagen: true, nombre: true, precio: true, categoria: { select: { nombre: true } }, idTransaccion: true
        }})
    if (!producto) return redirect(302, '/')
    const fecha = await prisma.fecha.upsert({
        where: { fecha: (new Date).toLocaleDateString() },
        update: {},
        create: { fecha: (new Date).toLocaleDateString() }
    })
    if (!cookies.get("visita")) {
        cookies.set("visita", "true", { path: "/" })
        await prisma.visitaGeneral.upsert({
            where: { idFecha: fecha.id },
            update: { vistas: { increment: 1 } },
            create: { idFecha: fecha.id }
        })
    }
    let productos = JSON.parse(cookies.get("visitaProductos") || "[]")
    let visitaProductos = await prisma.vistaProducto.findFirst({
        where: { idProducto: producto.id, idFecha: fecha.id }
    })
    if (!visitaProductos) {
        visitaProductos = await prisma.vistaProducto.create({
            data: { idProducto: producto.id, idFecha: fecha.id }
        })
    }
    if (!productos) {
        cookies.set("visitaProductos", JSON.stringify(productos), { path: "/" })
    }
    if (!productos.includes(producto.id)) {
        productos.push(producto.id);
        cookies.set("visitaProductos", JSON.stringify(productos), { path: "/" })
        await prisma.vistaProducto.update({
            where: { id: visitaProductos.id },
            data: { vistas: { increment: 1 } }
        })
    }

    return {
        producto
    }
}