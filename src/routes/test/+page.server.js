import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load({ params, cookies }) {

    // await prisma.producto.createMany({
    //     data : [
    //         { nombre : "Paquete de Electronica" , inversion : 0 , precio : 0 , imagen : "https://m.media-amazon.com/images/I/71VtqtikOqL._AC_SY450_.jpg" , idCategoria : 4 , idTransaccion : 1 },
    //         { nombre : "Paquete de Papeleria" , inversion : 0 , precio : 0 , imagen : "https://cadtoner.com.mx/16584-large_default/paquete-escolar-c12-articulos.jpg" , idCategoria : 2 , idTransaccion : 1 },
    //         { nombre : "Paquete de Diseño" , inversion : 0 , precio : 0 , imagen : "https://m.media-amazon.com/images/I/81G8WzKf4JL._AC_SY450_.jpg" , idCategoria : 2 , idTransaccion : 1 },
    //     ]
    // })

    await prisma.visitaCategoria.deleteMany()
    await prisma.visitaGeneral.deleteMany()
    await prisma.vistaProducto.deleteMany()

    await prisma.fecha.deleteMany()

}