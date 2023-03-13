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
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 500 && $(this).scrollTop() < 6000) {
    $("header").addClass("stickyHeader");
  } else {
    $("header").removeClass("stickyHeader");
  }
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

// /*===================================== timer =====================================*/
// var timeInSecs;
// var ticker;

// function startTimer(secs) {
//   timeInSecs = parseInt(secs);
//   ticker = setInterval("tick()", 1000);
// }

// function tick() {
//   var secs = timeInSecs;
//   if (secs > 0) {
//     timeInSecs--;
//   } else {
//     clearInterval(ticker);
//     startTimer(48 * 60 * 60); // 4 minutes in seconds
//   }

//   // var days = Math.floor(secs / 86400);
//   // secs %= 86400;
//   var hours = Math.floor(secs / 3600);
//   secs %= 3600;
//   var mins = Math.floor(secs / 60);
//   secs %= 60;
//   var pretty =
//     // (days < 10 ? "0" : "") +
//     // days +
//     // ":" +
//     (hours < 10 ? "0" : "") +
//     hours +
//     ":" +
//     (mins < 10 ? "0" : "") +
//     mins +
//     ":" +
//     (secs < 10 ? "0" : "") +
//     secs;

//   document.getElementById("countdown").innerHTML = pretty;
// }

// startTimer(48 * 60 * 60);

// The data/time we want to countdown to
var countDownDate = new Date("March 15, 2023 00:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  // var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Result is output to the specific element
  // document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    // document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
    // document.getElementById("end").innerHTML = "Ų²Ł…Ų§Ł† ŲØŁ‡ Ų§ŲŖŁ…Ų§Ł… Ų±Ų³ŪŲÆŁ‡!";
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

/*===================================== testimonial audios =====================================*/

$(document).ready(function () {
  var audio1 = "./assets/sounds/audio1.wav";
  var audio2 = "./assets/sounds/audio2.wav";
  var audio3 = "./assets/sounds/audio3.wav";
  var audio4 = "./assets/sounds/audio4.wav";
  var audio5 = "./assets/sounds/audio5.wav";
  var wavesurferaudio1 = WaveSurfer.create({
    container: "#waveform1",
    waveColor: "#B9B9B9",
    progressColor: "#364FC7",
    xhr: {
      cache: "default",
      mode: "cors",
      method: "GET",
      credentials: "include",
      headers: [
        { key: "cache-control", value: "no-cache" },
        { key: "pragma", value: "no-cache" },
      ],
    },
  });
  var wavesurferaudio2 = WaveSurfer.create({
    container: "#waveform2",
    waveColor: "#B9B9B9",
    progressColor: "#364FC7",
    xhr: {
      cache: "default",
      mode: "cors",
      method: "GET",
      credentials: "include",
      headers: [
        { key: "cache-control", value: "no-cache" },
        { key: "pragma", value: "no-cache" },
      ],
    },
  });
  var wavesurferaudio3 = WaveSurfer.create({
    container: "#waveform3",
    waveColor: "#B9B9B9",
    progressColor: "#364FC7",
    xhr: {
      cache: "default",
      mode: "cors",
      method: "GET",
      credentials: "include",
      headers: [
        { key: "cache-control", value: "no-cache" },
        { key: "pragma", value: "no-cache" },
      ],
    },
  });
  var wavesurferaudio4 = WaveSurfer.create({
    container: "#waveform4",
    waveColor: "#B9B9B9",
    progressColor: "#364FC7",
    xhr: {
      cache: "default",
      mode: "cors",
      method: "GET",
      credentials: "include",
      headers: [
        { key: "cache-control", value: "no-cache" },
        { key: "pragma", value: "no-cache" },
      ],
    },
  });
  var wavesurferaudio5 = WaveSurfer.create({
    container: "#waveform5",
    waveColor: "#B9B9B9",
    progressColor: "#364FC7",
    xhr: {
      cache: "default",
      mode: "cors",
      method: "GET",
      credentials: "include",
      headers: [
        { key: "cache-control", value: "no-cache" },
        { key: "pragma", value: "no-cache" },
      ],
    },
  });
  wavesurferaudio1.load(audio1);
  wavesurferaudio2.load(audio2);
  wavesurferaudio3.load(audio3);
  wavesurferaudio4.load(audio4);
  wavesurferaudio5.load(audio5);

  $(".btn_player1").on("click", function () {
    if (wavesurferaudio1.isPlaying()) {
      $(".pause_icon1").hide();
      $(".play_icon1").show();
      wavesurferaudio1.pause();
      wavesurferaudio2.pause();
      wavesurferaudio3.pause();
      wavesurferaudio4.pause();
      wavesurferaudio5.pause();
    } else {
      if (wavesurferaudio2.isPlaying()) {
        wavesurferaudio2.pause();
        $(".play_icon2").show();
        $(".pause_icon2").hide();
      }
      if (wavesurferaudio3.isPlaying()) {
        wavesurferaudio3.pause();
        $(".play_icon3").show();
        $(".pause_icon3").hide();
      }
      if (wavesurferaudio4.isPlaying()) {
        wavesurferaudio4.pause();
        $(".play_icon4").show();
        $(".pause_icon4").hide();
      }
      if (wavesurferaudio5.isPlaying()) {
        wavesurferaudio5.pause();
        $(".play_icon5").show();
        $(".pause_icon5").hide();
      }
      wavesurferaudio1.play();
      $(".play_icon1").hide();
      $(".pause_icon1").show();
    }
  });

  $(".btn_player2").on("click", function () {
    if (wavesurferaudio2.isPlaying()) {
      $(".pause_icon2").hide();
      $(".play_icon2").show();
      wavesurferaudio1.pause();
      wavesurferaudio2.pause();
      wavesurferaudio3.pause();
      wavesurferaudio4.pause();
      wavesurferaudio5.pause();
    } else {
      if (wavesurferaudio1.isPlaying()) {
        wavesurferaudio1.pause();
        $(".play_icon1").show();
        $(".pause_icon1").hide();
      }
      if (wavesurferaudio3.isPlaying()) {
        wavesurferaudio3.pause();
        $(".play_icon3").show();
        $(".pause_icon3").hide();
      }
      if (wavesurferaudio4.isPlaying()) {
        wavesurferaudio4.pause();
        $(".play_icon4").show();
        $(".pause_icon4").hide();
      }
      if (wavesurferaudio5.isPlaying()) {
        wavesurferaudio5.pause();
        $(".play_icon5").show();
        $(".pause_icon5").hide();
      }
      wavesurferaudio2.play();
      $(".play_icon2").hide();
      $(".pause_icon2").show();
    }
  });

  $(".btn_player3").on("click", function () {
    if (wavesurferaudio3.isPlaying()) {
      $(".pause_icon3").hide();
      $(".play_icon3").show();
      wavesurferaudio1.pause();
      wavesurferaudio2.pause();
      wavesurferaudio3.pause();
      wavesurferaudio4.pause();
      wavesurferaudio5.pause();
    } else {
      if (wavesurferaudio1.isPlaying()) {
        wavesurferaudio1.pause();
        $(".play_icon1").show();
        $(".pause_icon1").hide();
      }
      if (wavesurferaudio2.isPlaying()) {
        wavesurferaudio2.pause();
        $(".play_icon2").show();
        $(".pause_icon2").hide();
      }
      if (wavesurferaudio4.isPlaying()) {
        wavesurferaudio4.pause();
        $(".play_icon4").show();
        $(".pause_icon4").hide();
      }
      if (wavesurferaudio5.isPlaying()) {
        wavesurferaudio5.pause();
        $(".play_icon5").show();
        $(".pause_icon5").hide();
      }
      wavesurferaudio3.play();
      $(".play_icon3").hide();
      $(".pause_icon3").show();
    }
  });

  $(".btn_player4").on("click", function () {
    if (wavesurferaudio4.isPlaying()) {
      $(".pause_icon4").hide();
      $(".play_icon4").show();
      wavesurferaudio1.pause();
      wavesurferaudio2.pause();
      wavesurferaudio3.pause();
      wavesurferaudio4.pause();
      wavesurferaudio5.pause();
    } else {
      if (wavesurferaudio1.isPlaying()) {
        wavesurferaudio1.pause();
        $(".play_icon1").show();
        $(".pause_icon1").hide();
      }
      if (wavesurferaudio2.isPlaying()) {
        wavesurferaudio2.pause();
        $(".play_icon2").show();
        $(".pause_icon2").hide();
      }
      if (wavesurferaudio3.isPlaying()) {
        wavesurferaudio3.pause();
        $(".play_icon3").show();
        $(".pause_icon3").hide();
      }
      if (wavesurferaudio5.isPlaying()) {
        wavesurferaudio5.pause();
        $(".play_icon5").show();
        $(".pause_icon5").hide();
      }
      wavesurferaudio4.play();
      $(".play_icon4").hide();
      $(".pause_icon4").show();
    }
  });

  $(".btn_player5").on("click", function () {
    if (wavesurferaudio5.isPlaying()) {
      $(".pause_icon5").hide();
      $(".play_icon5").show();
      wavesurferaudio1.pause();
      wavesurferaudio2.pause();
      wavesurferaudio3.pause();
      wavesurferaudio4.pause();
      wavesurferaudio5.pause();
    } else {
      if (wavesurferaudio1.isPlaying()) {
        wavesurferaudio1.pause();
        $(".play_icon1").show();
        $(".pause_icon1").hide();
      }
      if (wavesurferaudio2.isPlaying()) {
        wavesurferaudio2.pause();
        $(".play_icon2").show();
        $(".pause_icon2").hide();
      }
      if (wavesurferaudio3.isPlaying()) {
        wavesurferaudio3.pause();
        $(".play_icon3").show();
        $(".pause_icon3").hide();
      }
      if (wavesurferaudio4.isPlaying()) {
        wavesurferaudio4.pause();
        $(".play_icon4").show();
        $(".pause_icon4").hide();
      }
      wavesurferaudio5.play();
      $(".play_icon5").hide();
      $(".pause_icon5").show();
    }
  });
});

/*===================================== hover boxes =====================================*/
$("#remember .content_box").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);
$("#remember .content_box.1").hover(
  function () {
    $(this)
      .find(".title")
      .text(
        "چون همه چیزهایی که یاد می‌گیرن رو در مکالمه استفاده می‌کنن, لغات و گرامر ملکه ذهن بچه‌ها می‌شه و هیچوقت اون رو فراموش نمی‌کنن."
      );
  },
  function () {
    $(this)
      .find(".title")
      .text("انگلیسی برامون خیلی فرار بود و لغات و گرامر یادمون نمی‌موند.");
  }
);
$("#remember .content_box.2").hover(
  function () {
    $(this)
      .find(".title")
      .text(
        "حتی از همون جلسه اول , فرزندتون می‌تونه جملات دلخواه خودش رو بسازه و اینطوری اعتماد به نفسش در یادگیری زبان انگلیسی هم بالا می‌ره."
      );
  },
  function () {
    $(this)
      .find(".title")
      .text(
        "حرف زدن به زبان انگلیسی حتی بعد از کلی کلاس و تمرین هم، واسمون آرزو بود."
      );
  }
);
$("#remember .content_box.3").hover(
  function () {
    $(this)
      .find(".title")
      .text(
        "دیگه از اون روخونی‌های حوصله سربر خبری نیست و به جاش بچه‌ها ویدئو‌های اختصاصی و جذاب ویتاک رو تماشا می‌کنن."
      );
  },
  function () {
    $(this)
      .find(".title")
      .text("سر کلاس، بیشتر کارمون روخونی کتاب‌های بی‌فایده و خسته‌کننده بود");
  }
);
$("#remember .content_box.4").hover(
  function () {
    $(this)
      .find(".title")
      .text(
        "با آموزش‌های کاربردی‌ای که توی ویتاک می‌بینن، دیگه کتاب زبان مدرسه برای دلبندانتون خیلی پیش پا افتاده و ساده می‌شه."
      );
  },
  function () {
    $(this)
      .find(".title")
      .text("گرفتن یک نمره خوب از درس زبان انگلیسی توی مدرسه خیلی سخت بود");
  }
);

/*===================================== more info =====================================*/
$(".boxes").click(function () {
  $(".boxes").removeClass("active");
  $(".circle").removeClass("active");
  $(".img_steps").removeClass("active");
  $(this).addClass("active");
  var data_step = $(this).data("step");
  var current_num1 = document.querySelector(
    "[data-number='" + data_step + "']"
  );
  var current_img1 = document.querySelector("[data-img='" + data_step + "']");
  $(current_num1).addClass("active");
  $(current_img1).addClass("active");
});

$(".circle").click(function () {
  $(".circle").removeClass("active");
  $(".boxes").removeClass("active");
  $(".img_steps").removeClass("active");
  $(this).addClass("active");

  var data_number = $(this).data("number");
  var current_step = document.querySelector(
    "[data-step='" + data_number + "']"
  );
  var current_img = document.querySelector("[data-img='" + data_number + "']");
  $(current_step).addClass("active");
  $(current_img).addClass("active");
});
