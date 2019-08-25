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
            <h2 class="title">User bilan muloqot</h2>
            <p class="text-muted">Boshlandi: 12.10.2019</p>
          </div>
        </div>
        <!-- col.// -->
        <div class="col-md-5 text-md-right">
          <a href="page-chat-doctor.html" class="btn btn-sm btn-light">Chat yozishma</a>
        </div>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </header>
    <div class="row no-gutters" style="height: calc(100vh - 91px)">
      <aside class="col-md-3 relative chat-aside-left">
        <div class="chat-left-wrap">
          <article class="chat-user-info">
            <div class="user-wrap">
              <img src="images/avatars/user.jpg" class="img-md img-avatar">
              <div>
                <h5 class="title">Iroda Rustamova</h5>
                <p class="text-muted">32 yosh</p>
              </div>
            </div>
            <!-- user-wrap.// -->
            <div class="chat-files">
              <h6 class="title">USERNING SHAXSIY FAYLLARI</h6>
              <ul class="filemanager-chat">
                <li>
                  <a href class="title-folder">
                    <i class="icon-action fa fa-caret-right" />
                    <i class="icon fa fa-folder" /> Kasallik A xulosalari - papka nomi
                  </a>
                  <a href="#" class="file">
                    <i class="fa fa-file icon" />
                    Kasallik_nomi_hayat.docx
                    <br>
                    <time class="date">12.06.2019</time>
                  </a>
                  <a href="#" class="file">
                    <i class="fa fa-file icon" />
                    gripp_xulosa_medline.jpg
                    <br>
                    <time class="date">12.06.2019</time>
                  </a>
                </li>
                <li>
                  <a href class="title-folder">
                    <i class="icon-action fa fa-caret-right" />
                    <i class="icon fa fa-folder" /> Gripp xulosalari - papka nomi
                  </a>
                </li>
                <li>
                  <a href class="title-folder">
                    <i class="icon-action fa fa-caret-right" />
                    <i class="icon fa fa-folder" /> Kasallik XYZ xulosalari - papka nomi
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <!-- chat-left-wrap.// -->
      </aside>
      <main class="col-md-9">
        <div class="panel-history" style>
          <form class="form-xulosa-wrap">
            <div class="form-group">
              <img src="images/icons/consult-result/1.png" class="icon">
              <label>Aniqlangan kasallik</label>
              <textarea class="form-control" rows="5" placeholder="Yozing">Kasallik juda yomon Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</textarea>
            </div>
            <div class="form-group">
              <img src="images/icons/consult-result/2.png" class="icon">
              <label>Tavsiya etilgan analizlar</label>
              <textarea class="form-control" rows="5" placeholder="Yozing" />
            </div>
            <div class="form-group">
              <img src="images/icons/consult-result/3.png" class="icon">
              <label>Tavsiya etilgan dorilar</label>
              <textarea class="form-control" rows="5" placeholder="Yozing" />
            </div>
            <div class="form-group">
              <img src="images/icons/consult-result/4.png" class="icon">
              <label>Umumiy xulosa</label>
              <textarea class="form-control" rows="5" placeholder="Yozing" />
            </div>
            <p class="text-right">
              <button class="btn btn-primary">Yuborish</button>
            </p>
          </form>
        </div>
        <!-- card-body.// -->
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Conclusion'
}
</script>
