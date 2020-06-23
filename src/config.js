jQuery.noConflict();

(function($, PLUGIN_ID) {
  const $form = $('.js-submit-settings');
  const $cancelButton = $('.js-cancel-button');
  const $selector = $('.js-text-selector');
  const config = kintone.plugin.app.getConfig(PLUGIN_ID);

  if (config.selector) {
    $selector.val(config.selector);
  }
  $form.on('submit', function(e) {
    e.preventDefault();
    kintone.plugin.app.setConfig({
      selector: $selector.val(),
    }, function() {
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  });
  $cancelButton.on('click', function() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  });
})(jQuery, kintone.$PLUGIN_ID);
