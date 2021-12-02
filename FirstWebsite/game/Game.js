let divs = []
let points = 0;
let nextLetter = "";
let ctrlPressed = false;
let pointsText;
let playingField;
let started = false
document.onkeydown = Press;
document.onkeyup = Release;


window.onload = initGame;



function initGame()
{
  pointsText = document.getElementsByClassName("points-text")[0]
  divs = document.getElementsByClassName("gameObject");
  playingField = document.getElementsByClassName("playing-field")[0]
  playingField.addEventListener("mouseover", StartGame)
  if(confirm("Do you want to play the game?")) StartGame()
}
function StartGame() {
    if(started) return
    started = true
    spreadDivs()
}

function spreadDivs() {

  // -100 so they don't go outside
  const winWidth = playingField.offsetWidth - 100;
  const winHeight = playingField.offsetHeight - 100;
  console.log("Found this many gameObjects:",divs.length)

  for (let i = 0; i < divs.length; i++) {

    const thisDiv = divs[i];
    const randomTop = getRandomNumber(0, winHeight);
    const randomLeft = getRandomNumber(0, winWidth);

    thisDiv.style.top = randomTop + "px";
    thisDiv.style.left = randomLeft + "px";
    thisDiv.style.display = "flex"

  }
}

function getRandomNumber(min, max) {

  return Math.random() * (max - min) + min;
}

function checkRemove(el, isYellow = false)
{
  console.log("pressed")
  if(isYellow)
  {
    if(ctrlPressed)
    {
      remove(el)
    }
    return
  }
  if(ctrlPressed)
  {
    console.log("Ctrl is pressed, not removing")
    return;
  }
  remove(el)
}

function remove(el)
{
  setNextLetter(el)
  console.log("Removing elem")
  el.remove()
  addPoints()
}

function setNextLetter(el)
{
  nextLetter = stringToSingleLetter(el.style.backgroundColor)
  console.log("Next letter:", nextLetter)
}

function onInput(el)
{
  var readLetter = stringToSingleLetter(el.value)
  el.value = ""
  console.log("Read input:", readLetter)
  if (!(readLetter === nextLetter && nextLetter !== "")) {
    console.log("Wrong input, not adding points")
    return;
  }
  nextLetter = ""
  console.log("good input, adding points")
  addPoints()

}

function addPoints()
{
  points++;
  pointsText.innerHTML = "Points: " + points
  console.log("Points:", points)
  if(points === 10)
  {
    alert("You got maximum amount of points")
  }
}

function stringToSingleLetter(string)
{
  return string[0]
}

function Press(e)
{
  const keyPressed = window.event ? event : e;
  if (keyPressed.key === "Control") ctrlPressed = true
}

function Release(e)
{
  const keyPressed = window.event ? event : e;
  console.log(keyPressed.key)
  if (keyPressed.key === "Control"){
    ctrlPressed = false
  }
}
