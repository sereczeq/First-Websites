
let minInput, maxInput

var quit = false

function firstLoop() {
  alert("Now you will have to go through some clicking")
  while (true) {
    if (confirm("Do you want to stop this loop?")) break
  }
}

function secondLoop() {
  setTimeout(() => {
    if (quit) return
    quit = confirm("This alert will appear every 10 seconds")
  }, 10_000)
}

function setupButton() {
  minInput = document.getElementById("min-input");

  maxInput = document.getElementById("max-input");

  let button = document.getElementById("generate-button")
  button.addEventListener("click", () => {
    let random = Math.random();
    random *= Number(maxInput.value) - Number(minInput.value) + 1;
    random += Number(minInput.value);
    random = Math.floor(random);
    document.getElementById("generated-number").innerText = random.toString();
  })
}

window.onload = () => {

  setupButton();
  firstLoop();
  secondLoop();

}
