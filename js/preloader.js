// Wait for the page to fully load
window.addEventListener("load", () => {
  // Get the preloader element
  const preloader = document.getElementById("preloader");
  const progressElement = document.getElementById("progress");

  // Set initial progress
  let progress = 1;

  // Start count-up animation
  const countUpAnimation = setInterval(() => {
    progressElement.textContent = `${progress}%`;
    progress++;
    if (progress > 100) {
      clearInterval(countUpAnimation);
      // Wait for 1 second after count-up animation completes
      setTimeout(() => {
        // Add a class to the preloader to trigger the dissolve animation
        preloader.classList.add("fade-out");
        preloader.addEventListener("animationend", () => {
          // Hide the preloader once the dissolve animation is complete
          preloader.style.display = "none";
        });
      }, 1000); // Adjust the delay duration as needed
    }
  }, 20); // Adjust the duration as needed
});
