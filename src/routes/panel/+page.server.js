import { redirect } from '@sveltejs/kit';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function load() {

    const productos = await prisma.producto.findMany({
        select : { id : true , nombre : true , precio : true , categoria : { select : { nombre : true } } }
    })

    return {
        productos
    }

}

/** @type {import('./$types').Actions} */
export const actions = {

	eliminar: async ( { request } ) => {
		const data = await request.formData();
		const id = data.get('id');
        console.log( id );
        return redirect(302, '/panel')
	}
};