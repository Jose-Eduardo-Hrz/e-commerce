<script>
    export let id
    export let imagen
    export let nombre
    export let precio
    export let categoria
</script>

<a class="columna Efecto_Vertical" href="/producto/{id}" data-sveltekit-preload-data="tap">
    <div class="sec-img">
        <img src={imagen} alt="" class="img" />
    </div>
    <div class="sec-dec">
        <div>
            <span>{nombre}</span> <span>$  {Number.parseFloat(precio).toPrecision(3)}</span>
        </div>
        <div>{categoria.nombre}</div>
    </div>
</a>

<style>
    a {
        text-decoration: none;
    }

    .columna {
        flex-basis: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        color: black;
        font-size: 20px;
    }

    .sec-img {
        background-color: var(--bg-color);
        padding: 60px;
        box-sizing: border-box;
    }

    .sec-dec {
        width: 100%;
    }

    .sec-dec > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
    }

    .sec-dec > div:nth-of-type(1) > span:nth-of-type(1) {
        font-weight: 600;
    }

    .sec-dec > div:nth-of-type(2) {
        color: rgb(119, 119, 119);
    }

    .img {
        width: 200px;
        height: 200px;

    }

</style>
