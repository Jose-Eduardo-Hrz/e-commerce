import { redirect } from '@sveltejs/kit';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load({ params }) {

    const { id } = params

    const producto = await prisma.producto.findUnique({
        where: { id: Number.parseInt(id) },
        select: { id: true, imagen: true, nombre: true, precio: true, idCategoria: true ,inversion : true , idTransaccion : true } 
    })
    if (!producto) return redirect(302, '/panel')

    return {
        producto
    }

}

/** @type {import('./$types').Actions} */
export const actions = {

	actualizar: async ( { request } ) => {
		const data = await request.formData();
		const id = data.get('id');
		const imagen = data.get('imagen');
		const nombre = data.get('nombre');
		const precio = data.get('precio');
		const idCategoria = data.get('idCategoria');
		const inversion = data.get('inversion');
		const idTransaccion = data.get('idTransaccion');
        return { success: true };
	}
};