<template>
	<div>
        <section class="section-faq bg-faq padding-y bg">
        <div class="container">

          <header class="section-heading">
             <h2 class="title-section text-dark">Tez-tez so’ralgan savollar</h2>
             <i class="line"></i>
          </header><!-- sect-heading -->

          <div class="row">
            <div class="col-lg-10">
              

        <div class="faq-wrap accordion">
         <article class="item-accordion active">
          <h5 class="title active"> Doktorlar savolimga qancha vaqtda javob beradilar?  <i class="icon fa fa-chevron-down"></i> </h5>
          <div class="body"> <p>demo text, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal  of letters, as opposed to using 'Content here, content here', making it look like readable English.  </p></div>
         </article>

         <article class="item-accordion">
          <h5 class="title active"> Agar savolimga javob ololmasam pulimni kuyadimi?  <i class="icon fa fa-chevron-down"></i> </h5>
          <div class="body"> <p>demo text, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal  of letters, as opposed to using 'Content here, content here', making it look like readable English.  </p></div>
         </article>

          <article class="item-accordion">
          <h5 class="title active"> Nega xizmat pullik bo'lgan?  <i class="icon fa fa-chevron-down"></i> </h5>
          <div class="body"> <p>demo text, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal  of letters, as opposed to using 'Content here, content here', making it look like readable English.  </p></div>
         </article>

          <article class="item-accordion">
          <h5 class="title active"> Menga dorilar ham yozib berasizmi?   <i class="icon fa fa-chevron-down"></i> </h5>
          <div class="body"> <p>demo text, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal  of letters, as opposed to using 'Content here, content here', making it look like readable English.  </p></div>
         </article>

          <article class="item-accordion">
          <h5 class="title active"> Doktorlar qancha vaqtda savolimga javob beradi?  <i class="icon fa fa-chevron-down"></i> </h5>
          <div class="body"> <p>demo text, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal  of letters, as opposed to using 'Content here, content here', making it look like readable English.  </p></div>
         </article>
        </div>



            </div> <!-- col.// -->
          </div> <!-- row.// -->

        </div> <!-- container.// -->
        </section>
	</div>
<!-- offcanvas-bar.// -->
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
                /// accordeon

           if($(".accordion").length>0){

             $('.item-accordion.active').find('.body').slideDown();
         
             $('.accordion .title').click(function(){
                    if( $(this).parent().hasClass('active') ){
                        return false;
                    } else{
                        $(this).parent().addClass('active');
                        $(this).parent().siblings('.active').removeClass('active');
                        $(this).parent().siblings('.item-accordion').find('.body').slideUp();
                        $(this).next('.body').slideDown();
                    }
                });
           }
        }
    }
</script>