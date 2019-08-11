<template>
  <div>
    <section class="section-account padding-y-sm bg">
      <div class="container">
        <div class="row">
          <NavMenu />
          <main class="col-md-9">
            <div class="topbar-account bg-blue">
              <div class="icontext float-left">
                <div class="icon">
                  <img class="img-avatar img-xs circle" src="/images/avatars/user.jpg">
                </div>
                <div class="text">
                  <h6 class="title">Aziza Falonchaeva</h6>
                  <span class="phone">+99894 6871122</span>
                </div>
              </div>

              <div class="right-balance">
                <div class="mr-3">
                  <strong>25 000 sum</strong>
                  <br>
                  <small>BALANS</small>
                </div>
                <div>
                  <a href="#" class="btn btn-round btn-sm btn-danger">
                    <i class="fa fa-plus" /> To’ldirish
                  </a>
                </div>
              </div>
            </div>
            <!-- card topbar-account.// -->

            <article class="box item-account-consult">
              <a href="page-account-consult-detail.html">
                <div class="icontext">
                  <div class="icon">
                    <img class="img-avatar img-sm circle" src="/images/avatars/1.jpg">
                  </div>
                  <div class="text">
                    <h5 class="title">Psixolog</h5>
                    <p>Dr. Elena Rustamova</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-muted">
                    <time>15-aprel, 14:50, 2019</time>
                  </p>
                  <span href class="btn btn-light btn-sm">
                    <i class="fa fa-sync-alt fa-spin" /> &nbsp; Xulosa tayyorlanmoqda
                  </span>
                </div>
              </a>
            </article>

            <article class="box item-account-consult">
              <router-link to="/user/med-card">
                <div class="icontext">
                  <div class="icon">
                    <img class="img-avatar img-sm circle" src="/images/avatars/2.jpg">
                  </div>
                  <div class="text">
                    <h5 class="title">Terapevt</h5>
                    <p>Dr. Elena Rustamova</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-muted">
                    <time>12-aprel, 14:50, 2019</time>
                  </p>
                  <span href class="btn btn-primary btn-sm">
                    <i class="fa fa-check" /> &nbsp; Tibbiy xulosa tayyor
                  </span>
                </div>
              </router-link>
            </article>

            <article class="box item-account-consult">
              <router-link to="/user/med-card">
                <div class="icontext">
                  <div class="icon">
                    <img class="img-avatar img-sm circle" src="/images/avatars/3.jpg">
                  </div>
                  <div class="text">
                    <h5 class="title">Terapevt</h5>
                    <p>Dr. Elena Rustamova</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-muted">
                    <time>12-aprel, 14:50, 2019</time>
                  </p>
                  <span href class="btn btn-primary btn-sm">
                    <i class="fa fa-check" /> &nbsp; Tibbiy xulosa tayyor
                  </span>
                </div>
              </router-link>
            </article>
          </main>
        </div>
      </div>
      <!-- container.// -->
    </section>

    <!-- ./components/includes/User for Footer   -->
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import NavMenu from './components/NavMenu'

export default {
  name: 'Profile1',
  components: { NavMenu, Footer }
}
</script>
