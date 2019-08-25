<template>
  <div>
    <div class="screen-overlay" />
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
    Footer: () => import('@/components/Footer')
  }
}
</script>
