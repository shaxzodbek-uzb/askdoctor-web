<template>
  <div>
    <section id="consult_start" class="section-content padding-y">

      <div class="container">

        <header class="section-heading">
          <h2 class="title-section-sm">Mutaxassis kerakmi?</h2>
        </header><!-- sect-heading -->

        <div class="row row-sm category-specialist minimized">
          <!-- for -->
          <div v-for="consult1 in consult" :key="consult1.id" class="col-lg-4 col-sm-6">
            <router-link to="/consult" class="item-specialist">
              <div class="text-wrap">
                <h5 class="title">{{ consult1.title }}</h5>
                <p>{{ consult1.content }}</p>
              </div>
              <span class="btn btn-primary"> Muloqotni boshlash</span>
              <img class="bg-special" :src="consult1.img">
            </router-link>
          </div> <!-- col.// -->
          <!-- /for -->
          <!-- for hidden-->
          <div v-for="hidden in hiddens" :key="hidden.id" class="col-lg-4 col-sm-6 col-specialist-hidden">
            <a href="page-consult-detail.html" class="item-specialist">
              <div class="text-wrap">
                <h5 class="title">{{ hidden.title }}</h5>
                <p>{{ hidden.content }}</p>
              </div>
              <span class="btn btn-primary"> Muloqotni boshlash</span>
              <img class="bg-special" :src="hidden.img">
            </a>
          </div> <!-- col.// -->
          <!-- /for hidden -->

          <div class="col-12  vld-parent">
            <a href="#" class="btn btn-block btn-light btn-specialist-expand" @click.prevent="doAjax"> Yana ko'proq  </a>
            <loading :active.sync="isLoading" :can-cancel="true" color="green" :opacity="0.9" :height="40" :width="40" :is-full-page="fullPage" />
          </div>
        </div> <!-- row.// -->
      </div> <!-- container .//  -->
    </section>
  </div>
<!-- offcanvas-bar.// -->
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  components: {
    Loading
  },
  data() {
    return {
      consult: [],
      hiddens: [],
      isLoading: false,
      fullPage: false
    }
  },
  mounted() {
    this.Datas()
  },
  methods: {
    doAjax() { // Loader function
      this.isLoading = true
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false

        // Yana koproq vca Kamroq tugmalari
        // this.Events()
      }, 1000)
    },
    // Events() {
    //   $('.category-specialist').toggleClass('minimized')
    //   if ($('.category-specialist').hasClass('minimized')) {
    //     $('.btn-specialist-expand').text("Yanada ko'proq")
    //   } else {
    //     $('.btn-specialist-expand').text('Kamroq')
    //   }
    // },
    Datas() {
      this.consult = JSON.parse(`[
                    { "title":"Genekolog", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/1.jpg" },
                    { "title":"Oftalmolog", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/2.jpg" },
                    { "title":"Psixoterapevt", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/3.jpg" },
                    { "title":"Allergolog", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/4.jpg" },
                    { "title":"Oftalmolog", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/5.jpg" },
                    { "title":"Psixoterapevt", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/6.jpg" },
                    { "title":"Allergolog", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/7.jpg" },
                    { "title":"Genekolog", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/8.jpg" },
                    { "title":"Oftalmolog", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/9.jpg" }
                ]`)
      this.hiddens = JSON.parse(`[
                    { "title":"Genekolog", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/1.jpg" },
                    { "title":"Oftalmolog", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/2.jpg" },
                    { "title":"Psixoterapevt", "content": "Qisqacha matn bu genekolog ishi haqida, lorem ipsum demo text here always", "img": "images/items/specialist/3.jpg" }
                ]`)
    }
  }
}
</script>

