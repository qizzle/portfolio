const greetings = ["hi", "hey", "hallo"];
const tryAgain = ["nothing here yet", "not yet", "someday it'll be here", "check back later"];

const greeting = document.getElementById("greeting");
greeting.innerHTML = greetings[Math.floor(Math.random() * greetings.length)];

window.addEventListener("scroll", function () {
  const div = document.querySelector("#greetingDiv");
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = window.scrollY / maxScroll;
  const newSize = 100 - scrollFraction * 20;
  div.style.width = `${newSize}%`;
  div.style.height = `${newSize}%`;
  div.style.borderRadius = `${scrollFraction * 30}px`;
});

function createHoverText(event, text = "hello world", color = "#4ade80") {
  const successText = document.createElement("p");
  successText.innerHTML = text;
  successText.style.position = "absolute";
  successText.style.color = color;
  successText.style.userSelect = "none";
  successText.style.pointerEvents = "none";
  successText.style.fontSize = "1.5rem";
  successText.style.fontWeight = "bold";
  successText.style.top = `${event.pageY}px`;
  successText.style.left = `${event.pageX}px`;
  successText.style.transition = "transform 0.3s ease, opacity 0.5s ease";
  successText.style.transform = `rotate(${Math.random() * 10}deg)`;
  document.body.appendChild(successText);

  setTimeout(() => {
    successText.style.opacity = "0";
    successText.style.transform += " translateY(-20px)";
  }, 1500);

  setTimeout(() => {
    successText.remove();
  }, 2000);
}

document.getElementById("discordButton").addEventListener("click", (event) => {
  navigator.clipboard.writeText("qschnitzel");
  createHoverText(event, "Copied Discord tag");
});

document.getElementById("bothostco").addEventListener("click", (event) => {
  createHoverText(event, tryAgain[Math.floor(Math.random() * tryAgain.length)], "#ff0000");
});

document.getElementById("lumin").addEventListener("click", (event) => {
  createHoverText(event, tryAgain[Math.floor(Math.random() * tryAgain.length)], "#ff0000");
});
