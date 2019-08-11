<template>
  <div>
    <section class="section-content padding-y min-h-full bg-blueberry">
      <div class="container">
        <div class="col-sm-5 mx-auto">
          <div class="card card-register">
            <div class="card-body">
              <h4 class="card-title mb-4 mt-1">Registratsiya</h4>
              <form>
                <div class="form-group">
                  <label>Ism sharifingiz</label>
                  <input name class="form-control" type="email">
                </div>
                <!-- form-group// -->

                <div class="form-group">
                  <label>Telefon</label>
                  <input name class="form-control" value="+998" type="email">
                </div>
                <!-- form-group// -->
                <div class="form-group">
                  <label>Parol</label>
                  <input class="form-control" placeholder type="password">
                </div>
                <!-- form-group// -->
                <div class="form-group">
                  <label>Parolni qayta tering</label>
                  <input class="form-control" placeholder type="password">
                </div>
                <!-- form-group// -->
                <div class="form-group">
                  <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" checked>
                    <span class="custom-control-label">Sayt shartlariga roziman</span>
                  </label>
                </div>
                <!-- form-group form-check .// -->
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">Tasdiqlash</button>
                  <!-- registration code oynasi bu link versatkasa yoq korsh uchun qoyildiz -->
                  <router-link to="/regcode" class="btn text-red">Register code oynasi</router-link>
                </div>
                <!-- form-group// -->
              </form>
            </div>
            <!-- card-body.// -->
          </div>
          <!-- card.// -->
          <p class="text-center mt-3">
            <router-link to="/login" class="btn text-white">Saytga kirish</router-link>
          </p>
        </div>
        <!-- col.// -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Registration'
}
</script>
