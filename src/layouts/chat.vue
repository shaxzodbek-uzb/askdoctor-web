<template>
  <div>
    <div class="screen-overlay"></div>
    <div id="searchbox" class="searchbox">
      <span class="btn btn-sm btn-close-searchbox" id="btn_searchbox_close" title="Close Overlay">
        <i class="fa fa-times"></i>
      </span>
      <div class="searchbox-content">
        <form action="page-search.html" class="form-search-page">
          <div>
            <input
              type="text"
              id="searchinput_header"
              autocomplete="off"
              class="form-control"
              name
              placeholder="Поиск клиник"
            />
            <button type="submit" class="btn-search-page">
              <i class="fa fa-search"></i>
            </button>
          </div>
          <ul class="list-searchbox">
            <li>Magnitno rezonans - MRT</li>
            <li>Magniy va kalsiy</li>
            <li>Magamed Toshmatov</li>
            <li>Qandaydur magnitogorsk shahri</li>
            <li>Ajoyib bir magazin</li>
          </ul>
        </form>
      </div>
    </div>
    <nav id="offcanvas_bar" class="offcanvas-bar">
      <button class="btn-close btn btn-sm">
        <i class="fa fa-lg fa-times"></i>
      </button>
      <a href="#" class="btn btn-round btn-primary btn-login">Kirish</a>
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
        <li class="nav-item active">
          <a href="#intro">Konsultatsiya</a>
        </li>
        <li class="nav-item">
          <a href="#features">Klinikalar</a>
        </li>
        <li class="nav-item">
          <a href="#content">Vrachlar</a>
        </li>
        <li class="nav-item">
          <a href="#">Maqolalar</a>
        </li>
        <li class="nav-item">
          <a href="#">Ensiklopedia</a>
        </li>
        <li class="nav-item">
          <a href="#">Sanatoriyalar</a>
        </li>
        <li class="nav-item">
          <a href>Bog'lanish</a>
        </li>
      </ul>
      <a href class="btn btn-primary btn-block btn-round">Savol berish</a>
    </nav>
    <!-- offcanvas-bar.// -->
    <div class="main-wrap">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatLayout'
}
</script>

<style>
</style>