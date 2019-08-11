<template>
	<div>
		<div class="screen-overlay"></div>
    
	<!-- offcanvas-bar.// -->
	<!-- ./components/includes/Navbar   -->
    	<IncludesNavbar/>
        <section class="section-account padding-y-sm bg">
         <div class="container">

          <div class="row">
            <aside class="col-md-3">
              <h2 class="title-page-account">Kabinet</h2>

              <ul class="nav-aside-account">
                <li><router-link to="/user/med-card">Med kartam</router-link></li>
                <li><router-link to="/user/my-doctors">Mening vrachlarim</router-link></li>
                <li class="active"><router-link to="/user/my-files">Fayllarim</router-link></li>
                <li><router-link to="/user">Profilim</router-link></li>
                <li><router-link to="/user/setting">Sozlamalar</router-link></li>
                <li><router-link to="/user/payments">To’lovlarim</router-link></li>
                <li><router-link to="/logout">Chiqish</router-link></li>
              </ul>
              <hr>
              <router-link to="/consult" class="btn btn-primary btn-block"> Yangi konsultatsiya </router-link>
            </aside>
            <main class="col-md-9">
              

              <div class="topbar-account bg-blue">
                <div class="icontext float-left">
                  <div class="icon"><img class="img-avatar img-xs circle" src="/images/avatars/user.jpg"></div>
                  <div class="text"> <h6 class="title">Aziza Falonchaeva</h6><span class="phone"> +99894 6871122</span></div>
                </div>

                <div class="right-balance">
                  <div class="mr-3">
                    <strong>25 000 sum</strong> <br> 
                    <small>BALANS</small>
                  </div>
                  <div><a href="#" class="btn btn-round btn-sm btn-danger"> <i class="fa fa-plus"></i> To’ldirish</a></div>
                </div>
              </div> <!--  topbar-account.// -->


              <article class="box item-account-myfile">
                  <div class="left">
                     <i class="icon fa fa-folder"></i>
                     <p class="text-muted">2 ta fayl</p>
                  </div> <!-- col.// -->
                  <div class="content"> 
                      <div class="dropdown float-right">
                        <button class="btn btn-sm" data-toggle="dropdown"> <i class="fa fa-ellipsis-v"></i></button>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <a href="#" class="dropdown-item"> <i class="fa fa-share"></i> Yuborish</a>
                          <a href="#" class="dropdown-item"> <i class="fa fa-edit"></i> O'zgartirish</a>
                          <a href="#" class="dropdown-item"> <i class="fa fa-file-medical"></i>  Fayl qo'shish</a>
                          <hr>
                          <a href="#" class="text-danger dropdown-item"> <i class="fa fa-trash-alt"></i> O'chirish</a>
                        </ul>
                      </div>
                      <a href="#">
                        <h6>Kasallik A xulosalari - papka nomi</h6>
                        <p class="text-muted">Hayat klinikasidan olingan simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                      </a>
                  </div> <!-- content .// -->

              </article>

              <article class="box item-account-myfile">
                  <div class="left">
                     <i class="icon fa fa-folder"></i>
                     <p class="text-muted">2 ta fayl</p>
                  </div> <!-- col.// -->
                  <div class="content"> 
                      <div class="dropdown float-right">
                        <button class="btn btn-sm" data-toggle="dropdown"> <i class="fa fa-ellipsis-v"></i></button>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <a href="#" class="dropdown-item"> <i class="fa fa-share"></i> Yuborish</a>
                          <a href="#" class="dropdown-item"> <i class="fa fa-edit"></i> O'zgartirish</a>
                          <a href="#" class="dropdown-item"> <i class="fa fa-file-medical"></i>  Fayl qo'shish</a>
                          <hr>
                          <a href="#" class="text-danger dropdown-item"> <i class="fa fa-trash-alt"></i> O'chirish</a>
                        </ul>
                      </div>
                      <a href="#">
                        <h6>Oshqozon xulosalari papkasi</h6>
                         <p class="text-muted">Medical klinikasidan olingan simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                      </a>
                  </div> <!-- content .// -->
         
              </article>


              <article class="box item-account-myfile">
                  <div class="left">
                     <i class="icon fa fa-folder"></i>
                     <p class="text-muted">4 ta fayl</p>
                  </div> <!-- col.// -->
                  <div class="content"> 
                      <div class="dropdown float-right">
                        <button class="btn btn-sm" data-toggle="dropdown"> <i class="fa fa-ellipsis-v"></i></button>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <a href="#" class="dropdown-item"> <i class="fa fa-share"></i> Yuborish</a>
                          <a href="#" class="dropdown-item"> <i class="fa fa-edit"></i> O'zgartirish</a>
                          <a href="#" class="dropdown-item"> <i class="fa fa-file-medical"></i>  Fayl qo'shish</a>
                          <hr>
                          <a href="#" class="text-danger dropdown-item"> <i class="fa fa-trash-alt"></i> O'chirish</a>
                        </ul>
                      </div>
                      <a href="#">
                        <h6>Kasallik D xulosalari - papka nomi</h6>
                        <p class="text-muted">Hayat klinikasidan olingan simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                      </a>
                  </div> <!-- content .// -->
         
              </article>


              <article class="box item-account-myfile">
                  <div class="left">
                     <i class="icon fa fa-folder"></i>
                     <p class="text-muted">1 ta fayl</p>
                  </div> <!-- col.// -->
                  <div class="content"> 
                      <div class="dropdown float-right">
                        <button class="btn btn-sm" data-toggle="dropdown"> <i class="fa fa-ellipsis-v"></i></button>
                        <ul class="dropdown-menu dropdown-menu-right">
                          <a href="#" class="dropdown-item"> <i class="fa fa-share"></i> Yuborish</a>
                          <a href="#" class="dropdown-item"> <i class="fa fa-edit"></i> O'zgartirish</a>
                          <a href="#" class="dropdown-item"> <i class="fa fa-file-medical"></i>  Fayl qo'shish</a>
                          <hr>
                          <a href="#" class="text-danger dropdown-item"> <i class="fa fa-trash-alt"></i> O'chirish</a>
                        </ul>
                      </div>
                      <a href="#">
                        <h6>Kasallik A xulosalari - papka nomi</h6>
                        <p class="text-muted">Hayat klinikasidan olingan simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                      </a>
                  </div> <!-- content .// -->

              </article>


            </main>
          </div>

         </div> <!-- container.// -->
        </section>

	<!-- ./components/includes/User for Footer   -->
        <IncludesUserFooter/>
    </div>
</template>

<script>
    import IncludesNavbar from './../../includes/Navbar.vue';
    import IncludesUserFooter from './../../includes/User_footer.vue';
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {
            'IncludesNavbar' : IncludesNavbar,
            'IncludesUserFooter' : IncludesUserFooter
        }
    }

</script>