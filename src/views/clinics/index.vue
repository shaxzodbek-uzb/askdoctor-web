<template>
  <div>
    <!-- ========================= SECTION PAGETOP ========================= -->
    <section class="section-pagetop bg-clinic">
      <div class="container clearfix">
        <h2 class="title-page text-center mb-4">Klinikalar</h2>
        <form>
          <div class="form-search-page">
            <div class="input-group">
              <select class="form-control custom-select">
                <option>Город Ташкент</option>
                <option>Buxoro</option>
                <option>Samarqand</option>
                <option>Qashqadaryo</option>
              </select>
              <input
                type="text"
                class="form-control"
                placeholder="Поиск клиник"
              >
            </div>
            <button type="submit" class="btn-search-page">
              <i class="fa fa-search" />
            </button>
          </div>
        </form>
      </div>
      <!-- container //  -->
    </section>
    <!-- ========================= SECTION PAGETOP END// ========================= -->
    <section class="section-content padding-bottom bg">
      <div class="page-topbar">
        <div class="container">
          <nav class="nav nav-topbar justify-content-center">
            <a href="#" class="nav-link active">
              <strong>Mahalliy</strong> (1231)
            </a>
            <a href="#" class="nav-link"> <strong>Xalqaro</strong> (32) </a>
          </nav>
        </div>
        <!-- container //  -->
      </div>
      <!-- page-topbar.// -->

      <div class="container">
        <div class="row-sm">
          <main class="col-md-9 vld-parent">
            <loading
              :active.sync="isLoading"
              :can-cancel="true"
              color="green"
              :opacity="0.7"
              :height="74"
              :width="74"
              :is-full-page="fullPage"
            />
            <article
              v-for="item in allClinics"
              :key="item.id"
              class="card item-clinic"
            >
              <div class="card-body vld-parent">
                <div class="row-sm">
                  <aside class="col-md-3">
                    <img :src="item.img" class="rounded img-fluid mb-3">
                    <!-- Ish kunlari  -->
                    <WorkData />
                    <!-- /ish kunlari -->
                  </aside>
                  <div class="col-md-9">
                    <h4 class="title">{{ item.name }}</h4>
                    <p>{{ item.short_description }}</p>
                    <hr>
                    <p>{{ item.con }}</p>
                    <div class="row">
                      <div class="col-md">
                        <div class="icontext">
                          <i class="icon fa fa-phone" />
                          <p class="text">{{ item.phone }}</p>
                        </div>
                        <!-- icontext.// -->
                      </div>
                      <!-- col.// -->
                      <div class="col-md">
                        <div class="icontext">
                          <i class="icon fa fa-globe" />
                          <p class="text">{{ item.sayt }}</p>
                        </div>
                        <!-- icontext.// -->
                      </div>
                      <!-- col.// -->
                      <div class="col-md">
                        <div class="icontext">
                          <i class="icon fa fa-map-marker" />
                          <p class="text">{{ item.addess }}</p>
                        </div>
                        <!-- icontext.// -->
                      </div>
                      <!-- col.// -->
                    </div>
                  </div>
                  <!-- col.// -->
                </div>
                <router-link
                  to="/clinics/details"
                  class="btn btn-primary btn-block"
                >
                  Подробности (Врачи, услуги )
                </router-link>
              </div>
              <!-- card-body.// -->
            </article>
            <!-- card item-clinks.// -->
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </main>
          <!-- ./components/includes/Specialty   -->
          <Specialty />
        </div>
      </div>
      <!-- container //  -->
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import 'vue-loading-overlay/dist/vue-loading.css'
import Loading from 'vue-loading-overlay'
import Specialty from './components/Specialty'
import WorkData from './components/WorkData'

export default {
  components: { Specialty, WorkData, Loading },
  data() {
    return {
      message: '1',
      clinics: [],
      db: [],
      isLoading: false,
      fullPage: false
    }
  },
  computed: mapGetters(['allClinics']),
  created() {
    console.log('created')
    this.fetchClinics().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    ...mapActions(['fetchClinics'])
    // doAjax() {
    //   this.isLoading = true
    //   setTimeout(() => {
    //     this.isLoading = false
    //   }, 1000)
    // },
    // itemQoshish(arr) {
    //   // this.doAjax()
    //   // this.items = []
    //   // this.db = JSON.parse(`[
    //   //   {'id':'1','title':'Mds-servis','img':'images/posts/clinics/1.jpg','subtitle':'Медцентр, клиникамедицинская лаборатория','con':'Современная многопрофильная Клиника “ HAYAT ” оказывает диагностическую, амбулаторно-поликлиническую и стационарную помощь по всем мировым стандартам современной медицины оликлиническую и стационарную помощь по всем мировым стандартам современной медицины …','phone':'+998 71 200-88-66 +998 71 260-44-55','sayt':'info@hayatmed.uz www.hayatmed.uz','addess':'Ташкент ул. Мевазор 5/14, около детской клиники ТашПМИ.'},
    //   //   {'id':'1','title':'Mds-servis','img':'images/posts/clinics/1.jpg','subtitle':'Медцентр, клиникамедицинская лаборатория','con':'Современная многопрофильная Клиника “ HAYAT ” оказывает диагностическую, амбулаторно-поликлиническую и стационарную помощь по всем мировым стандартам современной медицины оликлиническую и стационарную помощь по всем мировым стандартам современной медицины …','phone':'+998 71 200-88-66 +998 71 260-44-55','sayt':'info@hayatmed.uz www.hayatmed.uz','addess':'Ташкент ул. Мевазор 5/14, около детской клиники ТашПМИ.'},
    //   //   {'id':'2','title':'Mds-servis','img':'images/posts/clinics/1.jpg','subtitle':'Медцентр, клиникамедицинская лаборатория','con':'Современная многопрофильная Клиника “ HAYAT ” оказывает диагностическую, амбулаторно-поликлиническую и стационарную помощь по всем мировым стандартам современной медицины оликлиническую и стационарную помощь по всем мировым стандартам современной медицины …','phone':'+998 71 200-88-66 +998 71 260-44-55','sayt':'info@hayatmed.uz www.hayatmed.uz','addess':'Ташкент ул. Мевазор 5/14, около детской клиники ТашПМИ.'},
    //   //   {'id':'2','title':'Mds-servis','img':'images/posts/clinics/1.jpg','subtitle':'Медцентр, клиникамедицинская лаборатория','con':'Современная многопрофильная Клиника “ HAYAT ” оказывает диагностическую, амбулаторно-поликлиническую и стационарную помощь по всем мировым стандартам современной медицины оликлиническую и стационарную помощь по всем мировым стандартам современной медицины …','phone':'+998 71 200-88-66 +998 71 260-44-55','sayt':'info@hayatmed.uz www.hayatmed.uz','img':'images/posts/clinics/1.jpg','addess':'Ташкент ул. Мевазор 5/14, около детской клиники ТашПМИ.'},
    //   //   {'id':'2','title':'Mds-servis','img':'images/posts/clinics/1.jpg','subtitle':'Медцентр, клиникамедицинская лаборатория','con':'Современная многопрофильная Клиника “ HAYAT ” оказывает диагностическую, амбулаторно-поликлиническую и стационарную помощь по всем мировым стандартам современной медицины оликлиническую и стационарную помощь по всем мировым стандартам современной медицины …','phone':'+998 71 200-88-66 +998 71 260-44-55','sayt':'info@hayatmed.uz www.hayatmed.uz','addess':'Ташкент ул. Мевазор 5/14, около детской клиники ТашПМИ.'},
    //   //   {'id':'3','title':'Mds-servis','img':'images/posts/clinics/1.jpg','subtitle':'Медцентр, клиникамедицинская лаборатория','con':'Современная многопрофильная Клиника “ HAYAT ” оказывает диагностическую, амбулаторно-поликлиническую и стационарную помощь по всем мировым стандартам современной медицины оликлиническую и стационарную помощь по всем мировым стандартам современной медицины …','phone':'+998 71 200-88-66 +998 71 260-44-55','sayt':'info@hayatmed.uz www.hayatmed.uz','addess':'Ташкент ул. Мевазор 5/14, около детской клиники ТашПМИ.'}
    //   // ]`)
    //   // for (var i = 0; i < this.db.length; i++) {
    //   //   const it = this.db[i]
    //   //   if (arr.indexOf(parseInt(it.id)) !== -1) {
    //   //     this.items.push(it)
    //   //   }
    //   // }
    // }
  }
}
</script>
