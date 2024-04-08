var winCriteria = 6;
var gridRows = 4;
var gridCols = 4;
var tileProbability = 0.5;
var twoProbability = 0.15;
function showRules()
{
  var text = document.getElementById("rules");
  if(text.innerHTML == "")
  {
    text.innerHTML = "The objective of the game is to create the " + winCriteria + " tile. </br>Tiles can be moved horizontally, vertically, and diagonally within the " + gridRows + " x " + gridCols + " grid using the following controls: </br> &emsp; W: Up, A: Left, S: Down, D: Right </br> &emsp; T: Up+Left, G: Down+Left, H: Down+Right, Y: Up+Right </br> Four tiles with the same value can be merged with a diagonal move when they are arranged in a 2x2 square, which increments their value by 1. </br> Random probability determines whether a new tile will spawn after each move, and whether that new tile will have an initial value of 1 or 2. </br> The game ends when no more moves are possible. </br> The following keys have additional functions: </br> &emsp; R: Restart the game </br> &emsp; Q: Quit the game";
  }
  else
  {
    text.innerHTML = "";
  }
}
function showParameters()
{
  var resetButton = document.getElementById("resetParametersButton");
  resetButton.style.display = "block";
  var defaultText = document.getElementById("defaultParameters");
  defaultText.style.display = "block";
}
function resetParameters()
{
  var resetButton = document.getElementById("resetParametersButton");
  resetButton.style.display = "none";
  var defaultText = document.getElementById("defaultParameters");
  defaultText.style.display = "none";
}
