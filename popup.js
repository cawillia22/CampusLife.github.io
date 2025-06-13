window.onload = function () {
  if (!sessionStorage.getItem('popupSeen')) {
    document.getElementById('popup-overlay').classList.remove('hidden');
    sessionStorage.setItem('popupSeen', 'true');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const closeBtn = document.getElementById('popup-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      document.getElementById('popup-overlay').classList.add('hidden');
    });
  }
});
