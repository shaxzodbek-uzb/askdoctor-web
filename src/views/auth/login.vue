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
                  <input v-model="loginForm.username" class="form-control" value="+998" type="email">
                </div>
                <!-- form-group// -->
                <div class="form-group">
                  <a class="float-right" href="#">Unuttim?</a>
                  <label>Parol</label>
                  <input v-model="loginForm.password" class="form-control" placeholder="******" type="password">
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
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '998981212776',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
