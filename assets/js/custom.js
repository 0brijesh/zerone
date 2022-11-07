// header js start
$(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $("header").addClass("fixed");
    }
    else{
        $("header").removeClass("fixed");
    }
})
// header js end
// client review drops js start
$(document).ready(function() {
    $('.owl-carousel-company-logo').owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      nav: false,
      dots: false,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 2,
          nav: true,
          margin: 10,
        },
        400: {
          items: 3,
          nav: true,
          margin: 10,
        },
        600: {
          items: 3,
          nav: true,
        },
        768: {
          items: 4,
          nav: true,
        },
        1200: {
          items: 7,
        },
        1600: {
          items: 9,
        }
      }
    })
  })
// client review drops js end
// case-studies js start
$(document).ready(function() {
  $('.owl-carousel-case-studies').owlCarousel({
    loop: true,
    margin: 17,
    responsiveClass: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        loop: false,
        nav: true
      },
      600: {
        items: 2,
        nav: true,
        loop: false,
      },
      992: {
        items: 2.5,
        nav: true,
        loop: false,
        margin: 35,
      },
      1200: {
        items: 3,
        loop: false,
        margin: 30,
        margin: 57,
      },
      1600: {
        items: 3,
        loop: false,
        margin: 57,
      }
    }
  })
})
// case-studies js end
// client-review js start
$(document).ready(function() {
  $('.owl-carousel-client-review').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      992: {
        items: 2,
        nav: true,
      },
      1200: {
        items: 2,
      },
    }
  })
})
// case-studies js end
// mobile menu js start
$(document).ready(function () {
  $(".mobile-menu-ico").click(function () {
    $(".mobile-menu-wrap").addClass("mobile-menu-wrap-show");
  });

  $(".close-ico").click(function () {
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  });
});

$(document).mouseup(function (e) {
  var popup = $(".mobile-menu-wrap");
  if (!$(".mobile-menu-ico").is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
    popup.removeClass("mobile-menu-wrap-show");
  }
});
$(document).ready(function(){
  $(".list-menu .link").click(function(){
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  })
})
// mobile menu js end
// scroll top content (on click header menu option) start
$(document).ready(function() {
                
  $('.link').on('click', function(e){
  
  var hash = $(this).attr('href');
  $('html,body').animate({
      scrollTop: $(hash).offset().top()
  }, 800);
  
  return false;
  });
});
// scroll top content (on click header menu option) end