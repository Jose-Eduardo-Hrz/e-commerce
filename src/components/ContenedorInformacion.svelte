<script>
    export let titulo;
    export let parrafos
    export let imagen;
    export let tamImagen = "470px"
    export let colorFondo = "none";
    export let colorTexto = "--color-texto-negro";
</script>

<section
    class="ContenedorInformacion Efecto_Horizontal"
    style="--color-fondo: var({colorFondo}); --color-texto: var({colorTexto}); --tam-imagen: {tamImagen}"
>
    <section class="contenedor_adaptable">
        <section>
            <h3>{titulo}</h3>
            {#if parrafos.length > 0}
                {#each parrafos as parrafo}
                    <p>{parrafo}</p>
                {/each}
            {/if}
        </section>
        <section>
            <img
                src={imagen}
                alt={titulo}
                width="100%"
                height="100%"
            />
        </section>
    </section>
</section>

<style>
    .ContenedorInformacion {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px 0px;
        background-color: var(--color-fondo);
    }

    .ContenedorInformacion > section {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: center;
        align-items: center;
    }

    .ContenedorInformacion > section > section:nth-of-type(1) {
        width: 550px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .ContenedorInformacion > section > section:nth-of-type(1) > h3 {
        font-size: 35px;
        color: var(--color-texto);
    }

    .ContenedorInformacion > section > section:nth-of-type(1) > p {
        text-align: justify;
        color: var(--color-texto);
    }

    .ContenedorInformacion > section > section:nth-of-type(2) {
        width: var(--tam-imagen);
    }
</style>
