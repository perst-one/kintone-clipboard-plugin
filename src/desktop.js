const ClipboardJS = require('clipboard');

jQuery.noConflict();

(function($, PLUGIN_ID) {
  const main = () => {
    setTimeout(() => {
      const className = 'po-clip-target';
      const {selector} = kintone.plugin.app.getConfig(PLUGIN_ID);

      for (const element of document.querySelectorAll(selector)) {
        if (!element.classList.contains(className)) {
          element.classList.add(className);
          element.addEventListener('click', () => element.classList.add('copied'));
          element.addEventListener('animationend', () => element.classList.remove('copied'));

          new ClipboardJS(element, {
            text: (trigger) => trigger.innerText,
          });
        }
      }
    }, 0);
  };

  kintone.events.on('app.record.index.show', main);
  kintone.events.on('app.record.index.edit.submit.success', main);
  kintone.events.on('app.record.detail.show', main);
  kintone.events.on('app.record.create.show', main);
  kintone.events.on('app.record.edit.show', main);
})(jQuery, kintone.$PLUGIN_ID);
