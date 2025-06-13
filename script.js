window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup-overlay");
  const closeBtn = document.getElementById("popup-close");

  if (!sessionStorage.getItem("popupSeen")) {
    popup.classList.remove("hidden");
    sessionStorage.setItem("popupSeen", "true");
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.classList.add("hidden");
    });
  }
});
