window.onload = () => {
  const element = document.getElementById("details");
  const random = Math.random();
  element.open = random > 0.5;
}
