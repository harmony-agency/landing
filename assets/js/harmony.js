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
    if (
      $(this).scrollTop() > $("#call_center").position().top &&
      $(this).scrollTop() < 5000
    ) {
      $("header").addClass("stickyHeader");
    } else {
      $("header").removeClass("stickyHeader");
    }
  });
});

/*===================================== Aos animation =====================================*/
AOS.init();

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

/*===================================== clipboard =====================================*/
$(".copy_code_btn").click(function (event) {
  // Get the text field
  var copyText = document.getElementById("copy_code");

  // Select the text field
  copyText.select();
  //   copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  $(".alert_copy").fadeIn();

  // Alert the copied text
  const myTimeout2 = setTimeout(myGreeting2, 2000);

  function myGreeting2() {
    $(".alert_copy").fadeOut();
  }
});

/*===================================== starter_video =====================================*/
$("#starter_video").click(function () {
  $(".play").fadeOut();
});

$(".play").click(function () {
  $(this).fadeOut();
  $(this).siblings("#starter_video").trigger("play");
});

/*===================================== counter =====================================*/
$(".counter").counterUp({
  delay: 5,
  time: 1000,
});

// The data/time we want to countdown to
var countDownDate = new Date("Oct 15, 2023 00:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Result is output to the specific element
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
  }
}, 1000);

/*===================================== swiper =====================================*/
var testimonial_Swiper = new Swiper(".testimonial_Swiper", {
  slidesPerView: 3,
  spaceBetween: 50,
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
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

/*===================================== click function =====================================*/
$(".callToAction").click(function () {
  console.log("click");
});

/*===================================== hover function =====================================*/
$(".callToAction").hover(
  function () {
    console.log("hover");
  },
  function () {
    console.log("not hover");
  }
);

/*===================================== scripts for mobile =====================================*/
if (window.matchMedia("(max-width: 768px)").matches) {
  console.log("mobile scripts");
}

/*===================================== timer =====================================*/
// The data/time we want to countdown to
var countDownDate = new Date("Jun 21, 2023 00:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Result is output to the specific element
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("mins").textContent = minutes;
  document.getElementById("secs").textContent = seconds;

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").textContent = "";
    document.getElementById("hours").textContent = "";
    document.getElementById("mins").textContent = "";
    document.getElementById("secs").textContent = "";
  }
}, 1000);

$(window).on("load", function () {
  console.log("all content (e.g. images) has been loaded.");
});

$(document).ready(function () {
  console.log("HTML document has been loaded");
});
