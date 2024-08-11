<script>
    export let data;
</script>

<div class="container contenido p-5">

    <div>
        <h2>Visitas en Categorias</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Visitas</th>
                    <th scope="col">Categoria</th>
                </tr>
            </thead>
            <tbody>
                {#each data.vistaCategoria as { id, fecha, vistas, categoria }}
                    <tr>
                        <td>{id}</td>
                        <td>{fecha.fecha}</td>
                        <td>{vistas}</td>
                        <td>{categoria.nombre}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <p>Visitas totales: {data.totalVistaCategoria._sum.vistas}</p>
    </div>

    <div>
        <h2>Visitas en Sitio Web</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Visitas</th>
                </tr>
            </thead>
            <tbody>
                {#each data.visitaGeneral as { id, fecha, vistas }}
                    <tr>
                        <td>{id}</td>
                        <td>{fecha.fecha}</td>
                        <td>{vistas}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <p>Visitas totales: {data.totalVisitaGeneral._sum.vistas}</p>
    </div>

    <div>
        <h2>Visitas de Productos</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Solicitados</th>
                    <th scope="col">Visitas</th>
                </tr>
            </thead>
            <tbody>
                {#each data.vistaProducto as { id, fecha, producto , vistas, solicitados }}
                    <tr>
                        <td>{id}</td>
                        <td>{fecha.fecha}</td>
                        <td>{producto.nombre}</td>
                        <td>{vistas}</td>
                        <td>{solicitados}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

</div>
