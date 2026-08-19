const feedbackForm = document.getElementById("feedback-form");
const thankYouMsg = document.getElementById("feedback-thankyou");
const cakeGrid = document.querySelector(".cake-grid");
const toggleCakesBtn = document.getElementById("toggle-cakes");

function getCakeGridColumns() {
  if (!cakeGrid) return 0;

  return getComputedStyle(cakeGrid).gridTemplateColumns.split(" ").length;
}

function updateCakeVisibility() {
  if (!cakeGrid || !toggleCakesBtn) return;

  const isExpanded = toggleCakesBtn.getAttribute("aria-expanded") === "true";
  const visibleCards = getCakeGridColumns();
  const cards = cakeGrid.querySelectorAll(".cake-card");

  cards.forEach((card, index) => {
    card.classList.toggle("is-hidden", !isExpanded && index >= visibleCards);
  });

  toggleCakesBtn.textContent = isExpanded ? "Show Less" : "See All";
}

if (toggleCakesBtn) {
  toggleCakesBtn.addEventListener("click", () => {
    const isExpanded = toggleCakesBtn.getAttribute("aria-expanded") === "true";
    toggleCakesBtn.setAttribute("aria-expanded", String(!isExpanded));
    updateCakeVisibility();
  });

  window.addEventListener("resize", updateCakeVisibility);
  updateCakeVisibility();
}

feedbackForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(feedbackForm);

  try {
    const response = await fetch(feedbackForm.action, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      feedbackForm.style.display = "none";
      thankYouMsg.style.display = "block";
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
});
