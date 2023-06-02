document.addEventListener("DOMContentLoaded", function () {
  const phrase = document.getElementById("phrase");
  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");
  const image = document.getElementById("image");

  phrase.addEventListener("click", function () {
    phrase.textContent =
      "Can you be my BOO and haunt my heart with love and laughter?";
    yesButton.classList.toggle("hidden");
    noButton.classList.toggle("hidden");
  });

  noButton.addEventListener("click", function () {
    const minX = -100; // Minimum X position
    const maxX = 200; // Maximum X position
    const minY = -100; // Minimum Y position
    const maxY = 200; // Maximum Y position

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    // Set button position
    noButton.style.left = randomY + "px";
    noButton.style.top = randomX + "px";
    noButton.style.position = "relative";
  });

  yesButton.addEventListener("click", function () {
    phrase.textContent = "I'm glad you said YES!";
    image.style.display = "block";
  });
});
