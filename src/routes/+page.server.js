
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load({ cookies }) {
    
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
    
    return {  }
}