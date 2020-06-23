const ClipboardJS = require('clipboard');

jQuery.noConflict();

(function($, PLUGIN_ID) {
  kintone.events.on('app.record.index.show', function() {
    const config = kintone.plugin.app.getConfig(PLUGIN_ID);

    const spaceElement = kintone.app.getHeaderSpaceElement();
    const fragment = document.createDocumentFragment();
    const headingEl = document.createElement('h3');
    const messageEl = document.createElement('p');

    messageEl.classList.add('plugin-space-message');
    messageEl.textContent = config.message;
    headingEl.classList.add('plugin-space-heading');
    headingEl.textContent = 'Hello kintone plugin desktop!';

    fragment.appendChild(headingEl);
    fragment.appendChild(messageEl);
    spaceElement.appendChild(fragment);
  });
})(jQuery, kintone.$PLUGIN_ID);
