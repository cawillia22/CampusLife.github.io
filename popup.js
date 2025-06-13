document.addEventListener('DOMContentLoaded', function () {
  // Show popup if not already seen this session
  if (!sessionStorage.getItem('popupSeen')) {
    const popup = document.getElementById('popup-overlay');
    if (popup) {
      popup.classList.remove('hidden');
      sessionStorage.setItem('popupSeen', 'true');
    }
  }

  // Handle close button
  const closeBtn = document.getElementById('popup-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      const popup = document.getElementById('popup-overlay');
      if (popup) {
        popup.classList.add('hidden');
      }
    });
  }
});
