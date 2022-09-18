$(document).ready(function () {
  $("#subscriber").validate({
    // initialize the plugin
    rules: {
      fullName: {
        required: true,
      },
      phone: {
        required: true,
        minlength: 11,
        maxlength: 11,
      },
      organName: {
        required: true,
      },
      position: {
        required: true,
      },
    },
    messages: {
      fullName: {
        required: "لطفا نام خود را وارد کنید",
      },
      phone: {
        required: "لطفا شماره تماس خود را وارد کنید",
        minlength: "شماره تماس وارد شده معتبر نیست",
        maxlength: "شماره تماس وارد شده معتبر نیست",
      },
      organName: {
        required: "لطفا نام سازمان خود را وارد کنید",
      },
      position: {
        required: "لطفا سمت سازمانی خود را وارد کنید",
      },
    },
    submitHandler: function () {
      form_submit();
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

function form_submit() {
  console.log("data");
  var formDataSubscriber = {
    fullName: $("#subscriber #fullName").val(),
    phone: persianToEnglish($("#subscriber #phone").val()),
    email: $("#subscriber #email").val(),
    utm_source: sessionStorage.getItem("utm_source"),
    utm_campaign: sessionStorage.getItem("utm_medium"),
    utm_medium: sessionStorage.getItem("utm_campaign"),
    utm_term: sessionStorage.getItem("utm_term"),
    utm_content: sessionStorage.getItem("utm_content"),
    referrer: document.referrer,
  };
  $.ajax({
    type: "POST",
    url: "panel/process.php",
    data: formDataSubscriber,
    dataType: "json",
    encode: true,
  }).done(function (data) {
    if (data["success"] == true) {
      // window.dataLayer = window.dataLayer || [];
      // window.dataLayer.push({
      //   event: "formSubmission",
      // });
      $(".error-submit").hide();
      $("#subscriber .caption").hide();
      $("#subscriber").hide();
      $(".result").html(
        "اطلاعات شما ثبت شد<br>کارشناسان ما به زودی با شما تماس خواهند گرفت"
      );
    } else {
      $(".error-submit").show();
      $(".error-submit").html(data["message"]);
    }
  });
}

/*===================================== persianNumbers =====================================*/
var persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ],
  arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
  persianToEnglish = function (str) {
    if (typeof str === "string") {
      for (var i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
      }
    }
    return str;
  };

/*===================================== copy_right =====================================*/
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

/*===================================== stickyHeader =====================================*/
jQuery(function ($) {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100 && $(this).scrollTop() < 2300) {
      $("header").addClass("stickyHeader");
    } else {
      $("header").removeClass("stickyHeader");
    }
  });
});

/*===================================== swiper =====================================*/
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 6,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/*===================================== counter =====================================*/
$(".counter").counterUp({
  delay: 5,
  time: 1000,
});

// Click event for any anchor tag that's href starts with #
$("a").click(function (event) {
  // The id of the section we want to go to.
  var id = $(this).attr("href");

  // An offset to push the content down from the top.
  var offset = 200;

  // Our scroll target : the top position of the
  // section that has the id referenced by our href.
  var target = $(id).offset().top - offset;

  // The magic...smooth scrollin' goodness.
  $("html, body").animate({ scrollTop: target }, 0);

  //prevent the page from jumping down to our section.
  event.preventDefault();
});

/*===================================== Aos animation =====================================*/
AOS.init();