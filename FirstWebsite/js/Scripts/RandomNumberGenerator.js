
let minInput, maxInput

window.onload = () => {

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
