<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Speencil</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/categoria/1" data-sveltekit-preload-data="tap">Electronica</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/categoria/2" data-sveltekit-preload-data="tap">Papeleria</a>
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
        background-color: var(--bg-color);
    }
  </style>