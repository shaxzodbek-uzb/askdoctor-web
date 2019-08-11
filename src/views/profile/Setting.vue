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
                <li><router-link to="/user/my-files">Fayllarim</router-link></li>
                <li><router-link to="/user">Profilim</router-link></li>
                <li class="active"><router-link to="/user/setting">Sozlamalar</router-link></li>
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
              
              <article class="box">

                <form class="form-account-setting">
                <div class="form-row">
                  <div class="form-group col">
                    <label>Ismingiz</label>
                    <input type="text"  class="form-control"  name="">
                  </div> <!-- form-group.// -->
                  <div class="form-group col">
                    <label>Familiya</label>
                    <input type="text"  class="form-control" name="">
                  </div> <!-- form-group.// -->
                </div> <!-- form-row.// -->
                
                <div class="form-row">
                  <div class="form-group col">
                    <label>Tug'ilgan yilingiz</label>
                    <input type="date" class="form-control" value="01/10/1990" name="">
                  </div> <!-- form-group.// -->
                  <div class="form-group col">
                    
                  <label class="d-block">Jins</label>
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-outline-light active">
                      <input type="radio" name="options" id="option1" autocomplete="off" checked> Erkak
                    </label>
                    <label class="btn btn-outline-light">
                      <input type="radio" name="options" id="option2" autocomplete="off"> Ayol
                    </label>
                  </div>

                  </div> <!-- form-group.// -->
                </div> <!-- form-row.// -->


                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Parol</label>
                    <div class="input-group">
                      <input type="text" disabled=""  class="form-control" value="*********">
                      <div class="input-group-append">
                        <a href="#" class="btn btn-outline-primary">O'zgartirish</a>
                      </div>
                    </div>
                  </div> <!-- form-group.// -->
                </div> <!-- form-row.// -->

                 <button class="btn btn-primary btn-block"> Saqlash </button>
              </form>


              </article> <!-- box.// -->

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