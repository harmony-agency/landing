jQuery(function ($) {
  // use jQuery code inside this to avoid "$ is not defined" error
  $(".harmony_loadmore").click(function () {
    var button = $(this),
      data = {
        action: "loadmore",
        query: harmony_loadmore_params.posts, // that's how we get params from wp_localize_script() function
        page: harmony_loadmore_params.current_page,
      };

    $.ajax({
      // you can also use $.post here
      url: harmony_loadmore_params.ajaxurl, // AJAX handler
      data: data,
      type: "POST",
      beforeSend: function (xhr) {
        button.text("درحال بارگذاری ..."); // change the button text, you can also add a preloader image
      },
      success: function (data) {
        $("html, body").animate(
          {
            scrollTop: $(".harmony_loadmore").offset().top - 250,
          },
          "2000"
        );
        if (data) {
          button.text("مشاهده بیشتر").prev().after(data); // insert new posts
          harmony_loadmore_params.current_page++;

          if (
            harmony_loadmore_params.current_page ==
            harmony_loadmore_params.max_page
          )
            button.remove(); // if last page, remove the button

          // you can also fire the "post-load" event here if you use a plugin that requires it
          // $( document.body ).trigger( 'post-load' );
        } else {
          button.remove(); // if no data, remove the button as well
        }
      },
    });
  });
});
