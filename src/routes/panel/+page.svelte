
<script>
    import Descripcion from "../../components/Descripcion.svelte";
    export let data
    
</script>

<div class="container contenido p-5">
    {#if data.productos.length > 0}
        {#each data.productos as producto}
            <Descripcion {...producto} />
        {/each}
    {:else}
        <h1>No hay productos para mostrar</h1>
    {/if}
</div>

<style>
    .contenido {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
    }
</style>