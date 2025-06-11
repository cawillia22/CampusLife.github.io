const events = [
    "Karaoke Night – Thursday at 7PM!",
    "Free Coffee Friday – Student Lounge, 9AM!",
    "Game Tournament – Saturday at Noon!",
    "Trivia Night – Wednesday at 6PM!",
    "Movie and Popcorn – Friday at 8PM!",
    "Wellness Yoga – Monday at 10AM!"
];

function showRandomEvent() {
    const randomIndex = Math.floor(Math.random() * events.length);
    document.getElementById("event-message").textContent = events[randomIndex];
}
