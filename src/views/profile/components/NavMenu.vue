<template>
  <aside class="col-md-3">
    <h2 class="title-page-account">Kabinet</h2>

    <ul class="nav-aside-account">
      <li>
        <router-link to="/user/med-card">Med kartam</router-link>
      </li>
      <li>
        <router-link to="/user/my-doctors">Mening vrachlarim</router-link>
      </li>
      <li>
        <router-link to="/user/my-files">Fayllarim</router-link>
      </li>
      <li class="active">
        <router-link to="/user">Profilim</router-link>
      </li>
      <li>
        <router-link to="/user/setting">Sozlamalar</router-link>
      </li>
      <li>
        <router-link to="/user/payments">To’lovlarim</router-link>
      </li>
      <li>
        <router-link to="/logout">Chiqish</router-link>
      </li>
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
