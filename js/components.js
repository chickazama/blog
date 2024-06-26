export function Navbar() {
    const ret = document.createElement("nav");
    ret.classList.add("navbar", "navbar-expand-lg", "bg-body-tertiary");
    ret.innerHTML = `
    <div class="container-fluid">
    <a class="navbar-brand" href="#"><img class="img rounded" src="/img/site-logo.png" width="64" height="64" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
    `
    return ret;
}