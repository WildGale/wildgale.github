(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
    $('.menu__links-item').on('click', function() {
      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$('.button').click(function(){
  $(".form").fadeToggle(300);
  $('#bg').fadeToggle(300);
});  
$(document).mouseup(function (e){
    var div = $(".form"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div.hide(300); 
    $('#bg').hide(300);
    }
  });