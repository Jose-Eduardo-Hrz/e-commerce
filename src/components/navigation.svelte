<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Página Web</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/Todo">Todo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Electronica">Electronica</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Papeleria">Papeleria</a>
          </li>
        </ul>
        <form class="d-flex" action="/buscar/">
          <input class="form-control me-2" type="search" placeholder="Buscar Articulo" aria-label="Search">
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