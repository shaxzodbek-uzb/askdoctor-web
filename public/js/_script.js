
// @koala-append 'semantic-ui/transition'

// jquery ready start
$(document).ready(function() {
  // jQuery code

  // mobile menu
  $('[data-offcanvas]').on('click', function(e) {
    e.preventDefault()
    var offcanvas_id = $(this).attr('data-offcanvas')

    if ($(this).attr('data-overlay') == 'true') {
      $('.screen-overlay').toggleClass('active')
    }

    $(offcanvas_id).toggleClass('show')
  })

  $('.offcanvas-bar .btn-close, .screen-overlay').on('click', function(e) {
    e.preventDefault()
    $('.offcanvas-bar').removeClass('show')
    $('.screen-overlay').removeClass('active')
  })

  $('#btn_search_header').click(function() {
    $('#searchbox').show()
  })

  $('#btn_searchbox_close').click(function(e) {
    e.stopPropagation()
    $('#searchbox').hide()
  })

  $('.list-searchbox li').click(function() {
    searchterm = $(this).text()
    $('#searchinput_header').val(searchterm)
    $('.list-searchbox').hide()
  })
  jQuery(document).on('keyup', function(evt) {
    if (evt.keyCode == 27) {
      $('#searchbox').hide()
    }
  })

  // /////////////// COUNTER UP STATISTICS
  if ($('#counter-stat-wrap').length > 0) {
    var a = 0
    $(window).scroll(function() {
      var oTop = $('#counter-stat-wrap').offset().top - window.innerHeight
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.num-counter').each(function() {
          var $this = $(this)
          var countTo = $this.attr('data-count')
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          },

          {

            duration: 3000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum))
            },
            complete: function() {
              $this.text(this.countNum)
              // alert('finished');
            }

          })
        })
        a = 1
      }
    })
  }

  // //////////////// main cat toggle
  $('.btn-dard-expand').click(function(e) {
    e.preventDefault()
    $('.category-dard').removeClass('minimized')
  })
  $('.btn-dard-minimize').click(function(e) {
    e.preventDefault()
    $('.category-dard').addClass('minimized')
  })

  // //////////////// specialist expand-minimize
  // $('.btn-specialist-expand').click(function(e) {
  //     e.preventDefault();

  //     $('.category-specialist').toggleClass('minimized');

  //     if($('.category-specialist').hasClass('minimized')){
  //         $(this).text("Yanada ko'proq");
  //     }
  //     else{
  //         $(this).text("Kamroq");
  //     }

  // });

  // / accordeon

  if ($('.accordion').length > 0) {
    $('.item-accordion.active').find('.body').slideDown()

    $('.accordion .title').click(function() {
      if ($(this).parent().hasClass('active')) {
        return false
      } else {
        $(this).parent().addClass('active')
        $(this).parent().siblings('.active').removeClass('active')
        $(this).parent().siblings('.item-accordion').find('.body').slideUp()
        $(this).next('.body').slideDown()
      }
    })
  }

  // /////////////// fixed menu on scroll for desctop
  if ($(window).width() > 768) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 40) {
        $('.section-header').addClass('fixed-top')
      } else {
        $('.section-header').removeClass('fixed-top')
      }
    })
  } // end if

  // ////////////////////// Fancybox. /plugins/fancybox/
  if ($('[data-fancybox]').length > 0) { // check if element exists
    $('[data-fancybox]').fancybox()
  } // end if

  // ////////////////////// Bootstrap tooltip
  if ($('[data-toggle="tooltip"]').length > 0) { // check if element exists
    $('[data-toggle="tooltip"]').tooltip()
  } // end if

  // ///////////////////// Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a.page-scroll').click(function() {
    $('.navbar-toggler:visible').click()
  })

  // ////////////////////// Menu scroll to section for landing
  $('a.page-scroll').click(function(event) {
    var $anchor = $(this)
    $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top - 100 }, 1000)
    event.preventDefault()
  })

  $('#qabulga').on('show.bs.collapse', function() {
    $('html, body').animate({ scrollTop: $('.qabul-wrap').offset().top - 50 }, 1000)
    // alert($('#qabulga').offset().top)
  })

  // ///////////////  items slider. /plugins/slickslider/
  if ($('.slick-slider').length > 0) { // check if element exists
    $('.slick-slider').slick()
  } // end if

  // ///////////////  items slider. /plugins/slickslider/
  if ($('.slick-intro').length > 0) { // check if element exists
    $('.slick-intro').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      slidesToScroll: 1,
      arrows: false
    })
  } // end if
})
// jquery end

