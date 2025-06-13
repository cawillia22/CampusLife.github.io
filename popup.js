// Runs AFTER the full page (images, css, etc.) is loaded.
window.addEventListener('load', () => {
  const popup    = document.getElementById('popup-overlay');
  const closeBtn = document.getElementById('popup-close');

  // 1) Show once per session
  if (popup && !sessionStorage.getItem('popupSeen')) {
    popup.classList.remove('hidden');
    sessionStorage.setItem('popupSeen', 'true');
  }

  // 2) Hide on button click
  if (popup && closeBtn) {
    closeBtn.addEventListener('click', () => popup.classList.add('hidden'));
  }
});
