<script>
    export let id
    export let nombre
    export let precio
    export let categoria
</script>

<form class="Descripcion" action="?/eliminar" method="post">
    <div class="nombre">{nombre}</div>
    <div class="precio">{precio}</div>
    <div class="categoria">{categoria?.nombre}</div>
    <input type="text" value="{id}" name="id" hidden>
    <a href="/panel/modificar/{id}">Editar</a>
    <button type="submit">Eliminar</button>
</form>

<style>
    .Descripcion {
        flex-basis: 200px;
        height: 200px;
        padding: 5px;
    }
</style>