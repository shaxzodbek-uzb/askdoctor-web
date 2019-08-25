<template>
  <section id="menu_external" class="collapse">
    <header class="section-header shadow-none bg" style="position: relative;">
      <div>
        <a href="page-index.html" class="logo">
          <img src="images/logo.png" class="img-logo">
        </a>
      </div>
      <nav class="navbar-expand menu-header">
        <ul class="nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="page-index.html">Konsultatsiya</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="page-listing-clinics.html">Klinikalar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="page-listing-doctors.html">Vrachlar</a>
          </li>
          <li class="nav-item dropdown" data-display="static">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Ko'proq</a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="page-blog.html">Maqolalar</a>
              </li>
              <li>
                <a class="dropdown-item" href="page-encyclopedia.html">Ensiklopedia</a>
              </li>
              <li>
                <a class="dropdown-item" href="page-listing-clinics.html">Sanatoriyalar</a>
              </li>
              <li>
                <a class="dropdown-item" href>Bog'lanish</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div>
        <a class="btn btn-round btn-call btn-sm" href="tel:+998712072227">
          <span class="num">+99871 207-22-27</span>
          <span class="icon-call">
            <i class="fa fa-phone" />
          </span>
        </a>
      </div>
    </header>
    <!-- section-header.// -->
  </section>
</template>

<script>
export default {
  name: 'ChatHeader'
}
</script>
