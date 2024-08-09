<script>
    import Tarjeta from "../../components/Tarjeta.svelte";
    export let data
</script>

<div class="container contenido p-5">

    {#each data.productos as producto }
        <Tarjeta {...producto} />
    {/each}

</div>

<style>
    .contenido {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
    }
</style>
