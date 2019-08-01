<template>
  <div>
    <div class="screen-overlay"></div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Layout",
  components: { Header, Footer }
};
</script>
