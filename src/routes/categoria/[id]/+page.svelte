<script>
    import Tarjeta from "../../../components/Tarjeta.svelte";
    export let data
    console.log( data.categoria );
    
</script>

<svelte:head>
	<title>{data.categoria?.nombre}</title>
</svelte:head>

<div class="container contenido p-5">
    {#if data.productos.length > 0}
        {#each data.productos as producto}
            <Tarjeta {...producto} />
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
