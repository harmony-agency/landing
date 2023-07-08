(function ($) {
  //   $(document).ready(function () {
  //     $("#preloadHarmony").trigger("play");
  //   })

  //   $(window).load(function() {
  //      setTimeout(function () {
  //       $("#preloader").fadeOut();
  //       if ($( "body" ).hasClass('loading')) {
  //         $( "body" ).removeClass( 'loading');
  //       }
  //     }, 2500);
  //  });

  var num = 200; //number of pixels before modifying styles

  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > num) {
      $(".navbar-brand .logo").hide();
      $(".navbar-brand .logo-stiky").show();
      $(".navbar").addClass("fixed");
    } else {
      $(".navbar-brand .logo-stiky").hide();
      $(".navbar-brand .logo").show();
      $(".navbar").removeClass("fixed");
    }
  });
  $(document).ready(function () {
    // $("#navHarmony li").hover(
    //   function () {
    //     $(this).find("ul").fadeIn();
    //   },
    //   function () {
    //     $(this).find("ul").fadeOut();
    //   }
    // );
    $("#fullNav .parent").hover(function () {
      $(".children").each(function () {
        $(this).removeClass("active");
      });
      $(".parent-arrow").each(function () {
        $(this).removeClass("active");
      });
      let parent = $(this).parent();

      parent.find(".parent-arrow").addClass("active");

      parent.find(".children").addClass("active");
    });

    $(".navbar-nav").hover(
      function () {
        $(".navbar-brand .logo").hide();
        $(".navbar-brand .logo-stiky").show();
        $("nav").addClass("changeBg");
      },
      function () {
        $(".navbar-brand .logo-stiky").hide();
        $(".navbar-brand .logo").show();
        $("nav").removeClass("changeBg");
      }
    );

    $("#fullNav .closebtn").click(function () {
      $(".children").each(function () {
        $(this).removeClass("active");
      });
    });

    $("#menuBars").on("click", function () {
      $("#fullNav").css("width", "100%");
      $("body").css("overflow", "hidden");
    });

    $(".closebtn").on("click", function () {
      $("#fullNav").css("width", "0");
      $("body").css("overflow", "auto");
    });
    $(".video-btn").click(function () {
      $(".modal-body iframe").attr("src", $(this).data("src"));
    });
    $("#videoModal").on("hidden.bs.modal", function (e) {
      // do something...
      $(".modal-body iframe").attr("src", "");
    });

    var reviews = new Swiper(".reviewsSwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      speed: 2000,
      pagination: {
        el: ".reviewsSwiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reviewsSwiper .swiper-button-next",
        prevEl: ".reviewsSwiper .swiper-button-prev",
      },
    });

    var campaign = new Swiper(".CampaignSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      loop: true,
      speed: 2000,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 43,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".CampaignSwiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".CampaignSwiper .swiper-button-next",
        prevEl: ".CampaignSwiper .swiper-button-prev",
      },
    });
    var companies_photo_Swiper = new Swiper(".companies_photo_Swiper", {
      slidesPerView: 1.5,
      spaceBetween: 40,
      centeredSlides: true,
      loop: true,
      // autoplay: {
      //   delay: 4500,
      //   disableOnInteraction: false,
      // },
      speed: 2000,
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1.5,
          spaceBetween: 40,
        },
      },
      pagination: {
        el: ".companies_photo_Swiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".companies_photo_Swiper .swiper-button-next",
        prevEl: ".companies_photo_Swiper .swiper-button-prev",
      },
    });
  });
  $(function () {
    $("#button").click(function () {
      $("#button").addClass("onclick", 250, validate);
    });

    function validate() {
      setTimeout(function () {
        $("#button").removeClass("onclick");
        $("#button").addClass("validate", 450, callback);
      }, 2250);
    }
    function callback() {
      setTimeout(function () {
        $("#button").removeClass("validate");
      }, 1250);
    }
  });

  jQuery(document).ready(function ($) {
    $(".navbar-toggler").click(function () {
      if ($("#mobile_menu").is(":visible")) {
        $("html, body").css("overflow", "auto");
      } else {
        $("html, body").css("overflow", "hidden");
      }
      $("#mobile_menu").slideToggle(500);
    });

    $(function () {
      var mobile_menu = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find(".menu-link");
        // Evento
        links.on(
          "click",
          { el: this.el, multiple: this.multiple },
          this.dropdown
        );
      };

      mobile_menu.prototype.dropdown = function (e) {
        var $el = e.data.el;
        ($this = $(this)), ($next = $this.next());

        $next.slideToggle();
        $this.parent().toggleClass("open");
        console.log($this.parent());
        if (!e.data.multiple) {
          $el
            .find(".sub-menu")
            .not($next)
            .slideUp()
            .parent()
            .removeClass("open");
        }
      };

      var mobile_menu = new mobile_menu($("#mobile_menu"), false);
    });
  });
})(jQuery);

function btnMobile(x) {
  x.classList.toggle("change");
}

$(".cat-list_item").on("click", function (e) {
  e.preventDefault();
  $(".cat-list_item").removeClass("active");
  $(this).addClass("active");

  current_cat_list_item_id = $(this).attr("data-id");

  if (current_cat_list_item_id !== "*") {
    $(".tab-item").each(function (key, val) {
      post_ids = $(this).attr("data-id").split(",");
      if ($.inArray(current_cat_list_item_id, post_ids) == -1) {
        $(this).fadeOut();
      } else {
        $(this).fadeIn();
      }
    });
  } else {
    $(".tab-item").fadeIn();
  }
});
