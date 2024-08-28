import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load() {

    const vistaCategoria = await prisma.visitaCategoria.findMany({
        select : {
            id : true, 
            fecha : {
                select : { fecha : true }
            },
            vistas : true,
            categoria : {
                select : { nombre : true }
            }
        },
        orderBy : [
            { fecha : { fecha : "asc" } }
        ]
    })

    const totalVistaCategoria = await prisma.visitaCategoria.aggregate({
        _sum : {
            vistas : true
        }
    })

    const visitaGeneral = await prisma.visitaGeneral.findMany({
        select : {
            id : true,
            fecha : {
                select : { fecha : true }
            },
            vistas : true
        },
        orderBy : [
            { fecha : { fecha : "asc" } }
        ]
    })

    const totalVisitaGeneral = await prisma.visitaGeneral.aggregate({
        _sum : {
            vistas : true
        }
    })

    const vistaProducto = await prisma.vistaProducto.findMany({
        select : {
            id : true,
            fecha : { select : { fecha : true } },
            producto : { select : { nombre : true } },
            solicitados : true,
            vistas : true
        },
        orderBy : [
            { fecha : { fecha : "asc" } }
        ]
    })

    return {
        vistaCategoria , visitaGeneral , vistaProducto , totalVistaCategoria, totalVisitaGeneral
    }

}