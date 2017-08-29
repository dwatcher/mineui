$(function() {
  initSelect();
  $('.mineui-select').click(selectClickEvent);
});

function initSelect() {

}

function selectClickEvent() {
  var select = $(this);
  if (select.hasClass('mineui-select-checked')) {
    select.removeClass('mineui-select-checked');
  } else {
    select.addClass('mineui-select-checked');
  }
}
