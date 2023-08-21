$(document).ready(function () {
  // console.log("HTML document has been loaded");
  $.ajax("panel/security.php", {
    dataType: "json", // type of response data
    data: { token: true },
    success: function (data) {
      // success callback function
      if (data["status"] == true) {
        localStorage.setItem("token", data["token"]);
      }
    },
    error: function (errorMessage) {
      // error callback
      console.log(errorMessage);
    },
  });
});

(function ($) {
  $.QueryString = (function (a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
      var p = a[i].split("=");
      if (p.length != 2) continue;
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  })(window.location.search.substr(1).split("&"));
})(jQuery);

var utm_source = jQuery.QueryString["utm_source"];
var utm_medium = jQuery.QueryString["utm_medium"];
var utm_campaign = jQuery.QueryString["utm_campaign"];
var utm_term = jQuery.QueryString["utm_term"];
var utm_content = jQuery.QueryString["utm_content"];

if (location.search != "") {
  // query string exists
  sessionStorage.setItem("utm_source", utm_source);
  sessionStorage.setItem("utm_medium", utm_medium);
  sessionStorage.setItem("utm_campaign", utm_campaign);
  sessionStorage.setItem("utm_term", utm_term);
  sessionStorage.setItem("utm_content", utm_content);
}

/*===================================== stickyHeader =====================================*/
jQuery(function ($) {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $("header").addClass("stickyHeader");
    } else {
      $("header").removeClass("stickyHeader");
    }
  });
});

/*===================================== Aos =====================================*/
AOS.init();

/*===================================== copy_right =====================================*/
// hover for copy right
$(".copyright a").hover(
  function () {
    let logo = $(".copyright .hover-company");
    logo.addClass("active");
  },
  function () {
    let logo = $(".copyright .hover-company");
    logo.removeClass("active");
  }
);

/*===================================== a href behavior =====================================*/
$("a").click(function (event) {
  // The id of the section we want to go to.
  var id = $(this).attr("href");

  // An offset to push the content down from the top.
  var offset = 100;

  // Our scroll target : the top position of the
  // section that has the id referenced by our href.
  var target = $(id).offset().top - offset;

  // The magic...smooth scrollin' goodness.
  $("html, body").animate({ scrollTop: target }, 100);

  //prevent the page from jumping down to our section.
  event.preventDefault();
});

/*===================================== swiper =====================================*/
var testimonial_Swiper = new Swiper(".testimonial_Swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  speed: 2000,
  preventClicks: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

$(window).on("load", function () {
  // console.log("all content (e.g. images) has been loaded.");
});

/*===================================== swiper =====================================*/
var litr_swiper = new Swiper(".litr_swiper", {
  spaceBetween: 20,
  loop: true,
  speed: 2000,
  allowTouchMove: false,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: ".litr_box .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".litr_box .swiper-button-next",
    prevEl: ".litr_box .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    1400: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

var glass_swiper = new Swiper(".glass_swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  speed: 2000,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: ".litr_box .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".glass_box .swiper-button-next",
    prevEl: ".glass_box .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    1400: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

var cc_swiper = new Swiper(".cc_swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  speed: 2000,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: ".litr_box .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".cc_box .swiper-button-next",
    prevEl: ".cc_box .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    1400: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

$(document).ready(function () {
  $("#products .swiper-slide").click(function (event) {
    let product_selected = $(this).find(".slide_content").data("value");

    get_info(product_selected);

    let product_img = $(this).find(".product_img").attr("src");
    let product_name = $(this).find(".product_name").text();
    let product_category = $(this).find(".product_category").text();
    $("#informationModal .product_img").attr("src", product_img);
    $("#informationModal .product_name").html(product_name);
    $("#informationModal .product_category").html(product_category);
  });

  function get_info(product_selected) {
    let data = {
      data_id: product_selected,
    };
    $.ajax({
      type: "POST",
      url: "./panel/api/getData.php",
      dataType: "json",
      data: data,
      encode: true,
    }).done(function (data) {
      const response = JSON.stringify(data);
      var obj = $.parseJSON(response);
      $(".product_description").html(obj[0].description);
      $(".product_package").html(obj[0].category);
      $(".product_property").html(obj[0].property);
      // value table
      $(".calories_value").html(obj[0].calories);
      $(".cholesterol_value").html(obj[0].cholesterol);
      $(".sodium_value").html(obj[0].sodium);
      $(".potassium_value").html(obj[0].potassium);
      $(".carbohydrate_value").html(obj[0].carbohydrate);
      $(".protein_value").html(obj[0].protein);
      $(".fat_value").html(obj[0].fat);
    });
  }
});
