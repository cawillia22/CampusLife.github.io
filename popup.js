window.addEventListener('load', function () {
  const popup = document.getElementById('popup-overlay');
  const closeBtn = document.getElementById('popup-close');

  if (!sessionStorage.getItem('popupSeen')) {
    if (popup) {
      popup.classList.remove('hidden');
    }
    sessionStorage.setItem('popupSeen', 'true');
  }

  if (closeBtn && popup) {
    closeBtn.addEventListener('click', function () {
      popup.classList.add('hidden');
    });
  }
});
