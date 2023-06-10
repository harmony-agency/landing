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

// ============ validation ============
$(document).ready(function () {
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
        required: "لطفا نام خود را وارد کنید",
      },
      phoneNumber: {
        required: "لطفا شماره تماس خود را وارد کنید",
        minlength: "شماره تماس وارد شده معتبر نیست",
        maxlength: "شماره تماس وارد شده معتبر نیست",
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
        required: "لطفا  کد ارسال شده  را وارد کنید",
        minlength: " کد وارد شده معتبر نیست",
        maxlength: " کد وارد شده معتبر نیست",
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
      myCountDown();
      $(".errorValidate").hide();
      $(".form.step1").hide();
      $(".form.step2").fadeIn();
      $(".enteredPhone").html($("#phoneNumber").val());
    } else {
      $(".duplicate_number").fadeIn();
      $(".errorValidate").show();
      $(".errorValidate").html(data["message"]);
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
      $(".errorValidateOtp").hide();
      $(".form.step2").hide();
      $(".form.step3").css("display", "flex");
    } else {
      $(".errorValidateOtp").show();
      $(".errorValidateOtp").html(data["message"]);
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

// ============ sendAgain ============
$("#sendAgain").click(function () {
  $("#smsTimer").text("02:00");
  clearInterval(interval);
  myCountDown();
  form_otp();
});

// ============ editMobile ============
$("#editMobile").click(function () {
  $(".form.step2").hide();
  $(".form.step1").fadeIn();
});

// ============ otp timer function ============
var interval;
function myCountDown() {
  clearInterval(interval);
  interval = setInterval(function () {
    var timer = $("#smsTimer").html();
    timer = timer.split(":");
    var minutes = timer[0];
    var seconds = timer[1];
    seconds -= 1;
    if (minutes == 0 && seconds == 0) {
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
