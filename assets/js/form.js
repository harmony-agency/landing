// ============ otp inputs ============
let el1 = "",
  el2 = "",
  el3 = "";
el4 = "";
el_sum = "";
$("input#ist").keyup(function () {
  el1 = $(this).val().substr(0, 2);
  buildel4();
});
$("input#sec").keyup(function () {
  el2 = $(this).val().substr(0, 2);
  buildel4();
});
$("input#third").keyup(function () {
  el3 = $(this).val().substr(0, 2);
  buildel4();
});
$("input#fourth").keyup(function () {
  el4 = $(this).val().substr(0, 2);
  buildel4();
});
function buildel4() {
  let el_sum = el1 + el2 + el3 + el4;
  $("input#confirm").attr("value", el_sum);
}
function clickEvent(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}

function toasterOptions() {
  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: true,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
}

// ============ validation ============
$(document).ready(function () {
  toasterOptions();

  //subscribers validate
  $("#subscribers").validate({
    // initialize the plugin
    rules: {
      fullName: {
        required: true,
      },
      phoneNumber: {
        required: true,
        minlength: 11,
        maxlength: 11,
      },
    },
    messages: {
      fullName: {
        required: function () {
          toastr.warning("لطفا نام خود را وارد کنید");
        },
      },
      phoneNumber: {
        required: function () {
          toastr.warning("لطفا شماره تماس خود را وارد کنید");
        },
        minlength: function () {
          toastr.error("شماره تماس وارد شده معتبر نیست");
        },
        maxlength: function () {
          toastr.error("شماره تماس وارد شده معتبر نیست");
        },
      },
    },
    submitHandler: function () {
      form_otp();
    },
  });
  //subscribers_confirm validate
  $("#subscribers_confirm").validate({
    // initialize the plugin
    rules: {
      confirm: {
        required: true,
        minlength: 3,
        maxlength: 4,
      },
    },
    messages: {
      confirm: {
        required: function () {
          toastr.warning("لطفا کد ارسال شده را وارد کنید");
        },
        minlength: function () {
          toastr.error("کد ارسال شده معتبر نیست");
        },
        maxlength: function () {
          toastr.error("کد ارسال شده معتبر نیست");
        },
      },
    },
    submitHandler: function () {
      form_submit();
    },
  });
});

// ============ form_otp ============
function form_otp() {
  var formDataOtp = {
    phone: persianToEnglish($("#phoneNumber").val()),
  };
  $.ajax({
    type: "POST",
    url: "panel/otp.php",
    data: formDataOtp,
    dataType: "json",
    encode: true,
  }).done(function (data) {
    if (data["success"] == true) {
      countdown();
      $(".errorValidate").hide();
      $(".form.step1").hide();
      $(".form.step2").fadeIn();
      $(".enteredPhone").html($("#phoneNumber").val());
    } else {
      toastr.error(" این شماره قبلا وارد شده است");
    }
  });
}

// ============ form_submit ============
function form_submit() {
  var formDataSubscriber = {
    fullName: $("#fullName").val(),
    phoneNumber: persianToEnglish($("#phoneNumber").val()),
    confirm: persianToEnglish($("#confirm").val()),
    utm_source: sessionStorage.getItem("utm_source"),
    utm_campaign: sessionStorage.getItem("utm_campaign"),
    utm_medium: sessionStorage.getItem("utm_medium"),
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
      $(".form.step2").hide();
      $(".form.step3").css("display", "flex");
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

/*===================================== sendAgain =====================================*/
$("#sendAgain").click(function () {
  $(this).hide();
  $("#smsTimer").show();
  $("#smsTimer").text("02:00");
  clearInterval(interval);
  countdown();
  form_otp();
});

/*===================================== editMobile =====================================*/
$("#editMobile").click(function () {
  $(".form.step2").hide();
  $(".form.step1").fadeIn();
  $("#phoneNumber").focus();
});

// ============ otp timer function ============
var interval;
function countdown() {
  clearInterval(interval);
  interval = setInterval(function () {
    var timer = $("#smsTimer").html();
    timer = timer.split(":");
    var minutes = timer[0];
    var seconds = timer[1];
    seconds -= 1;
    if (minutes == 0 && seconds == 0) {
      $("#smsTimer").hide();
      $("#sendAgain").show();
      return;
    } else if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    } else if (seconds < 10 && length.seconds != 2) seconds = "0" + seconds;

    $("#smsTimer").html(minutes + ":" + seconds);

    if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}
