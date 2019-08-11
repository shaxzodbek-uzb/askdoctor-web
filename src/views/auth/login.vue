<template>
  <div>
    <section class="section-content padding-y min-h-full bg-blueberry">
      <div class="container">
        <div class="col-sm-4 mx-auto">
          <div class="card card-login">
            <div class="card-body">
              <h4 class="card-title mb-4 mt-1">Kirish</h4>
              <form>
                <div class="form-group">
                  <label>Telefon</label>
                  <input name class="form-control" value="+998" type="email">
                </div>
                <!-- form-group// -->
                <div class="form-group">
                  <a class="float-right" href="#">Unuttim?</a>
                  <label>Parol</label>
                  <input class="form-control" placeholder="******" type="password">
                </div>
                <!-- form-group// -->
                <div class="form-group">
                  <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" checked>
                    <span class="custom-control-label">Esda saqlash</span>
                  </label>
                </div>
                <!-- form-group form-check .// -->
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">Login</button>
                </div>
                <!-- form-group// -->
              </form>
            </div>
            <!-- card-body.// -->
          </div>
          <!-- card.// -->
          <p class="text-center mt-3">
            <router-link to="/registration" class="btn text-white">Ro'yxatdan o'tish</router-link>
            <!-- <a href="page-register.html" class="btn text-white">Ro'yxatdan o'tish</a> -->
          </p>
        </div>
        <!-- col.// -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
