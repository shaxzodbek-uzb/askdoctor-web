<template>
  <div>
        <div id="searchbox" class="searchbox">
          <span class="btn btn-sm btn-close-searchbox" id="btn_searchbox_close" title="Close Overlay"><i class="fa fa-times"></i></span>
          <div class="searchbox-content">
            <form action="page-search.html"  class="form-search-page">
               <div>
                  <input type="text" id="searchinput_header" autocomplete="off" class="form-control" name="" placeholder="Поиск клиник">
                  <button type="submit" class="btn-search-page"> <i class="fa fa-search"></i></button>
              </div>
              <ul class="list-searchbox">
                <li>Magnitno rezonans - MRT</li>
                <li>Magniy va kalsiy</li>
                <li>Magamed Toshmatov</li>
                <li>Qandaydur magnitogorsk shahri</li>
                <li>Ajoyib bir magazin</li>
              </ul>
            </form>
          </div>
        </div>


        <!-- ========================= SECTION TOPIC SELECT ========================= -->
        <Slider />
        <!-- ========================= SECTION TOPIC SELECT END// ========================= -->
        

        <!-- ========================= SECTION TOPIC SELECT ========================= -->
        <Topic />
        <!-- ========================= SECTION TOPIC SELECT END// ========================= -->


        <!-- ========================= SECTION CONSULT SELECT ========================= -->
        <Consult />
        <!-- ========================= SECTION CONSULT SELECT END// ========================= -->



        <!-- ========================= SECTION STAT ========================= -->
        <section class="section-why padding-y bg-doctor">
        <div class="container" style="max-width: 940px;">
        <header class="section-heading text-center">
            <h2 class="title-section text-white">Nega bizni tanlaydilar</h2>
            <i class="line bg-white"></i>
        </header><!-- sect-heading -->

        <div class="row" id="counter-stat-wrap">
            <div class="col-lg-3 col-md-3 col-6">
            <figure class="item-stat">
                <div class="icon-wrap"><img src="images/icons/why/1.png"></div>
                <h3 class="num-counter" data-count="119">11</h3>
                <p class="title"> Klinika haqida <br> malumot</p>
            </figure>
            </div> <!-- col.// -->
            <div class="col-lg-3 col-md-3  col-6">
            <figure class="item-stat">
                <div class="icon-wrap"><img src="images/icons/why/2.png"></div>
                <h3 class="num-counter" data-count="752">75</h3>
                <p class="title"> Eng malakali <br> shifokorlar</p>
            </figure>
            </div> <!-- col.// -->
            <div class="col-lg-3 col-md-3  col-6">
            <figure class="item-stat">
                <div class="icon-wrap"><img src="images/icons/why/3.png"></div>
                <h3 class="num-counter" data-count="1520">152</h3>
                <p class="title"> Konsultatsiya <br> berildi</p>
            </figure>
            </div> <!-- col.// -->
            <div class="col-lg-3 col-md-3  col-6">
            <figure class="item-stat">
                <div class="icon-wrap"><img src="images/icons/why/4.png"></div>
                <h3 class="num-counter" data-count="351">35</h3>
                <p class="title"> Userlar <br> saytga a'zo</p>
            </figure>
            </div> <!-- col.// -->
        </div> <!-- row.// -->

        </div> <!-- container.// -->
        </section> 
        <!-- ========================= SECTION STAT .//END ========================= -->



        <!-- ========================= SECTION ASIDE ========================= -->
        <section class="section-talk padding-y">
        <div class="container">

        <div class="row">
          <div class="col-lg-6 mobile-hide">
          <figure class="aside-talk-wrap tab-content">

            <article class="aside-talk-content tab-pane aside-chat active" id="aside_chat">
                <div class="aside-chat-wrap">
                  <div class="chat-aside-home-scroll">
                    <div class="message-left">
                      <div class="img-wrap"><img src="images/illustration/avatar-doc.png"></div>
                      <div class="text-wrap">Salom Alisher aka, Men Terapevt, sizni nima bezovta qilyapti?</div>
                    </div>
                    <div class="message-right">
                      <div class="text-wrap">Salom doktor meni kasalligim shuki, oshqozonim kechasi ovqat yaxshi hazm qilmayapti, uxlolmayapman</div>
                    </div>
                    <div class="message-left">
                      <div class="img-wrap"><img src="images/illustration/avatar-doc.png"></div>
                      <div class="text-wrap">Tushunarli, Sizda demak oshqozon ovqat hazm qilish tizimida muammo bor ekan, Siz har kuni kechqurunlari nima ovqatlar iste'mol qilasiz? </div>
                    </div>
                    <div class="message-right">
                      <div class="text-wrap">Asosan yog’li va go’shtli taomlar yeyman… :) </div>
                    </div>
                     <div class="message-left">
                      <div class="img-wrap"><img src="images/illustration/avatar-doc.png"></div>
                      <div class="text-wrap">Bunday ovqatlar sizga kechqurun tavsiya etilmaydi. Agar boshqa ovqat yeganda o’zingizni qanday his qilasiz?</div>
                    </div>
                    <div class="message-right">
                      <div class="text-wrap">Agar ovqatdan so'ng meva yesam yaxshi his qilaman, hazm qilish oson bo’ladi  </div>
                    </div>
                    <div class="message-right">
                      <div class="text-wrap">Faqatgina yog’ va go’shtli mahsulotlar qiynamoqda</div>
                    </div>
                    <div class="message-left">
                      <div class="img-wrap"><img src="images/illustration/avatar-doc.png"></div>
                      <div class="text-wrap">Bu katta muammo emas aslida, siz  1 oy davomida yog’li mahsulotlarni iste'mol qilmang, ko’proq toza suv ichib turing </div>
                    </div>
                     <div class="message-left">
                      <div class="img-wrap"><img src="images/illustration/avatar-doc.png"></div>
                      <div class="text-wrap">2 hafta mobaynida har kun Mezim tabletkasini  3 mahal ovqatdan so'ng iching, ovqatdan keyin 1 piyola limon choy iching.   Sovuq va qaynoq narsalar umuman iste'mol qilmang. Oshqozoningizni zont yutish orqali tekshirish tavsiya etiladi. Mening qabulimga kelsangiz klinikamizda bir necha labaratoriya tekshiruvlarni amalga oshiramiz. </div>
                    </div>
                    <div class="message-left">
                      <div class="img-wrap"><img src="images/illustration/avatar-doc.png"></div>
                      <div class="text-wrap">Hammasi tushunarlimi?</div>
                    </div>
                     <div class="message-right">
                      <div class="text-wrap">Ha bo’ldi tushundim</div>
                    </div>
                    <div class="message-left">
                      <div class="img-wrap"><img src="images/illustration/avatar-doc.png"></div>
                      <div class="text-wrap">Tuzalib keting, yordam kerak bo’lsa Askdoctor orqali menga murojaat qilishingiz mumkin. </div>
                    </div>
                  </div> <!-- chat-aside-home-scroll .//end -->
                </div> <!-- aside-chat-wrap .end -->

                 <span class="shape-circle-talk"></span>
            </article> <!-- aside-talk-content.// -->

            <article class="aside-talk-content tab-pane" id="aside_call"> 
              <div class="aside-call-wrap">
                 <video autoplay muted loop>
                  <source src="images/video/video_phone.mp4" type="video/mp4">
                </video>
              </div>
            </article> <!-- aside-talk-content.// -->

            <article class="aside-talk-content tab-pane" id="aside_video">
               <div class="aside-videochat-wrap">
                 <video autoplay muted loop>
                <source src="images/video/video_videochat.mp4" type="video/mp4">
              </video>
               </div>
            </article> <!-- aside-talk-content.// -->

          </figure>

          </div> <!-- col.// -->
          <div class="col-lg-6 d-flex align-items-center">
             <article class="article aside-info-right">
             <header class="section-heading">
                <h2 class="title-section text-dark">Doktorlar yoningizda <br> bo'lmasa</h2>
                <i class="line"></i>
            </header><!-- sect-heading -->
              
              <div class="btn-tabs-slide nav nav-pills mobile-hide mb-4">
                <a href="#aside_chat"  data-toggle="pill" class="active"> <i class="fa fa-comment-dots"></i> Chat</a>
                <a href="#aside_call" data-toggle="pill">  <i class="fa fa-phone"></i> Telefon</a>
                <a href="#aside_video" data-toggle="pill">  <i class="fa fa-video"></i> Video</a>
              </div>

              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't </p>
              <router-link to="/consult" class="page-scroll btn btn-primary">Muloqotni boshlash</router-link>
             </article>

          </div> <!-- col.// -->
        </div>

        </div> <!-- container.// -->
        </section> 
        <!-- ========================= SECTION TALK .//END ========================= -->



        <!-- ========================= SECTION MAP ========================= -->
        <section class="section-content padding-y">
        <div class="container">
        <div class="row">
        <div class="col-lg-6 d-flex align-items-center">
        <article class="article aside-info-left">
            <header class="section-heading">
            <h2 class="title-section text-dark">Istalgan payt <br> istalgan joydan</h2>
            <i class="line"></i>
            </header><!-- sect-heading -->
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't </p>
            <a href="#consult_start" class="page-scroll btn btn-primary">Muloqotni boshlash</a>
        </article>
        </div> <!-- col.// -->
        <div class="col-lg-6">
        <figure class="aside-round-map">
            <img class="people people1" src="images/illustration/map-people1.png">
            <img class="people people2" src="images/illustration/map-people2.png">
            <img class="people people3" src="images/illustration/map-people3.png">
            <img class="people people4" src="images/illustration/map-people4.png">
            <span class="shape-circle-map"> <img class="img-map" src="images/illustration/uzb.png"> </span>
        </figure>
        </div> <!-- col.// -->
        </div> <!-- row.// -->


        </div> <!-- container.// -->
        </section> 
        <!-- ========================= SECTION MAP .//END ========================= -->




        <!-- ========================= SECTION FEATURE ========================= -->
        <section class="section-content padding-y bg-blue">
        <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6">
            <figure class="item-feature">
                <div> <span class="icon-wrap"><img src="images/icons/feature/1.png"></span></div> 
                <div class="text-wrap">
                <h5 class="title">Maxfiylik kafolatlanadi</h5>
                <p>Qisqacha matn bu afzallik turi haqida, lorem ipsum demo text is here always</p>
                </div>
            </figure>
            </div> <!-- col.// -->
            <div class="col-lg-4 col-md-6">
            <figure class="item-feature">
                <div> <span class="icon-wrap"><img src="images/icons/feature/2.png"></span></div> 
                <div class="text-wrap">
                <h5 class="title">Saralangan shifokorar</h5>
                <p>Qisqacha matn bu afzallik turi haqida, lorem ipsum demo text is here always</p>
                </div>
            </figure>
            </div> <!-- col.// -->
            <div class="col-lg-4 col-md-6">
            <figure class="item-feature">
                <div> <span class="icon-wrap"><img src="images/icons/feature/3.png"></span></div>
                <div class="text-wrap">
                <h5 class="title">Sutka davomida 24/7 </h5>
                <p>Qisqacha matn bu afzallik turi haqida, lorem ipsum demo text is here always</p>
                </div>
            </figure>
            </div> <!-- col.// -->
        </div> <!-- row.// -->

        </div> <!-- container.// -->
        </section> 
        <!-- ========================= SECTION FEATURE .//END ========================= -->





        <!-- ========================= SECTION FAQ ========================= -->
        <Faq/>
        <!-- ========================= SECTION FAQ .//END ========================= -->





        <!-- ========================= SECTION BLOG ========================= -->
        <Articles/>
        <!-- ========================= SECTION BLOG .//END ========================= -->




        <!-- ========================= SECTION APP ========================= -->
        <section class="section-content padding-top bg">
        <div class="container">
        <div class="row">
            <div class="col-lg-7"> 
            <header class="section-heading">
                <h2 class="title-section text-dark">Mobil ilovada barcha doktorlar  <br> qo'l ostingizda</h2>
                <i class="line"></i>
            </header><!-- sect-heading -->
            <p>Mobil dastur linkini sms qilib jo’natamiz</p>
            <form class="form-inline form-app-sms">
                <select class="form-control code-country">
                    <option>+998</option>
                    <option>+997</option>
                    <option>+997</option>
                </select>
                <input type="text" class="form-control number-phone" name="" placeholder="kod - telefon">
                <button class="btn btn-primary btn-rect"> Jo'natish </button>

            </form>

            <div class="btn-app-wrap">
                <a href="" data-toggle="tooltip" title="For Apple products" data-placement="bottom"><img src="images/misc/app1.svg"></a>
                <a href="" data-toggle="tooltip" title="For Android products" data-placement="bottom"><img src="images/misc/app2.svg"></a>
            </div>
            </div> <!-- col.// -->
            <div class="col-lg-5"> 
                <div class="img-mobile-wrap"><img src="images/misc/mobile.png" />
            </div>
            </div> <!-- col.// -->
        </div> <!-- row.// -->

        </div> <!-- container.// -->
        </section> 
        <!-- ========================= SECTION APP .//END ========================= -->




        <!-- ========================= SECTION APP ========================= -->
        <section class="section-content padding-y">
        <div class="container" style="max-width: 980px;">
        <header class="section-heading text-center">
                <h2 class="title-section text-dark">Bizni doimo kuzating</h2>
        </header><!-- sect-heading -->

        <div class="row">
            <div class="col-md col-6"> 
            <a href="#" class="item-social"> <img class="icon" src="images/icons/social/fb.svg"> <span>/askdoctor_oficcial</span></a>    
            </div> <!-- col.// -->
            <div class="col-md col-6"> 
            <a href="#" class="item-social">  <img class="icon" src="images/icons/social/twitter.svg"> <span>/askdoctor_uz</span></a>    
            </div> <!-- col.// -->
            <div class="col-md col-6"> 
            <a href="#" class="item-social">  <img class="icon" src="images/icons/social/insta.svg"> <span>@askdoctor_uz</span></a>    
            </div> <!-- col.// -->
            <div class="col-md col-6"> 
            <a href="#" class="item-social">  <img class="icon"  src="images/icons/social/telegram.svg"> <span>@askdoctor_uz</span></a>    
            </div> <!-- col.// -->
        </div> <!-- row.// -->

        </div> <!-- container.// -->
        </section> 
        <!-- ========================= SECTION APP .//END ========================= -->

    </div>
</template>

<script>
import Slider from "./components/Slider";
import Topic from "./components/Topic";
import Consult from "./components/Consult";
import Faq from "./components/Faq";
import Articles from "./components/Articles";

export default {
  name: "home",
  components: { Slider, Topic, Consult, Faq, Articles }
};
</script>
