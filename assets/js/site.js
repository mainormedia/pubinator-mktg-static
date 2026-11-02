// Pubinator marketing site. The pages work without this file; it only adds small conveniences.
(function () {
  var menu = document.querySelector('.menu');
  if (!menu) return;

  // Close the menu after a link is chosen.
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) menu.removeAttribute('open');
  });

  // Close on Escape and return focus to the toggle.
  menu.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.open) {
      menu.removeAttribute('open');
      menu.querySelector('summary').focus();
    }
  });

  // Close when clicking anywhere else.
  document.addEventListener('click', function (e) {
    if (menu.open && !menu.contains(e.target)) menu.removeAttribute('open');
  });
})();

(function () {
  var params = new URLSearchParams(location.search);

  // Pass campaign tags from the page URL along with the demo form.
  var form = document.getElementById('demo');
  if (form) {
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (key) {
      var field = form.elements[key];
      if (field && params.get(key)) field.value = params.get(key).slice(0, 100);
    });
  }

  // Thanks page: swap in wording for the intent the app redirected with.
  var intent = params.get('intent');
  document.querySelectorAll('[data-intent-text]').forEach(function (el) {
    var parts = el.getAttribute('data-intent-text').split(':');
    if (parts[0] === intent) el.textContent = parts.slice(1).join(':');
  });
})();
