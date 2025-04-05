document.addEventListener("DOMContentLoaded", function () {
  // Enable dark mode by default
  document.body.classList.add("dark-mode");

  // Add theme toggle button
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Switch to Light Mode";
  toggleButton.className = "theme-toggle";
  toggleButton.style.cssText = `
    position: fixed;
    top: 80px;
    right: 30px;
    z-index: 999;
    padding: 10px 15px;
    background: #f39c12;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;
  document.body.appendChild(toggleButton);

  // Toggle dark/light mode
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode")
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  });

  // Smooth scroll
  document.querySelectorAll('nav a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
