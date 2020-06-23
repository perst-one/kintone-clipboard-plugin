jQuery.noConflict();

(function($, PLUGIN_ID) {
  const $form = $('.js-submit-settings');
  const $cancelButton = $('.js-cancel-button');
  const $message = $('.js-text-message');
  const config = kintone.plugin.app.getConfig(PLUGIN_ID);

  if (config.message) {
    $message.val(config.message);
  }
  $form.on('submit', function(e) {
    e.preventDefault();
    kintone.plugin.app.setConfig({
      message: $message.val(),
    }, function() {
      alert('The plug-in settings have been saved. Please update the app!');
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });
  });
  $cancelButton.on('click', function() {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  });
})(jQuery, kintone.$PLUGIN_ID);
