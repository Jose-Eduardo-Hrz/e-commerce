
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load() {

    // await prisma.producto.create({
    //     data : {
    //         nombre : "Tijeras",
    //         precio : 15.23,
    //         categoriaId : 2,
    //         imagen : "https://media.victorinox.com/transform/b801bff3-f033-4590-ab30-87e0eaae3674/CUT_7_6363_3__S1-tif?io=transform%3Afit%2Cwidth%3A500%2Cheight%3A370&quality=80"
    //     }
    // })

    // await prisma.pagina.create({
    //     data : {
    //         nombre : "Accesorios",
    //         categoriaId : 3,
    //     }
    // })

    return  {

    }

}