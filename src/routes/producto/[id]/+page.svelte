<script>
    export let data;

    console.log( data.producto?.precio );
    
</script>

<div class="container contenido p-5">
    <div class="sec-img">
        <img src={data.producto?.imagen} alt="" class="img" />
    </div>
    <div class="sec-dec">
        <div class="nombre">
            <span>{data.producto?.nombre}</span>
        </div>
        <div class="precio">
            <span>$ { data.producto?.precio.toPrecision(3) }</span>
        </div>
        <div>
            <a href="/comprar/{data.producto?.id}" class="btn-com">Comprar Producto</a>
        </div>
    </div>
</div>

<style>
    .contenido {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .sec-img {
        flex-basis: 600px;
        height: 600px;
        background-color: var(--bg-color);
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img {
        object-fit: contain;
        width: 500px;
        height: 500px;
    }

    .sec-dec {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    .nombre {
        font-size: 35px;
        font-weight: 600;
    }
    .precio {
        font-size: 25px;
    }
    .btn-com {
        display: block;
        border-radius: 5px;
        background-color: #5f5f5f;
        padding: 15px;
        color: aliceblue;
        font-weight: 600;
        text-decoration: none;
    }
</style>
