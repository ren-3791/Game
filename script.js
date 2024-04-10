//Definition of global variables for the game parameters
var winCriteria = 6;
var gridRows = 4;
var gridCols = 4;
var tileProbability = 0.3;
var twoProbability = 0.15;
var hvMoves = true;
var dMoves = true;
flag = true;
//Definition of global variables for the game
var gameMatrix;
var tileMatrix;
//Definition of global constants for the game
const tilepx = 100;
const tilepad = 10;
//Array of colors
const colors = ["FDF8F4", "F8EBDD", "F3DEC6", "EED1AF", "E9C398", "E4B681", "E0A96B", "D9974C", "CD822B", "A86A24"]
//Function to toggle the rules description on and off when the show game rules button is clicked
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
//Function to toggle the parameters description on and off when the show modify game parameters button is clicked
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
//Function to reset the parameters, toggle the parameter description off, and reset the game when the reset parameters button is clicked
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
  restartGame();
}
//Function to update the paramenters, toggle the parameter description off, and reset the game when the update parameters button is clicked
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
  restartGame();
}
function restartGame()
{
  gridRows = +gridRows;
  gridCols = +gridCols;
  //Reset the game matrix to the initial state
  gameMatrix = new Array(gridRows);
  for(var i = 0; i < gridRows; i++)
  {
    gameMatrix[i] = [];
  }
  //gameMatrix = [];
  for(var i = 0; i < gridRows; i++)
    for(var j = 0; j < gridCols; j++)
      gameMatrix[i][j] = 0;
  //Randomly spawn a new tile
  var row = Math.floor(Math.random() * gridRows);
  var col = Math.floor(Math.random() * gridCols);
  gameMatrix[row][col] = 1;
  //Hide the start game button
  var gameButton = document.getElementById("gameButton");
  gameButton.style.display = "none";
  //Create a new gameboard
  var board = document.getElementById("gameBoard");
  var boardSizeRow = gridRows * tilepx + (gridRows + 1) * tilepad + 0.1 * gridRows * tilepad;
  var boardSizeCol = gridCols * tilepx + (gridCols + 1) * tilepad + 0.1 * gridCols * tilepad;
  board.style.width = boardSizeCol + "px";
  board.style.height = boardSizeRow + "px";
  board.style.position = "relative";
  //Hide the previous tiles
  var tiles = document.getElementsByClassName("tile");
  for(var i = 0; i < tiles.length; i++)
    tiles[i].style.display = "none";
  //Create a new set of tiles
  tileMatrix = new Array(gridRows);
  for(var i = 0; i < gridRows; i++)
  {
    tileMatrix[i] = [];
  }
  for(var i = 0; i < gridRows; i++)
    for(var j = 0; j < gridCols; j++)
      tileMatrix[i][j] = new Tile(i, j, gameMatrix[i][j]);
}
class Tile
{
  constructor(i, j, v)
  {
    this.rowPos = i;
    this.colPos = j;
    this.value = v;
    this.xPos = tilepx * j + (tilepad + 1) * j + tilepad;
    this.yPos = tilepx * i + (tilepad + 1) * i + tilepad;
    const newDiv = document.createElement("p");
    newDiv.setAttribute("class", "tile");
    newDiv.style.backgroundColor = "#" + colors[v];
    if(this.value != 0)
      newDiv.textContent = ""+this.value;
    newDiv.style.position = "absolute";
    newDiv.style.left = this.xPos + "px";
    newDiv.style.top = this.yPos + "px";
    document.getElementById("gameBoard").appendChild(newDiv);
  }
  getRowPos()
  {
    return this.rowPos;
  }
  setRowPos(i)
  {
    this.rowPos = i;
  }
  getColPos()
  {
    return this.colPos;
  }
  setColPos(j)
  {
    this.colPos = j;
  }
  getValue()
  {
    return this.value;
  }
  setValue(v)
  {
    this.value = v;
  }
}
