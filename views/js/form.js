/* stylowanie elementów -> https://cloudfour.com/thinks/styling-form-elements/ */

$('.select').each(function(){
  var $element = $(this);
  var $select = $element.find('select');
  var $value = $element.find('.select-value');
  $select.on({
    'change keyup': function () {
      $value.text($select.val());
    },

    'focus': function () {
      $element.addClass('focus');
    },

    'blur': function () {
      $element.removeClass('focus');
    }
  });
  $select.trigger('change');
});