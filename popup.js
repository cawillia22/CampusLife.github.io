// Show popup once per session
window.addEventListener('load', () => {
  const popup = document.getElementById('popup-overlay');
  const closeBtn = document.getElementById('popup-close');

  if (!sessionStorage.getItem('popupSeen')) {
    popup.classList.remove('hidden');
    sessionStorage.setItem('popupSeen', 'true');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popup.classList.add('hidden');
    });
  }
});

// Random event button logic (if you're using it)
function showRandomEvent() {
  const messages = [
    "Movie Night – Thursday at 7pm!",
    "Free Pizza Friday in the Quad!",
    "Club Fair – This Wednesday at noon!",
    "Intramural Sign-Ups close Friday!",
    "Trivia Night – Monday @ Student Center"
  ];
  const pick = Math.floor(Math.random() * messages.length);
  document.getElementById("event-message").textContent = messages[pick];
}
