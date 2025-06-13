window.addEventListener("load", () => {
  const popup = document.getElementById("popup-overlay");
  const closeBtn = document.getElementById("popup-close");

  if (!sessionStorage.getItem("popupSeen")) {
    popup.classList.remove("hidden");
    sessionStorage.setItem("popupSeen", "true");
  }

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});

// Optional: for your event button
function showRandomEvent() {
  const events = [
    "Movie Night – Thursday at 7pm!",
    "Free Pizza Friday in the Quad!",
    "Club Fair – Wednesday at noon!",
    "Sign up for intramurals!",
    "Trivia Night – Monday in the Student Center!"
  ];
  const randomIndex = Math.floor(Math.random() * events.length);
  document.getElementById("event-message").textContent = events[randomIndex];
}
