jQuery(function ($) {
    // use jQuery code inside this to avoid "$ is not defined" error
    $(".harmony_ajaxPortfolio").click(function () {

        $('.harmony_ajaxPortfolio').removeClass("active"); 
        $(this).addClass('active');
        $term_id = $(this).data('id');

        var data = {
            'action': 'get_states_by_ajax',
            'term_id': $term_id,
        }

        $.ajax({
            type: "POST",
            url: portfolio_ajax_object.ajaxurl,
            data: data,
            cache: false,
            beforeSend: function(){
                $('.tab-content .row').html('<span class="loader-text">در حال بارگذاری ...</span>');
            },
            success: function(response){
                $('.tab-content .row').html(response);
            }
       });

    });
  });
  