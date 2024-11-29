var i = 0;
var text =
  "Once upon a time Ash and his pokemon are supposed to go out on their adventure until Pikachu come back on the house for his favorite thing. Do you know favorite things he needs to find?";
var speed = 50;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("outputStoryGame").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Show the button when the typing effect is finished
    document.getElementById("buttons").classList.remove("hidden");
  }
}

// Add EventListener for buttons
document.getElementById("ketchupButton").addEventListener("click", () => {
  storyTwist("Ketchup");
});

function storyTwist(answer) {
  const resultTwist = document.getElementById("outputTwist");
  const correctTwist = "Ketchup";

  if (answer === correctTwist) {
    resultTwist.textContent = 'You\'re right! His favorite thing is "Ketchup."';
    resultTwist.style.color = "green";
  } else {
    resultTwist.textContent = "Wrong! Try again.";
    resultTwist.style.color = "red";
  }
}

// Start the typewriter effect
typeWriter();
