window.addEventListener('load', () => {
  const popup    = document.getElementById('popup-overlay');
  const closeBtn = document.getElementById('popup-close');

  // show the popup once per session
  if (popup && !sessionStorage.getItem('popupSeen')) {
    popup.classList.remove('hidden');
    sessionStorage.setItem('popupSeen', 'true');
  }

  // close handler
  if (popup && closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.add('hidden');
    });
  }
});
