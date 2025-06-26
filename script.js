document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simulated form submission
      // Optional: Add localStorage or tracking here
      // GTM placeholder: form_submitted

      window.location.href = "confirm.html";
    });
  }
});
