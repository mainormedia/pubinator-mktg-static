// Pubinator marketing site. The page works without this file; it only closes the mobile menu.
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
