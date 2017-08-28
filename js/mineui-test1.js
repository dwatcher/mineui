;$(function() {
  initRadio();

  $('.mineui-radio').click(radioClickEvent);
});

function radioClickEvent() {
  if ($(this).hasClass('mineui-radio-disabled')) { return ; }
  $(this).parent().find('.mineui-radio').removeClass('mineui-radio-checked').prev();
  $(this).parent().find('.mineui-radio > i').removeClass('mineui-anim-scaleSpring');
  $('input[type="radio"]').parent().find('input[type="radio"]').removeAttr('checked');

  $(this).addClass('mineui-radio-checked');
  $(this).find('i').addClass('mineui-anim-scaleSpring');
  $(this).prev().attr('checked','').click();
}

function initRadio() {
  var radios = $('input[type="radio"]');
  var templet = '<div class="mineui-radio"><i></i><span>[input.value]</span></div>';
  for (var i = 0; i < radios.length; i++) {
    var radio = templet.replace('[input.value]', radios.eq(i).val());
    radio = radios.eq(i).after(radio).next('div');
    if (radios.eq(i).attr('disabled')) {
      radio.addClass('mineui-radio-disabled');
    }
  }
}
