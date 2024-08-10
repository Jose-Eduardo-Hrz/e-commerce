
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load() {

    // await prisma.producto.createMany({
    //     data : [
    //         {
    //             nombre: "Lapiz",
    //             idCategoria: 2,
    //             inversion: 3.875,
    //             precio: 6,
    //             imagen: "https://img.xentra.com.mx/xentra_abao/img/productos/3154148517214eb7d80db0413d912b744e68a170dfd40842x842.webp"
    //         },
    //         {
    //             nombre: "Goma",
    //             idCategoria: 2,
    //             inversion: 2.5425,
    //             precio: 4,
    //             imagen: "https://m.media-amazon.com/images/I/51-XYmpldGL.jpg"
    //         },
    //         {
    //             nombre: "Sacapuntas",
    //             idCategoria: 2,
    //             inversion: 1.78125,
    //             precio: 3,
    //             imagen: "https://m.media-amazon.com/images/I/51DZqzjLiEL._AC_UF350,350_QL80_.jpg"
    //         },
    //         {
    //             nombre: "Folder",
    //             idCategoria: 2,
    //             inversion: 3.92,
    //             precio: 5.88,
    //             imagen: "https://i0.wp.com/online.sanfelipeescolar.com.mx/wp-content/uploads/2023/03/22691-Webp.webp?resize=500%2C500&ssl=1"
    //         },
    //         {
    //             nombre: "Plumones",
    //             idCategoria: 2,
    //             inversion: 102,
    //             precio: 153,
    //             imagen: "https://i0.wp.com/online.sanfelipeescolar.com.mx/wp-content/uploads/2024/01/28428-Webp.webp?resize=500%2C500&ssl=1"
    //         },
    //         {
    //             nombre: "Cuadernos",
    //             idCategoria: 2,
    //             inversion: 23.85,
    //             precio: 35.775,
    //             imagen: "https://i0.wp.com/online.sanfelipeescolar.com.mx/wp-content/uploads/2023/06/28134B-Webp.webp?resize=500%2C500&ssl=1"
    //         },
    //         {
    //             nombre: "Marcatextos",
    //             idCategoria: 2,
    //             inversion: 23.68,
    //             precio: 33.152,
    //             imagen: "https://i0.wp.com/online.sanfelipeescolar.com.mx/wp-content/uploads/2020/10/26344PILI.1.jpg?resize=500%2C500&ssl=1"
    //         },
    //         {
    //             nombre: "Plumones de pizarron",
    //             idCategoria: 2,
    //             inversion: 79,
    //             precio: 118.5,
    //             imagen: "https://m.media-amazon.com/images/I/61141Hfs2yL._AC_SY355_.jpg"
    //         },
    //         {
    //             nombre: "plumon para pizarron suelto",
    //             idCategoria: 2,
    //             inversion: 22,
    //             precio: 33,
    //             imagen: "https://marchante.mx/cdn/shop/files/D_NQ_NP_2X_619809-MLM47388038634_092021-F.webp?v=1690496607&width=1200"
    //         },
    //         {
    //             nombre: "LED rojo 5mm",
    //             idCategoria: 1,
    //             inversion: 2,
    //             precio: 3,
    //             imagen: "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/1709082e0/led-de-5-mm-color-rojo-claro.jpg"
    //         },
    //         {
    //             nombre: "LED verde claro 5mm",
    //             idCategoria: 1,
    //             inversion: 2,
    //             precio: 3,
    //             imagen: "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/1709385e5/led-de-5-mm-color-verde-claro.jpg"
    //         },
    //         {
    //             nombre: "LED ultrabrillante blanco 5mm",
    //             idCategoria: 1,
    //             inversion: 4,
    //             precio: 6,
    //             imagen: "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/21727d188/led-de-5-mm-ultrabrillante-blanco.jpg"
    //         },
    //         {
    //             nombre: "Resistencias",
    //             idCategoria: 1,
    //             inversion: 1,
    //             precio: 1.5,
    //             imagen: "https://cursos.mcielectronics.cl/wp-content/uploads/2014/09/image0012.png"
    //         },
    //         {
    //             nombre: "Capacitores",
    //             idCategoria: 1,
    //             inversion: 3,
    //             precio: 4.5,
    //             imagen: "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/17034eb2a/capacitor-electrolitico-radial-de-100-uf-micro-faradios-a-25-volts.jpg"
    //         },
    //         {
    //             nombre: "Protoboard",
    //             idCategoria: 1,
    //             inversion: 46.4,
    //             precio: 69.6,
    //             imagen: "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/223336fd1/mini-protoboard-de-ensamble-a-presion-1-bloque-y-2-tiras.jpg"
    //         },
    //         {
    //             nombre: "Cables",
    //             idCategoria: 1,
    //             inversion: 1.41,
    //             precio: 2.1,
    //             imagen: "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/19453a19e/juego-de-80-cables-de-15-cm-tipo-dupont.jpg"
    //         },
    //         {
    //             nombre: "Plumas",
    //             idCategoria: 2,
    //             inversion: 4.475,
    //             precio: 7,
    //             imagen: "https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwb9ec83ef/images/product/7501428727171_B.jpg?sw=445&sh=445&sm=fit"
    //         },
    //         {
    //             nombre: "Hojas blancas",
    //             idCategoria: 2,
    //             inversion: 0.378,
    //             precio: 1,
    //             imagen: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00697154715851L2.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    //         },
    //         {
    //             nombre: "Hojas de color",
    //             idCategoria: 2,
    //             inversion: 1.39,
    //             precio: 2,
    //             imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRJ4B9FJAVBvhTkp83qtdkLh2pQYTarqzVJYql2wp1IacoYMiMzp4j23DC5trNJ6p3Z7zhRsA5J-gzErxAh40AmmfQK4Vo1y4BUWDpVNDLTyyHSOdDQJ_kgPpW2LUEXOVjKPl_Mlz3_zfE&usqp=CAc"
    //         },
    //         {
    //             nombre: "Botones",
    //             idCategoria: 1,
    //             inversion: 4.00,
    //             precio: 6,
    //             imagen: "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/16167a140/micro-switch-de-push-con-4-terminales.jpg"
    //         },
    //         {
    //             nombre: "Fotoresistencia de 2 Mohms",
    //             idCategoria: 1,
    //             inversion: 8,
    //             precio: 12,
    //             imagen: "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/16041f1f9/fotoresistencia-de-2-mohms-100-vca.jpg"
    //         },
    //         {
    //             nombre: "Display de 7 segmentos",
    //             idCategoria: 1,
    //             inversion: 9,
    //             precio: 13.5,
    //             imagen: "https://www.steren.com.mx/media/catalog/product/cache/bb0cad18a6adb5d17b0efd58f4201a2f/image/1700112da/display-de-7-segmentos-catado-comun-de-12-7-mm-0-5-pulgadas.jpg"
    //         }
    //     ]
    // })


    return  {

    }

}