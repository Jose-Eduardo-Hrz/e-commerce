import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load({ params, cookies }) {

    // await prisma.producto.createMany({
    //     data : [
    //         { nombre : "Bata" , inversion : 0 , precio : 15 , imagen : "https://www.uniformesamarillouno.com/escolares/wp-content/uploads/Bata_Laboratorio_486b995f49ad0.png" , idCategoria : 3 , idTransaccion : 2 },
    //         { nombre : "Calculadora " , inversion : 0 , precio : 15 , imagen : "https://images.squarespace-cdn.com/content/v1/58597a19e58c62ba7fa48bf9/1548264524690-ZOM6EPP0KRFUHGJ5X3QT/6.png" , idCategoria : 1 , idTransaccion : 2 },
    //     ]
    // })

}