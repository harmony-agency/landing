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
      email: {
        required: true,
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
      email: {
        required: "لطفا ایمیل خود را وارد کنید",
      },
    },
    submitHandler: function () {
      form_submit();
    },
  });
});

// ============ form_submit ============
function form_submit() {
  var token = localStorage.getItem("token");
  var formDataSubscriber = {
    fullName: $("#fullName").val(),
    phoneNumber: persianToEnglish($("#phoneNumber").val()),
    subject: $("#subject").val(),
    email: $("#email").val(),
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
    headers: { token: token },
    data: formDataSubscriber,
    dataType: "json",
    encode: true,
  }).done(function (data) {
    if (data["success"] == true) {
      // window.dataLayer = window.dataLayer || [];
      // window.dataLayer.push({
      //   event: "formSubmission",
      // });
      toastr.clear();
      $(".step1").hide();
      $(".step2").fadeIn();
    } else {
      toastr.error(data["message"]);
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
