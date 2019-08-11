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

            <table class="table table-bordered bg-white">
              <thead>
                <tr>
                  <th>To'lov sanasi</th>
                  <th>Maqsadi</th>
                  <th>Summasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12.06.2019</td>
                  <td>
                    Konsultatsiya
                    <br>Dr. Ahmadboy Eshmatov
                  </td>
                  <td>
                    <span class="text-danger">- 19 000 sum</span>
                  </td>
                </tr>
                <tr>
                  <td>12.06.2019</td>
                  <td>
                    Konsultatsiya
                    <br>Dr. Ahmadboy Eshmatov
                  </td>
                  <td>
                    <span class="text-danger">- 19 000 sum</span>
                  </td>
                </tr>
                <tr>
                  <td>12.06.2019</td>
                  <td>Balans to'ldirildi</td>
                  <td>
                    <span>+ 19 000 sum</span>
                  </td>
                </tr>
                <tr>
                  <td>12.06.2019</td>
                  <td>
                    Konsultatsiya
                    <br>Dr. Ahmadboy Eshmatov
                  </td>
                  <td>
                    <span class="text-danger">- 19 000 sum</span>
                  </td>
                </tr>
                <tr>
                  <td>12.06.2019</td>
                  <td>
                    Konsultatsiya
                    <br>Dr. Ahmadboy Eshmatov
                  </td>
                  <td>
                    <span class="text-danger">- 19 000 sum</span>
                  </td>
                </tr>
                <tr>
                  <td>12.06.2019</td>
                  <td>Balans to'ldirildi</td>
                  <td>
                    <span>- 19 000 sum</span>
                  </td>
                </tr>
              </tbody>
            </table>
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
  name: 'Profile3',
  components: { NavMenu, Footer }
}
</script>
