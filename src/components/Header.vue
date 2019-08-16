<template>
  <header class="section-header">
    <div class="mobile-left">
      <button
        data-offcanvas="#offcanvas_bar"
        data-overlay="true"
        class="btn btn-outline-primary btn-sm btn-hamburger"
      >
        <i class="fas fa-bars" />
      </button>
    </div>
    <div class="left mobile-middle">
      <router-link to="/" class="logo">
        <img src="/images/logo.png" class="img-logo">
      </router-link>
      <div class="lang-widget">
        <a href="#" class="btn btn-sm dropdown-toggle">Uzb</a>
        <div class="dropdown">
          <a href="#" class="dropdown-item">Rus</a>
          <a href="#" class="dropdown-item">Eng</a>
        </div>
      </div>
      <!-- dropdown.// -->
    </div>
    <div class="middle">
      <nav class="navbar-expand menu-header">
        <ul class="nav mx-auto">
          <router-link tag="li" class="nav-item" to="/"><a class="nav-link">Konsultatsiya</a></router-link>
          <router-link tag="li" class="nav-item" to="/clinics"><a class="nav-link">Klinikalar</a></router-link>
          <router-link tag="li" class="nav-item" to="/doctors"><a class="nav-link">Vrachlar</a></router-link>
          <li class="nav-item dropdown" data-display="static">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Ko'proq</a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/articles" class="dropdown-item">Maqolalar</router-link>
              </li>
              <li>
                <router-link to="/encyclopedia" class="dropdown-item">Ensiklopedia</router-link>
              </li>
              <li>
                <router-link to="/clinics" class="dropdown-item">Sanatoriyalar</router-link>
              </li>
              <li>
                <router-link to="/" class="dropdown-item">Bog'lanish</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div class="right">
      <a class="btn btn-round btn-call btn-sm" href="tel:+998712072227">
        <span class="num">+99871 207-22-27</span>
        <span class="icon-call">
          <i class="fa fa-phone" />
        </span>
      </a>
      <router-link to="/login" class="btn btn-round btn-primary btn-sm btn-login">Kirish</router-link>
      <a id="btn_search_header" href="#" class="btn-search">
        <i class="fa fa-search" />
      </a>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>
