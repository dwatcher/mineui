$(function() {
  initSelect();
  $('.mineui-select').click(selectClickEvent);
});

function initSelect() {
  var selects = $('.mineui-input-block select');
  var templet = '<div class="mineui-select">' +
                  '<div class="mineui-select-title">' +
                    '<input type="text" name="" value="">' +
                  '</div>' +
                  '<dl class="mineui-anim-upbit"></dl>' +
                '</div>';
  var templetDd = '<dd value="[select.number]">[select.value]</dd>';
  for (var i = 0; i < selects.length; i++) {
    var select = selects.eq(i).after(templet).next('div');
    var dl = select.find('dl');
    var options = selects.eq(i).find('option');
    for (var i = 0; i < options.length; i++) {
      var dd = templetDd.replace('[select.number]', options.eq(i).val()).replace('[select.value]', options.eq(i).text());
      dl.append($(dd));
    }
  }
}

function selectClickEvent(e) {
  var select = $(this);
  var eventTarget = $(e.target);
  if (eventTarget.is('dd')) {
    select.find('.mineui-select-title input').val(eventTarget.text());
    var options = select.prev('select').find('option');
    for (var i = 0; i < options.length; i++) {
      var option = options.get(i);
      if (option.value == eventTarget.attr('value')) {
        option.selected = true;
      }
    }
  }
  if (select.hasClass('mineui-select-checked')) {
    select.removeClass('mineui-select-checked');
  } else {
    select.addClass('mineui-select-checked');
  }
}
