<script>
    export let data;
    export let form;
</script>

<div class="container contenido p-5">
    {#if form?.success}
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        Se actualizo correctamente!
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
        ></button>
    </div>
    {/if}

    <form action="?/actualizar" method="post">
        <div>
            <label for="id">Id del producto</label>
            <input
                type="text"
                name="id"
                id="id"
                value={data.producto.id}
                hidden
            />
        </div>
        <div>
            <label for="id">nombre</label>
            <input
                type="text"
                name="nombre"
                id="nombre"
                value={data.producto.nombre}
            />
        </div>
        <div>
            <label for="id">precio</label>
            <input
                type="text"
                name="precio"
                id="precio"
                value={data.producto.precio}
            />
        </div>
        <div>
            <label for="id">inversion</label>
            <input
                type="text"
                name="inversion"
                id="inversion"
                value={data.producto.inversion}
            />
        </div>
        <div>
            <label for="id">imagen</label>
            <input
                type="text"
                name="imagen"
                id="imagen"
                value={data.producto.imagen}
            />
        </div>
        <div>
            <label for="id">idCategoria</label>
            <input
                type="text"
                name="idCategoria"
                id="idCategoria"
                value={data.producto.idCategoria}
            />
        </div>
        <div>
            <label for="id">idTransaccion</label>
            <input
                type="text"
                name="idTransaccion"
                id="idTransaccion"
                value={data.producto.idTransaccion}
            />
        </div>
        <button type="submit">actualizar</button>
        <a href="/panel">regresar</a>
    </form>
</div>
