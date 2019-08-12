<template>
  <aside class="col-md-3">
    <h2 class="title-page-account">Kabinet</h2>

    <ul class="nav-aside-account">
      <router-link tag="li" active-class="active" to="/profile/med-cards"><a>Med kartam</a></router-link>
      <router-link tag="li" active-class="active" to="/profile/my-doctors"><a>Mening vrachlarim</a></router-link>
      <router-link tag="li" active-class="active" to="/profile/my-files"><a>Fayllarim</a></router-link>
      <router-link tag="li" active-class="active" to="/profile/account-settings"><a>Profilim</a></router-link>
      <router-link tag="li" active-class="active" to="/profile/payments"><a>To’lovlarim</a></router-link>
      <router-link tag="li" active-class="active" to="/logout"><a>Chiqish</a></router-link>
    </ul>
    <hr>
    <router-link to="/consult" class="btn btn-primary btn-block">Yangi konsultatsiya</router-link>
  </aside>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style>

</style>
