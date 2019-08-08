<template>
  <div>
    <search />
    <nav id="offcanvas_bar" class="offcanvas-bar">
      <button class="btn-close btn btn-sm">
        <i class="fa fa-lg fa-times" />
      </button>

      <!-- <a href="#" class="btn btn-round btn-primary btn-login"> Kirish </a> -->
      <router-link to="/login" class="btn btn-round btn-primary btn-login">Kirish</router-link>

      <div class="dropdown d-inline-block">
        <a
          href="#"
          data-toggle="dropdown"
          class="btn btn-round btn-outline-primary dropdown-toggle"
        >Uzb</a>
        <div class="dropdown-menu">
          <a href="#" class="dropdown-item">Rus</a>
          <a href="#" class="dropdown-item">Eng</a>
        </div>
      </div>
      <!-- dropdown.// -->
      <hr>
      <ul class="nav-list">
        <li class="nav-item active">
          <router-link to="/">Konsultatsiya</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/clinics">Klinikalar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/doctors">Vrachlar</router-link>
        </li>
        <li />
        <li class="nav-item">
          <router-link to="/articles">Maqolalar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/encyclopedia">Ensiklopedia</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/clinics">Sanatoriyalar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/">Bog'lanish</router-link>
        </li>
      </ul>

      <a href class="btn btn-primary btn-block btn-round">Savol berish</a>
    </nav>

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
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Konsultatsiya</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/clinics" class="nav-link">Klinikalar</router-link>
              <!-- <a class="nav-link" href="page-listing-clinics.html">Klinikalar</a> -->
            </li>
            <li class="nav-item">
              <router-link to="/doctors" class="nav-link">Vrachlar</router-link>
              <!-- <a class="nav-link" href="page-listing-doctors.html">Vrachlar</a> -->
            </li>
            <li class="nav-item dropdown" data-display="static">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Ko'proq</a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/articles">Maqolalar</router-link>
                </li>
                <li>
                  <router-link to="/encyclopedia" class="dropdown-item">Ensiklopedia</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/clinics">Sanatoriyalar</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/">Bog'lanish</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div class="right">
        <a class="btn btn-round btn-call btn-sm">
          <span class="num">+998 71) 207-22-27</span>
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
    <!-- section-header.// -->
  </div>
  <!-- offcanvas-bar.// -->
</template>

<script>
import Search from './Search.vue'

export default {
  components: {
    search: Search
  },
  mounted() {
    console.log('Component mounted.')
  }
}
</script>
