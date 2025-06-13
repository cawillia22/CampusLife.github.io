function showRandomEvent() {
  const events = [
    "Beach Volleyball Tournament – June 20",
    "Movie Night on the Lawn – June 25",
    "Game Night in the Student Lounge – July 1",
    "Club Fair – July 8",
    "Shark Spirit Pep Rally – July 15"
  ];

  const randomIndex = Math.floor(Math.random() * events.length);
  document.getElementById("event-message").textContent = events[randomIndex];
}
