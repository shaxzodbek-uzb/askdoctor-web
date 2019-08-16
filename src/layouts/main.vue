<template>
  <div>
    <div class="screen-overlay"></div>
    <Search />
    <MobileHeader />
    <!-- offcanvas-bar.// -->
    <div class="main-wrap">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
    Search: () => import('@/components/Search'),
    Header: () => import('@/components/Header'),
    MobileHeader: () => import('@/components/MobileHeader'),
    HeaFooterder: () => import('@/components/Footer'),
  }
}
</script>

<style>
</style>