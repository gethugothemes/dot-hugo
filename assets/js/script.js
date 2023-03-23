(function () {
  'use strict';

  // searchToggler keyboard shortcut
  const searchToggler = document.querySelectorAll('[data-search-toggler]');
  searchToggler.forEach((item) => {
    let userAgentData = navigator?.userAgentData?.platform || navigator?.platform || 'unknown';

    if (userAgentData == 'macOS') {
      item.innerText = `⌘ + K`
    } else {
      item.innerText = `Ctrl + K`
    }
  });

})();
