/* ------------------------------------------------
  Project:   Agencio - Creative Agency And Portfolio HTML5 Template
  Author:    ThemeHt
------------------------------------------------ */
/* ------------------------
    Table of Contents

  1. Predefined Variables
  2. Preloader  
  3. Menu  
  4. FullScreen
  5. Counter
  6. Owl carousel
  7. Magnific Popup
  8. Masonry
  9. Scroll to top
  10. Banner Section
  11. Fixed Header
  12. Scrolling Animation
  13. Text Color, Background Color And Image
  14. Contact Form
  15. ProgressBar
  16. Countdown
  17. NiceSelect
  18. Parallax
  19. Featured
  20. Tilt
  21. InsideText
  22. Particles
  23. Rangeslider
  24. Btn Product
  25. Cart
  26. LightSlider
  27. Mouse Cursor
  28. Wow Animation
  29. HT Window load and functions
  

------------------------ */

"use strict";

/*------------------------------------
  HT Predefined Variables
--------------------------------------*/
var $window = $(window),
    $document = $(document),
    $body = $('body'),
    $fullScreen = $('.fullscreen-banner') || $('.section-fullscreen'),
    $halfScreen = $('.halfscreen-banner');

//Check if function exists
$.fn.exists = function () {
  return this.length > 0;
};


/*------------------------------------
  HT PreLoader
--------------------------------------*/
function preloader() {
   $('#ht-preloader').fadeOut();
};


/*------------------------------------
  HT Menu
--------------------------------------*/
function menu() {
  // Variables
  var $dropdown = $('.dropdown-animate'),
    $dropdownSubmenu = $('.dropdown-submenu [data-toggle="dropdown"]');

  function initSubmenu($this) {
    if (!$this.next().hasClass('show')) {
      $this.parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $submenu = $this.next(".dropdown-menu");
    $submenu.toggleClass('show');
    $submenu.parent().toggleClass('show');
    $this.parents('.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
  }
  // Events
  if ($dropdown.length) {
    $dropdown.on({
      'hide.bs.dropdown': function () {
        hideDropdown($dropdown);
      }
    })
  }
  if ($dropdownSubmenu.length) {
    $dropdownSubmenu.on('click', function (e) {
      initSubmenu($(this))
      return false;
    });
  }

    $('.burger-menu').on('click', function(){
  $('body').toggleClass('menu-open');
});
};



/*------------------------------------
  HT FullScreen
--------------------------------------*/
function fullScreen() {
    if ($fullScreen.exists()) {
        $fullScreen.each(function () {
        var $elem = $(this),
        elemHeight = $window.height();
        if($window.width() < 768 ) $elem.css('height', elemHeight/ 1);
        else $elem.css('height', elemHeight);
        });
        }
        if ($halfScreen.exists()) {
        $halfScreen.each(function () {
        var $elem = $(this),
        elemHeight = $window.height();
        $elem.css('height', elemHeight / 2);
        });
    }
};


/*------------------------------------
  HT Counter
--------------------------------------*/
function counter() {  
  $('.count-number').countTo({
    refreshInterval: 2
  });   
};


/*------------------------------------
  HT Owl Carousel
--------------------------------------*/
function owlcarousel() {
$('.owl-carousel').each( function() {
  var $carousel = $(this);
  $carousel.owlCarousel({
      items : $carousel.data("items"),
      slideBy : $carousel.data("slideby"),
      center : $carousel.data("center"),
      loop : true,
      rtl: true,
      margin : $carousel.data("margin"),
      dots : $carousel.data("dots"),
      nav : $carousel.data("nav"),     
      autoplay : $carousel.data("autoplay"),
      autoplayTimeout : $carousel.data("autoplay-timeout"),
      navText : [ '<span class="fas fa-chevron-left"><span>', '<span class="fas fa-chevron-right"></span>' ],
      responsive: {
        0:{items: $carousel.data('xs-items') ? $carousel.data('xs-items') : 1},
        576:{items: $carousel.data('sm-items')},
        768:{items: $carousel.data('md-items')},
        1024:{items: $carousel.data('lg-items')},
        1200:{items: $carousel.data("items")}
      },
  });
});
};

/*------------------------------------
  HT Magnific Popup
--------------------------------------*/
function magnificpopup() {
$('.popup-gallery').magnificPopup({
    delegate: 'a.popup-img',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });
if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
    });
  }

};   


/*------------------------------------
  HT Masonry
--------------------------------------*/
function masonry() {
  var $masonry = $('.masonry'),
    $itemElement = '.masonry-brick',
    $filters = $('.portfolio-filter');
  if ($masonry.exists()) {
    $masonry.isotope({
      resizable: true,
      itemSelector: $itemElement,
    });
    // bind filter button click
    $filters.on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $masonry.isotope({
        filter: filterValue
      });
    });
  }
};

/*------------------------------------
  HT Scroll to top
--------------------------------------*/
function scrolltop() {
  var pxShow = 300,
    goTopButton = $(".scroll-top")
    // Show or hide the button
  if ($(window).scrollTop() >= pxShow) goTopButton.addClass('scroll-visible');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= pxShow) {
      if (!goTopButton.hasClass('scroll-visible')) goTopButton.addClass('scroll-visible')
    } else {
      goTopButton.removeClass('scroll-visible')
    }
  });
  $('.smoothscroll').on('click', function (e) {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
};


/*------------------------------------
  HT Scrolling Animation
--------------------------------------*/
function scrolling() {
    $('.scroll-down-arrow').on('click', function(event) {
        var $anchor = $(this);
    var hg = $('header').height();
    var scroll_h = $($anchor.attr('href')).offset().top - (hg-30);
        $('html, body').stop().animate({
            scrollTop: scroll_h
        }, 1200);
        event.preventDefault();
    });
};


 /*------------------------------------
  HT Banner Section
--------------------------------------*/
function headerheight() {
  $('.fullscreen-banner .align-center').each(function(){
    var headerHeight=$('.header').height();
    // headerHeight+=15; // maybe add an offset too?
    $(this).css('padding-top',headerHeight+'px');
  });
};


/*------------------------------------
  HT Fixed Header
--------------------------------------*/
function fxheader() {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 300) {
      $('#header-wrap').addClass('fixed-header');
    } else {
      $('#header-wrap').removeClass('fixed-header');
    }
  });
};


/*------------------------------------------
  HT Text Color, Background Color And Image
---------------------------------------------*/
function databgcolor() {
    $('[data-bg-color]').each(function(index, el) {
     $(el).css('background-color', $(el).data('bg-color'));  
    });
    $('[data-text-color]').each(function(index, el) {
     $(el).css('color', $(el).data('text-color'));  
    });
    $('[data-bg-img]').each(function() {
     $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
    });
};


/*------------------------------------
  HT Contact Form
--------------------------------------*/
function contactform() { 
    $('#contact-form').validator();

    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
        var url = "php/contact.php";

        // POST values in the background the the script URL
        $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data)
            {
            // data = JSON object that contact.php returns

            // we recieve the type of the message: success x danger and apply it to the 
            var messageAlert = 'alert-' + data.type;
            var messageText = data.message;

            // let's compose Bootstrap alert box HTML
            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
            
            // If we have messageAlert and messageText
            if (messageAlert && messageText) {
                // inject the alert to .messages div in our form
                $('#contact-form').find('.messages').html(alertBox).show().delay(2000).fadeOut('slow');
                // empty the form
                $('#contact-form')[0].reset();
            }
          }
        });
        return false;
    }
 })    
};


/*------------------------------------
  HT ProgressBar
--------------------------------------*/
function progressbar() {
  var progressBar = $('.progress');
  if (progressBar.length) {
    progressBar.each(function () {
      var Self = $(this);
      Self.appear(function () {
        var progressValue = Self.data('value');
        Self.find('.progress-bar').animate({
          width: progressValue + '%'
        }, 1000);
      });
    })
  }
};


/*------------------------------------
  HT Countdown
--------------------------------------*/
function countdown() {
  $('.countdown').each(function () {
    var $this = $(this),
      finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      $(this).html(event.strftime('<li><span>%-D</span><p>Days</p></li>' + '<li><span>%-H</span><p>Hours</p></li>' + '<li><span>%-M</span><p>Minutes</p></li>' + '<li><span>%S</span><p>Seconds</p></li>'));
    });
  });
};


/*------------------------------------
  HT NiceSelect
--------------------------------------*/
function niceSelect() {
  $('select').niceSelect(); 
}


/*------------------------------------
  HT Parallax
--------------------------------------*/
function parallax() {
  $(".parallaxie").parallaxie({
      speed: 0.4,
      offset: 0,
  });
};


/*------------------------------------
  HT Featured
--------------------------------------*/
function featured() {
  $('.featured-item').mouseenter(function () {
    $('.featured-item.active').removeClass('active');
    $(this).removeClass('.featured-item').addClass('active');
  });
};

/*------------------------------------
  HT Tilt
--------------------------------------*/
function tilt() {
  $('.js-tilt').tilt({})
};


/*------------------------------------
  HT InsideText
--------------------------------------*/
function insideText() {
  var e, i = $(window).height(),
    n = i / 2;
  $(document).scroll(function () {
    e = $(window).scrollTop(), $(".inside-text").each(function () {
      var i = $(this),
        o = i.parent("section"),
        s = o.offset().top;
      i.css({
        top: -(s - e) + n + "px"
      })
    })
  })
};


/*------------------------------------
  HT Particles
--------------------------------------*/
function particles() {
  jQuery("#particles-js").each(function () {
    particlesJS( {
  "particles": {
    "number": {
      "value": 10,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "random"
    },
    "shape": {
      "type": "edge",

      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": !0,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 40,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
  },
  "retina_detect": true
})
  })
}


/*------------------------------------
  HT Rangeslider
--------------------------------------*/
function rangeslider() {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [0, 300],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
};

/*------------------------------------
  HT Btn Product
--------------------------------------*/
function btnproduct() {
  $('.btn-product-up').on('click', function (e) {
    e.preventDefault();
    var numProduct = Number($(this).next().val());
    if (numProduct > 1) $(this).next().val(numProduct - 1);
  });
  $('.btn-product-down').on('click', function (e) {
    e.preventDefault();
    var numProduct = Number($(this).prev().val());
    $(this).prev().val(numProduct + 1);
  });
};


/*------------------------------------
  HT Cart
--------------------------------------*/
function cart() {
  $('#header-cart-btn').on('click', function () {
    $('body').toggleClass('cart-data-open');
  })
};

/*------------------------------------
  HT LightSlider
--------------------------------------*/
function lightSlider() {
   $('#imageGallery').lightSlider({
    gallery:true,
    item:1,
    verticalHeight:450,
    thumbItem:4,
    slideMargin:0,
    speed:600,
    autoplay: true,
    rtl:true
  });  
};

/*------------------------------------
  HT Mouse Cursor
--------------------------------------*/
function mousecursor() {
  if ($("body")) {
    const e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");
    let n, i = 0,
      o = !1;
    window.onmousemove = function (s) {
      o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
    }, $("body").on("mouseenter", "a, .cursor-as-pointer", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
    }), $("body").on("mouseleave", "a, .cursor-as-pointer", function () {
      $(this).is("a") && $(this).closest(".cursor-as-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
    }), e.style.visibility = "visible", t.style.visibility = "visible"
  }
};


/*------------------------------------
  HT Wow Animation
--------------------------------------*/
function wowanimation() {
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
  });
  wow.init();
}


/*------------------------------------
  HT Window load and functions
--------------------------------------*/
$(document).ready(function() {    
    fullScreen(),
    menu(),
    owlcarousel(),
    counter(),
    magnificpopup(),
    scrolltop(),
    scrolling(),
    headerheight(),
    fxheader(),
    databgcolor(),  
    contactform(),
    progressbar(),
    countdown(),
    niceSelect(),
    parallax(),
    featured(),
    tilt(),
    insideText(),
    particles(),
    rangeslider(),
    btnproduct(),
    cart(),
    lightSlider(),
    mousecursor();
});


$window.resize(function() {
});


$(window).on('load', function() {
    preloader(),    
    wowanimation(),
    masonry();
});

