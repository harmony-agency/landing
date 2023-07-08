(function() {
       tinymce.PluginManager.add('cta_mce_box', function( editor, url ) {
           editor.addButton('cta_mce_box', {
                       text: 'ٔNote Box',
                       icon: false,
                       onclick: function() {
                         // change the shortcode as per your requirement
                          editor.insertContent('<div class="note-post"><div class="note-icon">https://harmony.agency/wp-content/uploads/2022/08/note.png</div><p class="title">نکته!</p>متن پیش فرض</div>');
                      }
             });
       });
      //  tinymce.PluginManager.add('cta_mce_btn', function( editor, url ) {
      //      editor.addButton('cta_mce_btn', {
      //                  text: 'CTA Btn',
      //                  icon: false,
      //                  onclick: function() {
      //                    // change the shortcode as per your requirement
      //                     editor.insertContent('<div class="cta-btn"><a class="btn-yellow" href="#">عنوان</a></div>');
      //                 }
      //        });
      //  });
})();

