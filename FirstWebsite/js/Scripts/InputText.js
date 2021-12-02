window.onload = () =>
{
  document.getElementById("fancy-input").addEventListener("input", changeText)
}

function changeText() {
  let p = document.getElementById("fancy-p")
  p.innerHTML = this.value
}
