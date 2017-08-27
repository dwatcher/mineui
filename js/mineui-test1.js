;$(function() {
  init();

  $('.mineui-input-radio').click(function() {
    $(this).parent().find('.mineui-input-radio').removeClass('mineui-input-radio-checked').prev();
    $(this).parent().find('.mineui-input-radio > i').removeClass('mineui-anim-scaleSpring');
    $('input[type="radio"]').parent().find('input[type="radio"]').removeAttr('checked');

    $(this).addClass('mineui-input-radio-checked');
    $(this).find('i').addClass('mineui-anim-scaleSpring');
    $(this).prev().attr('checked','').click();
  });
});

function init() {
  var radios = $('input[type="radio"]');
  var templet = '<div class="mineui-input-radio"><i></i><span>[input.value]</span></div>';
  for (var i = 0; i < radios.length; i++) {
    var radio = templet.replace('[input.value]', radios.eq(i).val());
    radio = radios.eq(i).after(radio);
  }
}
