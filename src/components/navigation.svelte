<script>
  import logo from "../public/logo.png"
  
</script>

<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src={logo} alt="Logo" width="130">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/" data-sveltekit-preload-data="tap">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/categoria/1" data-sveltekit-preload-data="tap">Electronica</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/categoria/2" data-sveltekit-preload-data="tap">Papeleria</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/categoria/3" data-sveltekit-preload-data="tap">Laboratorio</a>
          </li>          
          <li class="nav-item">
            <a class="nav-link" href="/categoria/4" data-sveltekit-preload-data="tap">Paquetes</a>
          </li>
        </ul>
        <form class="d-flex" action="/buscar/">
          <input class="form-control me-2" type="search" placeholder="Buscar Articulo" aria-label="Search" name="nombre">
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>

  <style>
    nav {
      font-family: "Merriweather", serif;
      font-size: 18px;
      border-bottom: 1px solid #d4d4d4;
    }

  </style>