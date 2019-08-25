<template>
  <section class="section-window-chat">
    <header class="header-chat">
      <button
        class="navbar-toggler btn-menu-chat"
        type="button"
        data-toggle="collapse"
        data-target="#menu_external"
      >
        <i class="fa fa-bars" />
      </button>
      <div class="row no-gutters">
        <div class="col-md-7">
          <div class="title-chat-wrap">
            <h2 class="title">Terapevt bilan muloqot</h2>
            <p class="text-muted">Shifokor kun davomida sizga javob yozadi</p>
          </div>
        </div>
        <!-- col.// -->
        <div class="col-md-5 text-md-right">
          <a href="page-account-consult-detail.html" class="btn btn-sm btn-light">Tugatish</a>
          <a href class="btn px-2 text-primary">
            <i class="fa fa-lg fa-phone" />
          </a>
          <a href class="btn px-2 text-danger">
            <i class="fa fa-lg fa-video" />
          </a>
          <a class="btn-account-user" href="page-account-user.html">
            <span class="icon-avatar">
              <i class="fa fa-user" />
            </span>
          </a>
        </div>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </header>
    <div class="row no-gutters" style="height: calc(100vh - 91px)">
      <aside class="col-md-3 relative chat-aside-left">
        <div class="chat-left-wrap">
          <article class="chat-user-info">
            <img src="images/avatars/1.jpg" class="img-md img-avatar">
            <h5 class="title">Ahmadbek Rustamov</h5>
            <p class="text-muted">
              Tibbiyot fanlar nomzodi
              <br>Tajriba: 5 yil
              <br>Akfa Medline clinics
            </p>
          </article>
        </div>
        <!-- chat-left-wrap.// -->
      </aside>
      <main class="col-md-9">
        <div class="panel-history" style>
          <article class="chat-main-wrap">
            <div class="message-left">
              <div class="img-wrap">
                <img src="images/avatars/1.jpg">
              </div>
              <div class="text-wrap">Salom Alisher aka, Men Terapevt, sizni nima bezovta qilyapti?</div>
            </div>
            <div class="message-right">
              <div
                class="text-wrap"
              >Salom doktor meni kasalligim shuki, oshqozonim kechasi ovqat yaxshi hazm qilmayapti, uxlolmayapman</div>
            </div>
            <div class="message-left">
              <div class="img-wrap">
                <img src="images/avatars/1.jpg">
              </div>
              <div
                class="text-wrap"
              >Tushunarli, Sizda demak oshqozon ovqat hazm qilish tizimida muammo bor ekan, Siz har kuni kechqurunlari nima ovqatlar iste'mol qilasiz?</div>
            </div>
            <div class="message-right">
              <div class="text-wrap">Asosan yog’li va go’shtli taomlar yeyman… :)</div>
            </div>
            <div class="message-left">
              <div class="img-wrap">
                <img src="images/avatars/1.jpg">
              </div>
              <div
                class="text-wrap"
              >Bunday ovqatlar sizga kechqurun tavsiya etilmaydi. Agar boshqa ovqat yeganda o’zingizni qanday his qilasiz?</div>
            </div>
            <div class="message-right">
              <div
                class="text-wrap"
              >Agar ovqatdan so'ng meva yesam yaxshi his qilaman, hazm qilish oson bo’ladi</div>
            </div>
            <div class="message-left">
              <div class="img-wrap">
                <img src="images/avatars/1.jpg">
              </div>
              <div class="text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div class="message-right">
              <div class="text-wrap">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div class="message-left">
              <div class="img-wrap">
                <img src="images/avatars/1.jpg">
              </div>
              <div
                class="text-wrap"
              >Tushunarli, Sizda demak oshqozon ovqat hazm qilish tizimida muammo bor ekan, Siz har kuni kechqurunlari nima ovqatlar iste'mol qilasiz?</div>
            </div>
            <div class="message-right">
              <div class="text-wrap">Asosan yog’li va go’shtli taomlar yeyman… :)</div>
            </div>
            <div class="message-left">
              <div class="img-wrap">
                <img src="images/avatars/1.jpg">
              </div>
              <div
                class="text-wrap"
              >Bunday ovqatlar sizga kechqurun tavsiya etilmaydi. Agar boshqa ovqat yeganda o’zingizni qanday his qilasiz?</div>
            </div>
            <div class="message-right">
              <div
                class="text-wrap"
              >Agar ovqatdan so'ng meva yesam yaxshi his qilaman, hazm qilish oson bo’ladi</div>
            </div>
          </article>
        </div>
        <!-- card-body.// -->
        <div class="panel-bottom">
          <textarea class="form-control" placeholder="Yozing dardingiz nima?" />
          <div class="chat-btn-wrap">
            <button class="btn">
              <i class="fas fa-lg fa-paperclip" />
            </button>
            <button class="btn">
              <i class="fas fa-lg fa-paper-plane" />
            </button>
          </div>
          <!-- chat-btn-wrap.// -->
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserChat',
  mounted() {
    console.log('layoput mounted')
    // jquery ready start
    window.$(document).ready(() => {
      // jQuery code
      let window_h = window.$(window).height()
      let panel_bottom_h = window.$('.panel-bottom').outerHeight()
      let panel_history_h = window_h - panel_bottom_h - 91
      window.$('.panel-history').css('height', panel_history_h)

      window.$(window).on('resize', () => {
        window_h = window.$(window).height()
        panel_bottom_h = window.$('.panel-bottom').outerHeight()
        panel_history_h = window_h - panel_bottom_h - 91
        window.$('.panel-history').css('height', panel_history_h)
      })
    })
  }
}
</script>

<style>
</style>
