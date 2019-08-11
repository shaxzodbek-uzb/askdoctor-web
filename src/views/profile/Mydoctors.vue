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
                <li class="active"><router-link to="/user/my-doctors">Mening vrachlarim</router-link></li>
                <li><router-link to="/user/my-files">Fayllarim</router-link></li>
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
              </div> <!-- card topbar-account.// -->


              <div class="row-sm">
                <div class="col-md-6">
                   <article class="box item-mydoctor">
                     <a href="#" class="btn-close"><i class="fa fa-times"></i></a>
                         <div class="icontext">
                            <div class="icon"> <img class="img-avatar img-sm circle" src="/images/avatars/1.jpg"></div>
                            <div class="text"> 
                              <h5 class="title">Psixolog </h5> <p>Dr. Rustam Rustamova</p>
                              <hr> 
                              <p class="text-muted">Tibbiyot fanlar akademigi,   Врач - Отолоринголог в Ташкенте, </p>
                              <a href="page-detail-doctor.html" class="btn btn-sm btn-outline-primary"> Konsultatsiya olish </a>
                            </div>
                        </div>
                  </article>
                </div> <!-- col.// -->
                <div class="col-md-6">
                   <article class="box item-mydoctor">
                     <a href="#" class="btn-close"><i class="fa fa-times"></i></a>
                         <div class="icontext">
                            <div class="icon"> <img class="img-avatar img-sm circle" src="/images/avatars/2.jpg"></div>
                            <div class="text"> 
                              <h5 class="title">Kardioterapevt </h5> <p>Dr. Azizjob Rustamov</p>
                              <hr> 
                              <p class="text-muted">Tibbiyot fanlar akademigi,   Врач - Отолоринголог в Ташкенте, </p>
                              <a href="page-detail-doctor.html" class="btn btn-sm btn-outline-primary"> Konsultatsiya olish </a>
                            </div>
                        </div>
                  </article>
                </div> <!-- col.// -->
                <div class="col-md-6">
                   <article class="box item-mydoctor">
                     <a href="#" class="btn-close"><i class="fa fa-times"></i></a>
                         <div class="icontext">
                            <div class="icon"> <img class="img-avatar img-sm circle" src="/images/avatars/3.jpg"></div>
                            <div class="text"> 
                              <h5 class="title">Kardioterapevt </h5> <p>Dr. Aziza Rustamov</p>
                              <hr> 
                              <p class="text-muted">Tibbiyot fanlar akademigi,   Врач - Отолоринголог в Ташкенте, </p>
                              <a href="page-detail-doctor.html" class="btn btn-sm btn-outline-primary"> Konsultatsiya olish </a>
                            </div>
                        </div>
                  </article>
                </div> <!-- col.// -->
                <div class="col-md-6">
                   <article class="box item-mydoctor">
                        <a href="#" class="btn-close"><i class="fa fa-times"></i></a>
                         <div class="icontext">
                            <div class="icon"> <img class="img-avatar img-sm circle" src="/images/avatars/2.jpg"></div>
                            <div class="text"> 
                              <h5 class="title">Kardioterapevt </h5> <p>Dr. Umida Rustamova</p>
                              <hr> 
                              <p class="text-muted">Tibbiyot fanlar akademigi,   Врач - Отолоринголог в Ташкенте, </p>
                              <a href="page-detail-doctor.html" class="btn btn-sm btn-outline-primary"> Konsultatsiya olish </a>
                            </div>
                        </div>
                  </article>
                </div> <!-- col.// -->
                <div class="col-md-6">
                   <article class="box item-mydoctor">
                     <a href="#" class="btn-close"><i class="fa fa-times"></i></a>
                         <div class="icontext">
                            <div class="icon"> <img class="img-avatar img-sm circle" src="/images/avatars/3.jpg"></div>
                            <div class="text"> 
                              <h5 class="title">Kardioterapevt </h5> <p>Dr. Umida Rustamova</p>
                              <hr> 
                              <p class="text-muted">Tibbiyot fanlar akademigi,   Врач - Отолоринголог в Ташкенте, </p>
                              <a href="page-detail-doctor.html" class="btn btn-sm btn-outline-primary"> Konsultatsiya olish </a>
                            </div>
                        </div>
                  </article>
                </div> <!-- col.// -->
              </div> <!-- row.// -->

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