<template>
  <div>
    <section class="section-content padding-top vld-parent">
      <div class="container">
        <loading
          :active.sync="isLoading"
          :can-cancel="true"
          color="green"
          :opacity="0.7"
          :height="54"
          :width="54"
          :is-full-page="fullPage"
        />
        <header class="section-heading section-has-btn">
          <h2 class="title-section-sm">Qaysi mavzuda?</h2>
          <div class="nav topic-tab-btn">
            <a href="#topic_adult" data-toggle="tab" class="active btn-sm btn">Kattalar</a>
            <a href="#topic_kids" data-toggle="tab" class="btn btn-sm">Bolalar</a>
          </div>
        </header>
        <!-- sect-heading -->

        <div class="tab-content">
          <div id="topic_adult" class="tab-pane fade show active">
            <div class="row row-sm category-dard minimized">
              <div
                v-for="item in items"
                :key="item.id"
                class="col-md-2 col-6 col-dard visible element"
              >
                <router-link to="/express" class="item-dard">
                  <div class="icon-wrap">
                    <img :src="item.img">
                  </div>
                  <span class="title">{{ item.name }}</span>
                </router-link>
              </div>
              <!-- col.// -->

              <div class="col-md-2 col-6 col-expand">
                <a
                  href="#"
                  class="item-dard control btn-dard-expand"
                  @click.prevent="doAjax"
                  @click="koproq()"
                >
                  <div class="icon-wrap">
                    <i class="fa fa-lg fa-chevron-down" />
                  </div>
                  <span class="title">Ko'proq</span>
                </a>
              </div>
              <!-- col.// -->

              <div class="col-md-2 col-6 col-minimize">
                <a
                  href="#"
                  class="item-dard control btn-dard-minimize"
                  @click.prevent="doAjax"
                  @click="kamroq()"
                >
                  <div class="icon-wrap">
                    <i class="fa fa-lg fa-chevron-up" />
                  </div>
                  <span class="title">Kamroq</span>
                </a>
              </div>
              <!-- col.// -->
            </div>
            <!-- row.// -->
          </div>
          <!-- tab-pane.// -->
          <div id="topic_kids" class="tab-pane fade">
            <div class="row row-sm category-dard minimized">
              <div v-for="item2 in items2" :key="item2.id" class="col-md-2 col-6 col-dard visible">
                <router-link to="/express" class="item-dard">
                  <div class="icon-wrap">
                    <img :src="item2.img">
                  </div>
                  <span class="title">{{ item2.name }}</span>
                </router-link>
              </div>
              <!-- col.// -->
            </div>
            <!-- row.// -->
          </div>
          <!-- tab-pane.// -->
        </div>
        <!-- tab-content.// -->
      </div>
      <!-- container .//  -->
    </section>
  </div>
  <!-- offcanvas-bar.// -->
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: { Loading },
  data() {
    return {
      items: [],
      items2: [],
      isLoading: false,
      fullPage: false
    }
  },
  mounted() {
    console.log('Component mounted.')
    // Koproq va Kamroq tugmalari
    // $('.btn-dard-expand').click(function(e) {
    //   e.preventDefault()
    //   $('.category-dard').removeClass('minimized')
    // })
    // $('.btn-dard-minimize').click(function(e) {
    //   e.preventDefault()
    //   $('.category-dard').addClass('minimized')
    // })

    this.items = JSON.parse(`[
      {'name':'Bosh og\'rig\'i','img':'images/icons/dard/1.png'},
      {'name':'Homiladorlik','img':'images/icons/dard/3.png'},
      {'name':'Buyrak kasalliklari','img':'images/icons/dard/4.png'},
      {'name':'Tishlar bo\'yicha','img':'images/icons/dard/5.png'},
      {'name':'Teri kasalliklari','img':'images/icons/dard/6.png'},
      {'name':'O\'pkada muammo','img':'images/icons/dard/7.png'},
      {'name':'Jinsiy muammo','img':'images/icons/dard/8.png'},
      {'name':'Jigar kasalliklari','img':'images/icons/dard/9.png'},
      {'name':'Yurak muammosi','img':'images/icons/dard/10.png'},
      {'name':'Oshqozon va ichak','img':'images/icons/dard/11.png'},
      {'name':'Og\'izda muammo','img':'images/icons/dard/12.png'}]`)

    this.items2 = JSON.parse(`[
      {'name':'Bosh og\'rig\'i','img':'images/icons/dard/18.png'},
      {'name':'Homiladorlik','img':'images/icons/dard/19.png'},
      {'name':'Buyrak kasalliklari','img':'images/icons/dard/20.png'},
      {'name':'Tishlar bo'yicha','img':'images/icons/dard/5.png'},
      {'name':'Teri kasalliklari','img':'images/icons/dard/6.png'},
      {'name':'O'pkada muammo','img':'images/icons/dard/7.png'},
      {'name':'O\'pkada muammo','img':'images/icons/dard/7.png'},
      {'name':'Jinsiy muammo','img':'images/icons/dard/8.png'},
      {'name':'Jigar kasalliklari','img':'images/icons/dard/9.png'},
      {'name':'Yurak muammosi','img':'images/icons/dard/10.png'},
      {'name':'Oshqozon va ichak','img':'images/icons/dard/11.png'},
      {'name':'Og\'izda muammo','img':'images/icons/dard/12.png'}]`)
  },
  methods: {
    // Loading function ni
    doAjax() {
      this.isLoading = true
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
    onCancel() {
      console.log('User cancelled the loader.')
    },
    // Koproq function ni Massivgani oziriga 6 ta element qoshyapdi
    koproq() {
      this.items.push(
        { name: 'Bosh og\'rig\'i', img: 'images/icons/dard/1.png' },
        { name: 'Homiladorlik', img: 'images/icons/dard/3.png' },
        { name: 'Buyrak kasalliklari', img: 'images/icons/dard/4.png' },
        { name: 'Tishlar bo\'yicha', img: 'images/icons/dard/5.png' },
        { name: 'Teri kasalliklari', img: 'images/icons/dard/6.png' },
        { name: 'O\'pkada muammo', img: 'images/icons/dard/7.png' }
      )
    },
    // koproq function ni massivdan oxirgi 6 ta elementni olib tashlayapdi
    kamroq() {
      this.items.splice(this.items.length - 6, 6)
    }
  }
}
</script>
