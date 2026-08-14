const feedbackForm = document.getElementById("feedback-form");
const thankYouMsg = document.getElementById("feedback-thankyou");

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