<template>
  <section class="section-intro">
    <div class="slick-intro">
      <div class="item-slide-intro">
        <span class="bg-shape">
          <img src="images/bg/intro/doctor.png" class="img-intro-doctor">
        </span>
        <div class="container">
          <h1 class="title-intro">
            Ishonchli doktorlar
            <br>bilan onlayn muloqot
          </h1>
          <img src="images/bg/intro/contact-elements.png" class="intro-decor">
        </div>
        <!-- container .//  -->
      </div>
      <!--  slide-item.// -->
      <div class="item-slide-intro">
        <span class="bg-shape" />
        <div class="container">
          <h1 class="title-intro">
            Har doim sizning
            <br>yordamingizga tayyor
          </h1>
          <div class="intro-cpu-wrap">
            <img class="people people1" src="images/bg/intro/people/1.jpg">
            <img class="people people2" src="images/bg/intro/people/2.jpg">
            <img class="people people3" src="images/bg/intro/people/3.jpg">
            <img class="people people4" src="images/bg/intro/people/4.jpg">
            <img class="people people5" src="images/bg/intro/people/5.jpg">
            <img src="images/bg/intro/cpu.png" class="img-intro-cpu">
          </div>
          <img src="images/bg/intro/lemon.png" class="intro-decor">
        </div>
        <!-- container .//  -->
      </div>
      <!--  slide-item.// -->
    </div>
  </section>
  <!-- offcanvas-bar.// -->
</template>

<script>
export default {
  name: 'Slider',
  mounted() {
    window.$('.slick-intro').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      slidesToShow: 1,
      arrows: false
    })
  }
}
</script>
