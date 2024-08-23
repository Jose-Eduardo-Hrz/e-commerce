<script>
    import Carrusel from "../components/Carrusel.svelte";
    import ContenedorInformacion from "../components/ContenedorInformacion.svelte";
    import carrito from "../public/principal/carrito.png";
    import { data as informacion , redes } from "./data";
</script>

<svelte:head>
    <title>Speencil</title>
</svelte:head>

<Carrusel />

<div class="contenedor-slogan contenedor_adaptable">
    <div>
        <p style="padding: 15px;">Todo lo que necesitas con la velocidad que lo necesitas</p>
    </div>
    <div>
        <img src={carrito} alt="" width="300px" style="padding: 10px;" />
    </div>
</div>

<ContenedorInformacion {...informacion[0]} />
<ContenedorInformacion {...informacion[1]} />

<div class="red-sociales">
    <h3>Redes Sociales</h3>
    <div class="contenedor-redes">
        {#each redes as red }
            <img src="{red}" alt="" width="50px">
        {/each}
    </div>
</div>

<style>
    .contenedor-slogan {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 120px 0px;
        color: #555;
        gap: 15px;
    }

    .contenedor-slogan > div:nth-of-type(1) {
        font-family: "Merriweather", serif;
        font-weight: 400;
        font-size: 30px;
        flex-basis: 350px;
    }
    .red-sociales {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        padding: 40px 0px;
    }
    .contenedor-redes {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
</style>
