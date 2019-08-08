<template>
  <div>
    <!-- ========================= SECTION PAGETOP ========================= -->
    <section class="section-pagetop bg-doctors">
      <div class="container clearfix">
        <h2 class="title-page text-center mb-4">Vrachlar</h2>

        <form>
          <div class="form-search-page">
            <div class="input-group">
              <select class="form-control custom-select">
                <option>Город Ташкент</option>
                <option>Buxoro</option>
                <option>Samarqand</option>
                <option>Qashqadaryo</option>
              </select>
              <input
                type="text"
                class="form-control"
                name
                placeholder="Поиск имя врача, специальность "
              >
            </div>
            <button type="submit" class="btn-search-page">
              <i class="fa fa-search" />
            </button>
          </div>
        </form>
      </div>
      <!-- container //  -->
    </section>
    <!-- ========================= SECTION PAGETOP END// ========================= -->

    <section class="section-content padding-y-sm bg">
      <div class="container">
        <div class="row-sm">
          <main class="col-md-9">
            <article class="card item-doctor">
              <div class="card-body">
                <div class="row-sm">
                  <aside class="col-md-3">
                    <a href="#" class="img-wrap">
                      <i class="online yes" />
                      <img src="images/posts/doctors/2.jpg" class="img-avatar">
                    </a>
                  </aside>
                  <div class="col-md-9">
                    <span class="job">Kardiolog</span>
                    <h4 class="title">Dr. Eshmatvoy Toshmatov</h4>
                    <p>
                      Tibbiyot fanlar nomzodi
                      <i class="icon-dot">&#9679;</i> Tajriba: 5 yil
                      <i class="icon-dot">&#9679;</i> Akfa Medline clinics
                    </p>

                    <p>
                      <i class="icon fa fa-map-marker-alt" /> г.Ташкент, Юнусабадский район, массив МИНОР (Ц-6), 6
                    </p>
                    <hr>
                    <a href="page-detail-doctor.html" class="btn btn-outline-primary">Batafsil</a>

                    <div class="contacts-wrap">
                      <i
                        class="icon fa fa-phone"
                        data-toggle="tooltip"
                        title="Telefon muloqoti mumkin"
                      />
                      <i
                        class="icon fa fa-comment-dots"
                        data-toggle="tooltip"
                        title="Chat orqali suhbat"
                      />
                      <i
                        class="icon fa fa-video"
                        data-toggle="tooltip"
                        title="Video muloqot mumkin"
                      />
                    </div>
                  </div>
                  <!-- col.// -->
                </div>
                <!-- row.// -->
              </div>
              <!-- card-body.// -->
            </article>
            <!-- card item-clinks.// -->

            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </main>
          <aside class="col-md-3">
            <div class="card sidebar-filter">
              <div class="card-body">
                <h5 class="title">По специальности</h5>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Педиатр</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Маммолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Семейный психолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Уролог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Гепатолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Гепатолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Детский невролог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Педиатр</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Маммолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Семейный психолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Уролог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Гепатолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Гепатолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Детский невролог</span>
                </label>
                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Педиатр</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Маммолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Семейный психолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Уролог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Гепатолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Гепатолог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Детский невролог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Скорая помощь</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Эндоуролог</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Прививки</span>
                </label>

                <label class="item-filter custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input">
                  <span class="custom-control-label">Эндоуролог</span>
                </label>

                <a href="#" class="btn btn-sm btn-light">Сброс</a>
              </div>
              <!-- card-body.// -->
            </div>
            <!-- card card-body.// -->
          </aside>
        </div>
      </div>
      <!-- container //  -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'Doctors'
}
</script>

<style>
</style>
