<template>
  <nav id="offcanvas_bar" class="offcanvas-bar">
    <button class="btn-close btn btn-sm">
      <i class="fa fa-lg fa-times"></i>
    </button>
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
    <hr />
    <ul class="nav-list">
      <router-link tag="li" class="nav-item" active-class="active" to="/">
        <a>Konsultatsiya</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/clinics">
        <a>Klinikalar</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/doctors">
        <a>Vrachlar</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/articles">
        <a>Maqolalar</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/encyclopedia">
        <a>Ensiklopedia</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/clinics">
        <a>Sanatoriyalar</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/">
        <a>Bog'lanish</a>
      </router-link>
    </ul>
    <a href class="btn btn-primary btn-block btn-round">Savol berish</a>
  </nav>
</template>

<script>
export default {
  name: 'MobileHeader'
};
</script>

<style>
</style>