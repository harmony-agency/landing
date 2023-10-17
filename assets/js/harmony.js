$(document).ready(function () {
  console.log("HTML document has been loaded");
  $.ajax("panel/security.php", {
    dataType: "json", // type of response data
    data: {
      token: true
    },
    success: function (data) {
      // success callback function
      if (data["status"] == true) {
        sessionStorage.setItem('token', data["token"])
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
  $("html, body").animate({
    scrollTop: target
  }, 100);

  //prevent the page from jumping down to our section.
  event.preventDefault();
});

document.body.onload = function () {
  preloadMain();
};
var i = 0;

function preloadMain() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loading_progress");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        $("#preload").fadeOut();
        $("#introduction").fadeIn();
        $("#introduction").css("display", "flex");
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

$(".start_btn_box").on("click", function () {
  $("#introduction").hide();
  $("#membership").fadeIn();
})

particlesJS.load("particles-js", "assets/js/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});