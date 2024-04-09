var winCriteria = 6;
var gridRows = 4;
var gridCols = 4;
var tileProbability = 0.3;
var twoProbability = 0.15;
var hvMoves = true;
var dMoves = true;
flag = true;
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
  var updateButton = document.getElementById("updateParametersButton");
  var updateText = document.getElementById("updateParametersText");
  var text2s = document.getElementsByClassName("rpText2");
  var text3s = document.getElementsByClassName("rpText3");
  var sliders = document.getElementsByClassName("parameterSlider");
  var values = document.getElementsByClassName("sliderValue");
  var checks = document.getElementsByClassName("checkmark");
  if(flag || resetButton.style.display == "none")
  {
    resetButton.style.display = "block";
    updateButton.style.display = "block";
    updateText.style.display = "block";
    for(var i = 0; i < text2s.length; i++)
      text2s[i].style.display = "block";
    for(var i = 0; i < text3s.length; i++)
      text3s[i].style.display = "block";
    for(var i = 0; i < sliders.length; i++)
      sliders[i].style.display = "block";
    for(var i = 0; i < checks.length; i++)
      checks[i].style.display = "block";
    for(var i = 0; i < values.length; i++)
      values[i].style.display = "block";
    flag = false;
  }
  else
  {
    resetButton.style.display = "none";
    updateButton.style.display = "none";
    updateText.style.display = "none";
    for(var i = 0; i < text2s.length; i++)
      text2s[i].style.display = "none";
    for(var i = 0; i < text3s.length; i++)
      text3s[i].style.display = "none";
    for(var i = 0; i < sliders.length; i++)
      sliders[i].style.display = "none";
    for(var i = 0; i < checks.length; i++)
      checks[i].style.display = "none";
    for(var i = 0; i < values.length; i++)
      values[i].style.display = "none";
  }
}
function resetParameters()
{
  var resetButton = document.getElementById("resetParametersButton");
  var defaultText = document.getElementById("defaultParameters");
  var updateButton = document.getElementById("updateParametersButton");
  var updateText = document.getElementById("updateParametersText");
  var text2s = document.getElementsByClassName("rpText2");
  var text3s = document.getElementsByClassName("rpText3");
  var sliders = document.getElementsByClassName("parameterSlider");
  var values = document.getElementsByClassName("sliderValue");
  var checks = document.getElementsByClassName("checkmark");
  resetButton.style.display = "none";
  updateButton.style.display = "none";
  updateText.style.display = "none";
  for(var i = 0; i < text2s.length; i++)
    text2s[i].style.display = "none";
  for(var i = 0; i < text3s.length; i++)
    text3s[i].style.display = "none";
  for(var i = 0; i < sliders.length; i++)
    sliders[i].style.display = "none";
  for(var i = 0; i < checks.length; i++)
    checks[i].style.display = "none";
  for(var i = 0; i < values.length; i++)
    values[i].style.display = "none";
  winCriteria = 6;
  var winSlider = document.getElementById("winSlider");
  winSlider.value = winCriteria;
  var winValue = document.getElementById("winValue");
  winValue.innerHTML = winCriteria;
  gridRows = 4;
  var rowSlider = document.getElementById("rowSlider");
  rowSlider.value = gridRows;
  var rowValue = document.getElementById("rowValue");
  rowValue.innerHTML = gridRows;
  gridCols = 4;
  var colSlider = document.getElementById("colSlider");
  colSlider.value = gridCols;
  var colValue = document.getElementById("colValue");
  colValue.innerHTML = gridCols;
  tileProbability = 0.3;
  var tileSlider = document.getElementById("tileSlider");
  tileSlider.value = tileProbability;
  var tileValue = document.getElementById("tileValue");
  tileValue.innerHTML = tileProbability;
  twoProbability = 0.15;
  var twoSlider = document.getElementById("twoSlider");
  twoSlider.value = twoProbability;
  var twoValue = document.getElementById("twoValue");
  twoValue.innerHTML = twoProbability;
  hvMoves = true;
  var box1 = document.getElementById("hvMoves");
  box1.checked = hvMoves;
  dMoves = true;
  var box2 = document.getElementById("dMoves");
  box2.checked = dMoves;
  defaultText.innerHTML = "The current parameters are: Winning Tile = 6, Board Size = 4 x 4, Spawning a New Tile = 0.3, New Tile Being Value 2 = 0.15. Horizontal and vertical moves are enabled. Diagonal moves are enabled.";
  //restart the game
}
function updateParameters()
{
  var resetButton = document.getElementById("resetParametersButton");
  var defaultText = document.getElementById("defaultParameters");
  var updateButton = document.getElementById("updateParametersButton");
  var updateText = document.getElementById("updateParametersText");
  var text2s = document.getElementsByClassName("rpText2");
  var text3s = document.getElementsByClassName("rpText3");
  var sliders = document.getElementsByClassName("parameterSlider");
  var values = document.getElementsByClassName("sliderValue");
  var checks = document.getElementsByClassName("checkmark");
  resetButton.style.display = "none";
  updateButton.style.display = "none";
  updateText.style.display = "none";
  for(var i = 0; i < text2s.length; i++)
    text2s[i].style.display = "none";
  for(var i = 0; i < text3s.length; i++)
    text3s[i].style.display = "none";
  for(var i = 0; i < sliders.length; i++)
    sliders[i].style.display = "none";
  for(var i = 0; i < checks.length; i++)
    checks[i].style.display = "none";
  for(var i = 0; i < values.length; i++)
    values[i].style.display = "none";
  winCriteria = document.getElementById("winSlider").value;
  gridRows = document.getElementById("rowSlider").value;
  gridCols = document.getElementById("colSlider").value;
  tileProbability = document.getElementById("tileSlider").value;
  twoProbability = document.getElementById("twoSlider").value;
  var text1;
  var text2;
  if(document.getElementById("hvMoves").checked)
  {
    hvMoves = true;
    text1 = " Horizontal and vertical moves are enabled.";
  }
  else
  {
    hvMoves = false;
    text1 = " Horizontal and vertical moves are disabled.";
  }
  if(document.getElementById("dMoves").checked)
  {
    dMoves = true;
    text2 = " Diagonal moves are enabled.";
  }
  else
  {
    dMoves = false;
    text2 = " Diagonal moves are disabled.";
  }
  defaultText.innerText = "The current parameters are: Winning Tile = " + winCriteria + ", Board Size = " + gridRows + " x " + gridCols + ", Spawning a New Tile = " + tileProbability + " , New Tile Being Value 2 = " + twoProbability + text1 + text2;
  //restart the game
}
