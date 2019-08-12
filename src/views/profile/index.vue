<template>
  <div>
    <section class="section-account padding-y-sm bg">
      <div class="container">
        <div class="row">
          <NavMenu />
          <router-view />
        </div>
      </div>
      <!-- container.// -->
    </section>

    <!-- ./components/includes/User for Footer   -->
    <Footer />
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'

export default {
  name: 'Profile',
  components: { NavMenu }
}
</script>
