//Define global variables for the game parameters
var winCriteria = 6;
var gridRows = 4;
var gridCols = 4;
var tileProbability = 0.3;
var twoProbability = 0.15;
var vhMoves = true;
var dMoves = true;
var firstParameterOpen = true;
var gameOver = false;
var gameWon = false;
//Define global variables for the game
var tileMatrix;
var score = 0;
//Define global constants for the game
const tilepx = 100;
const tilepad = 10;
//Define a global array of the possible tile colors
const colors = ["FDF8F4", "F8EBDD", "F3DEC6", "EED1AF", "E9C398", "E4B681", "E0A96B", "D9974C", "CD822B", "A86A24", "82521C"];
//Define a global event listener for user keyboard input
document.addEventListener('keyup', makeMove);
//Function to toggle the rules description on and off when the show game rules button is clicked
function showRules()
{
  //Define necessary HTML elements as variables
  var rules = document.getElementById("rules");
  var ruleButton = document.getElementById("ruleButton");
  //Branch of the statement to execute if the rules are currently hidden
  if(rules.innerHTML == "")
  {
    //Update the text of the rules based on the current parameters
    rules.innerHTML = "The objective of the game is to create the " + winCriteria + " tile. </br>Tiles can be moved horizontally, vertically, and diagonally within the " + gridRows + " x " + gridCols + " grid using the following controls: </br> &emsp; W: Up, A: Left, S: Down, D: Right </br> &emsp; T: Up+Left, G: Down+Left, H: Down+Right, Y: Up+Right </br> Four tiles with the same value can be merged with a diagonal move when they are arranged in a 2x2 square, which increments their value by 1. </br> Random probability determines whether a new tile will spawn after each move, and whether that new tile will have an initial value of 1 or 2. </br> The game ends when no more moves are possible. </br> Increase your score by merging tiles.";
    //Update the text of the rules button to reflect that the rules are now visible
    ruleButton.innerHTML = "Hide Game Rules";
  }
  //Branch of the statement to execute if the rules are currently visible
  else
  {
    //Update the text of the rules
    rules.innerHTML = "";
    //Update the text of the rules button to reflect that the rules are now hidden
    ruleButton.innerHTML = "Show Game Rules";
  }
}
//Function to toggle the parameters description on and off when the show game parameters button is clicked
function showParameters()
{
  //Define necessary HTML elements as variables
  var resetParametersButton = document.getElementById("resetParametersButton");
  var updateParametersButton = document.getElementById("updateParametersButton");
  var updateParametersText = document.getElementById("updateParametersText");
  var rpText2s = document.getElementsByClassName("rpText2");
  var rpText3s = document.getElementsByClassName("rpText3");
  var parameterSliders = document.getElementsByClassName("parameterSlider");
  var sliderValues = document.getElementsByClassName("sliderValue");
  var checkmarks = document.getElementsByClassName("checkmark");
  var parameterMenuButton = document.getElementById("parameterMenuButton");
  //Branch of the statement to execute if it is the user's first time opening the parameter menu or if the parameters are currently hidden
  if(firstParameterOpen || resetParametersButton.style.display == "none")
  {
    //Show the reset parameters button
    resetParametersButton.style.display = "block";
    //Show the update parameters button
    updateParametersButton.style.display = "block";
    //Show the update parameters text
    updateParametersText.style.display = "block";
    //Show the rpText2 elements
    for(var idx = 0; idx < rpText2s.length; idx++)
    {
      rpText2s[idx].style.display = "block";
    }
    //Show the rpText3 elements
    for(var idx = 0; idx < rpText3s.length; idx++)
    {
      rpText3s[idx].style.display = "block";
    }
    //Show the parameter slider elements
    for(var idx = 0; idx < parameterSliders.length; idx++)
    {
      parameterSliders[idx].style.display = "block";
    }
    //Show the checkmark elements
    for(var idx = 0; idx < checkmarks.length; idx++)
    {
      checkmarks[idx].style.display = "block";
    }
    //Show the slider value elements
    for(var idx = 0; idx < sliderValues.length; idx++)
    {
      sliderValues[idx].style.display = "block";
    }
    //Update the value of the first parameter open flag
    firstParameterOpen = false;
    //Update the text of the parameter menu button to reflect that the parameters are now visible
    parameterMenuButton.innerHTML = "Close Parameter Options";
  }
  //Branch of the statement to execute if the parameters are currently visible
  else
  {
    //Hide the reset parameters button
    resetParametersButton.style.display = "none";
    //Hide the update parameters button
    updateParametersButton.style.display = "none";
    //Hide the update parameters text
    updateParametersText.style.display = "none";
    //Hide the rpText2 elements
    for(var idx = 0; idx < rpText2s.length; idx++)
    {
      rpText2s[idx].style.display = "none";
    }
    //Hide the rpText3 elements
    for(var idx = 0; idx < rpText3s.length; idx++)
    {
      rpText3s[idx].style.display = "none";
    }
    //Hide the parameter slider elements
    for(var idx = 0; idx < parameterSliders.length; idx++)
    {
      parameterSliders[idx].style.display = "none";
    }
    //Hide the checkmark elements
    for(var idx = 0; idx < checkmarks.length; idx++)
    {
      checkmarks[idx].style.display = "none";
    }
    //Hide the slider value elements
    for(var idx = 0; idx < sliderValues.length; idx++)
    {
      sliderValues[idx].style.display = "none";
    }
    //Update the text of the parameter menu button to reflect that the parameters are now hidden
    parameterMenuButton.innerHTML = "Open Parameter Options";
  }
}
//Function to reset the parameters, toggle the parameter description off, and reset the game when the reset parameters button is clicked
function resetParameters()
{
  //Define necessary HTML elements as variables
  var winSlider = document.getElementById("winSlider");
  var winValue = document.getElementById("winValue");
  var rowSlider = document.getElementById("rowSlider");
  var rowValue = document.getElementById("rowValue");
  var colSlider = document.getElementById("colSlider");
  var colValue = document.getElementById("colValue");
  var tileSlider = document.getElementById("tileSlider");
  var tileValue = document.getElementById("tileValue");
  var twoSlider = document.getElementById("twoSlider");
  var twoValue = document.getElementById("twoValue");
  var vhCheckbox = document.getElementById("vhCheckbox");
  var dCheckbox = document.getElementById("dCheckbox");
  var defaultParameters = document.getElementById("defaultParameters");
  var rules = document.getElementById("rules");
  //Update the winning tile parameter and the value of its corresponding range slider
  winCriteria = 6;
  winSlider.value = winCriteria;
  winValue.innerHTML = winCriteria;
  //Update the row size parameter and the value of its corresponding range slider
  gridRows = 4;
  rowSlider.value = gridRows;
  rowValue.innerHTML = gridRows;
  //Update the column size parameter and the value of its corresponding range slider
  gridCols = 4;
  colSlider.value = gridCols;
  colValue.innerHTML = gridCols;
  //Update the tile probability parameter and the value of its corresponding range slider
  tileProbability = 0.3;
  tileSlider.value = tileProbability;
  tileValue.innerHTML = tileProbability;
  //Update the two probability parameter and the value of its corresponding range slider
  twoProbability = 0.15;
  twoSlider.value = twoProbability;
  twoValue.innerHTML = twoProbability;
  //Update the vertical/horizontal moves parameter and the value of its corresponding checkbox
  vhMoves = true;
  vhCheckbox.checked = vhMoves;
  //Update the diagonal moves parameter and the value of its corresponding checkbox
  dMoves = true;
  dCheckbox.checked = dMoves;
  //Update the default parameters text to reflext the new parameters
  defaultParameters.innerHTML = "The 6 Game can be modified to create a custom playing experience and difficulty level by changing certain parameters. The current parameters are: Winning Tile = 6, Board Size = 4 x 4, Spawning a New Tile = 0.3, New Tile Being Value 2 = 0.15. Vertical and horizontal moves are enabled. Diagonal moves are enabled.";
  //Update the rules text to reflect the new parameters
  rules.innerHTML = "The objective of the game is to create the 6 tile. </br>Tiles can be moved horizontally, vertically, and diagonally within the 4 x 4 grid using the following controls: </br> &emsp; W: Up, A: Left, S: Down, D: Right </br> &emsp; T: Up+Left, G: Down+Left, H: Down+Right, Y: Up+Right </br> Four tiles with the same value can be merged with a diagonal move when they are arranged in a 2x2 square, which increments their value by 1. </br> Random probability determines whether a new tile will spawn after each move, and whether that new tile will have an initial value of 1 or 2. </br> The game ends when no more moves are possible. </br> Increase your score by merging tiles.";
  //Call the showParameters() function to toggle the parameters description off
  //It is given that the parameters description is already on if the user is clicking the reset parameters button
  showParameters();
  //Call the resetGame() function to reset the game
  restartGame();
}
//Function to update the paramenters, toggle the parameter description off, and reset the game when the update parameters button is clicked
function updateParameters()
{
  //Define necessary HTML elements as variables
  var winSlider = document.getElementById("winSlider");
  var winValue = document.getElementById("winValue");
  var rowSlider = document.getElementById("rowSlider");
  var rowValue = document.getElementById("rowValue");
  var colSlider = document.getElementById("colSlider");
  var colValue = document.getElementById("colValue");
  var tileSlider = document.getElementById("tileSlider");
  var tileValue = document.getElementById("tileValue");
  var twoSlider = document.getElementById("twoSlider");
  var twoValue = document.getElementById("twoValue");
  var vhCheckbox = document.getElementById("vhCheckbox");
  var dCheckbox = document.getElementById("dCheckbox");
  var defaultParameters = document.getElementById("defaultParameters");
  var rules = document.getElementById("rules");
  //Update the winning tile parameter and convert the value to an integer
  winCriteria = winSlider.value;
  winCriteria = +winCriteria;
  //Update the row size parameter and convert the value to an integer
  gridRows = rowSlider.value;
  gridRows = +gridRows;
  //Update the column size parameter and convert the value to an integer
  gridCols = colSlider.value;
  gridCols = +gridCols;
  //Update the tile probability parameter and convert the value to a float
  tileProbability = tileSlider.value;
  tileProbability = +tileProbability;
  //Update the two probability parameter and convert the value to a float
  twoProbability = twoSlider.value;
  twoProbability = +twoProbability;
  //Declare variables to represent the rule text regarding vertical/horizontal and diagonal moves
  var text1;
  var text2;
  //Branch of the statement to execute if vertical/horizontal moves are enabled
  if(vhCheckbox.checked)
  {
    //Update the vertical/horizontal parameter and its corresponding rule text
    vhMoves = true;
    text1 = " Vertical and horizontal moves are enabled.";
  }
  //Branch of the statement to execute if vertical/horizontal moves are disabled
  else
  {
    //Update the vertical/horizontal parameter and its corresponding rule text
    vhMoves = false;
    text1 = " Vertical and horizontal moves are disabled.";
  }
  //Branch of the statement to execute if diagonal moves are enabled
  if(dCheckbox.checked)
  {
    //Update the diagonal parameter and its corresponding rule text
    dMoves = true;
    text2 = " Diagonal moves are enabled.";
  }
  //Branch of the statement to execute if diagonal moves are disabled
  else
  {
    //Update the diagonal parameter and its corresponding rule text
    dMoves = false;
    text2 = " Diagonal moves are disabled.";
  }
  //Update the default parameters text to reflect the new parameters
  defaultParameters.innerText = "The 6 Game can be modified to create a custom playing experience and difficulty level by changing certain parameters. The current parameters are: Winning Tile = " + winCriteria + ", Board Size = " + gridRows + " x " + gridCols + ", Spawning a New Tile = " + tileProbability + " , New Tile Being Value 2 = " + twoProbability + text1 + text2;
  //Update the text of the rules to reflect the current parameters
  rules.innerHTML = "The objective of the game is to create the " + winCriteria + " tile. </br>Tiles can be moved horizontally, vertically, and diagonally within the " + gridRows + " x " + gridCols + " grid using the following controls: </br> &emsp; W: Up, A: Left, S: Down, D: Right </br> &emsp; T: Up+Left, G: Down+Left, H: Down+Right, Y: Up+Right </br> Four tiles with the same value can be merged with a diagonal move when they are arranged in a 2x2 square, which increments their value by 1. </br> Random probability determines whether a new tile will spawn after each move, and whether that new tile will have an initial value of 1 or 2. </br> The game ends when no more moves are possible. </br> Increase your score by merging tiles.";
  //Call the showParameters() function to toggle the parameters description off
  //It is given that the parameters description is already on if the user is clicking the reset parameters button
  showParameters();
  //Call the resetGame() function to reset the game
  restartGame();
}
//Function to restart the game, reset the score, and reset the game board when the reset game button is clicked
function restartGame()
{
  //Define necessary HTML elements as variables
  var gameButton = document.getElementById("gameButton");
  var gameBoard = document.getElementById("gameBoard");
  var tiles = document.getElementsByClassName("tile");
  var endText = document.getElementById("endText");
  var scoreContainer = document.getElementById("scoreContainer");
  //Update the game over flag
  gameOver = false;
  //Update the game won flag
  gameWon = false;
  //Define variables for the dimensions of the game board
  var boardSizeRow = gridRows * tilepx + (gridRows + 1) * tilepad + 0.1 * gridRows * tilepad;
  var boardSizeCol = gridCols * tilepx + (gridCols + 1) * tilepad + 0.1 * gridCols * tilepad;
  //Update the dimensions of the game board
  gameBoard.style.width = boardSizeCol + "px";
  gameBoard.style.height = boardSizeRow + "px";
  //Hide the tiles from the previous game
  for(var idx = 0; idx < tiles.length; idx++)
    tiles[idx].style.display = "none";
  //Create a new set of tiles
  tileMatrix = new Array(gridRows);
  for(var rowIdx = 0; rowIdx < gridRows; rowIdx++)
  {
    tileMatrix[rowIdx] = [];
  }
  for(var rowIdx = 0; rowIdx < gridRows; rowIdx++)
  {
    for(var colIdx = 0; colIdx < gridCols; colIdx++)
    {
      tileMatrix[rowIdx][colIdx] = new Tile(rowIdx, colIdx, 0);
    }
  }
  //Randomly spawn the first tile by generating a random row and column position
  rand = Math.random();
  var randRow = Math.floor(Math.random() * gridRows);
  var randCol = Math.floor(Math.random() * gridCols);
  //Branch of the statement to execute if a two tile will be added
  if(rand < twoProbability)
  {
    tileMatrix[randRow][randCol].setValue(2);
  }
  //Branch of the statement to execute if a one tile will be added
  else
  {
    tileMatrix[randRow][randCol].setValue(1);
  }
  //Reset and hide the end text from the previous game
  endText.innerHTML = "";
  endText.style.display = "none";
  //Reset the score from the previous game
  score = 0;
  scoreContainer.innerHTML = "Current Score: 0";
}
//Function to check if the game is over and display the appropriate end text if so
function checkGameOver()
{
  //Define necessary HTML elements as variables
  var endText = document.getElementById("endText");
  //Define a flag variable for the game over condition
  gameOverFlag = true;
  //Check the game board for any empty tiles
  //If there are any empty tiles remaining on the board, the game is not over
  for(var rowIdx = 0; rowIdx < gridRows; rowIdx++)
  {
    for(var colIdx = 0; colIdx < gridCols; colIdx++)
    {
      //Check if the current index is empty
      //If the current index is empty, the game is not over
      if(tileMatrix[rowIdx][colIdx].getValue() == 0)
      {
        gameOverFlag = false;
      }
    }
  }
  //Check the game board for any possible merges of four tiles in a square
  //If there are any possible merges remaining on the board, the game is not over
  let possibleSquares = [];
  //Find the possible indices that can represent the NW corner of a square
  for(var rowIdx = 0; rowIdx < gridRows - 1; rowIdx++)
  {
    for(var colIdx = 0; colIdx < gridCols - 1; colIdx++)
    {
      //Only consider the index as valid if it represents a nonzero tile
      if(tileMatrix[rowIdx][colIdx].getValue() != 0)
      {
        //Add the index to the list of possible NW corners
        possibleSquares.push([rowIdx, colIdx]);
      }
    }
  }
  //Check if any of the squares represent a valid merge
  for(var idx = 0; idx < possibleSquares.length; idx++)
    {
      //Define variables to represent the current index
      rowIdx = possibleSquares[idx][0];
      colIdx = possibleSquares[idx][1];
      //Define variables to represent the values of each of the tiles in the square
      valNW = tileMatrix[rowIdx][colIdx].getValue();
      valNE = tileMatrix[rowIdx][colIdx + 1].getValue();
      valSE = tileMatrix[rowIdx + 1][colIdx + 1].getValue();
      valSW = tileMatrix[rowIdx + 1][colIdx].getValue();
      //Check if all of the tiles in the square have the same value
      //If all of the tiles in the square have the same value, the game is not over
      if(valNW == valNE && valNW == valSE && valNW == valSW)
      {
        gameOverFlag = false;
      }
    }
  //Update the game over variable based on the game over flag
  gameOver = gameOverFlag;
  //Branch of the statement to execute if the game is over
  if(gameOver)
  {
    //Update and show the end text to reflect that the game has been lost
    endText.innerHTML = "Game Over! Final Score = " + score + "</br> Click the button to start a new game and try again!";
    endText.style.display = "block";
  }
}
//Function to check if the game is won and display the appropriate end text if so
function checkGameWon()
{
  //Define necessary HTML elements as variables
  var endText = document.getElementById("endText");
  //Define a flag variable for the game won condition
  var gameWonFlag = false;
  //Check the game board for the winning tile
  //If the winning tile is on the board, the game is won
  for(var rowIdx = 0; rowIdx < gridRows; rowIdx++)
  {
    for(var colIdx = 0; colIdx < gridCols; colIdx++)
    {
      //Check if the current tile is the winning tile
      //If the current tile is the winning tile, the game is won
      if(tileMatrix[rowIdx][colIdx].getValue() == winCriteria)
      {
        gameWonFlag = true;
      }
    }
  }
  //Update the game won variable based on the game won flag
  gameWon = gameWonFlag;
  //Branch of the statement to execute if the game is won
  if(gameWon)
  {
    //Update and show the end text to reflect that the game has been won
    endText.innerHTML = "You Won! Final Score = " + score + "</br> Continue playing, or click the button to start a new game and beat your score!";
    endText.style.display = "block";
  }
}
//Function to randomly generate a new tile on the board
function generateNewTile()
{
  //Define a list of possible indexes for a new tile to be generated at
  possibleIdxs = [];
  //Find the possible indices that a new tile can be generated at
  //A new tile can be generated at any index that is not occupied by a tile
  for(var rowIdx = 0; rowIdx < gridRows; rowIdx++)
  {
    for(var colIdx = 0; colIdx < gridCols; colIdx++)
    {
      //Check if the current index is empty
      //If the current index is empty, add it to the list of possible indexes
      if(tileMatrix[rowIdx][colIdx].getValue() == 0)
      {
        possibleIdxs.push([rowIdx, colIdx]);
      }
    }
  }
  //Choose a random index from the list of possible indices
  idx = possibleIdxs[Math.floor(Math.random() * possibleIdxs.length)];
  //Define variables for the row and column indices that were chosen
  randRow = idx[0];
  randCol = idx[1];
  //Define variables for the random probability variables associated with generating a new tile
  tileRand = Math.random();
  twoRand = Math.random();
  //Branch of the statement to execute if the randomly generated tile value is less than the tile probability threshold
  if(tileRand < tileProbability)
  {
    //Branch of the statement to execute if the randomly generated two value is less that the two probability threshold
    if(twoRand < twoProbability)
    {
      //Add a new tile with a value of 2 to the game board
      tileMatrix[randRow][randCol] = new Tile(randRow, randCol, 2);
    }
      //Branch of the statement to execute if the randomly generated two value is greater than the two probability threshold
    else
    {
      //Add a new tile with a value of 1 to the game board
      tileMatrix[randRow][randCol] = new Tile(randRow, randCol, 1);
    }
  }
}
//Function to call the appropriate function for a move to be made based on the user's keyboard input
function makeMove(key)
{
  //Define necessary HTML elements as variables
  var scoreContainer = document.getElementById("scoreContainer");
  //Branch of the statement to execute if the user's input was a w key
  if(key.keyCode == 87)
  {
    moveW();
  }
  //Branch of the statement to execute if the user's input was an a key
  else if(key.keyCode == 65)
  {
    moveA();
  }
  //Branch of the statement to execute if the user's input was an s key
  else if(key.keyCode == 83)
  {
    moveS();
  }
  //Branch of the statement to execute if the user's input was a d key
  else if(key.keyCode == 68)
  {
    moveD();
  }
  //Branch of the statement to execute if the user's input was a t key
  else if(key.keyCode == 84)
  {
    moveT();
  }
  //Branch of the statement to execute if the user's input was a g key
  else if(key.keyCode == 71)
  {
    moveG();
  }
  //Branch of the statement to execute if the user's input was an h key
  else if(key.keyCode == 72)
  {
    moveH();
  }
  //Branch of the statement to execute if the user's input was a y key
  else if(key.keyCode == 89)
  {
    moveY();
  }
  //Update the score container to reflect the current score
  scoreContainer.innerHTML = "Current Score: "+score;
  //Call the checkGameOver() function to check if the game is over
  checkGameOver();
  //Call the checkGameWon() function to check if the game is won
  checkGameWon();
}
//Function to execute a move corresponding to the w key (N direction)
function moveW()
{
  //Define a variable for the final row of the tile after the move
  var finalRow;
  //Define a flag variable for whether or not the current tile moved as a result of the move
  var currentTileMovedFlag = false;
  //Define a flag variable for whether or not the any tile moved as a result of the move
  var anyTileMovedFlag = false;
  //Make a move if the vertical/horizontal moves are enabled
  if(vhMoves)
  {
    //Loop through each index of the game board that is capable of moving N
    for(var rowIdx = 1; rowIdx < gridRows; rowIdx++)
    {
      for(var colIdx = 0; colIdx < gridCols; colIdx++)
      {
        //Define a variable for the starting row of the tile
        startRow = rowIdx;
        //Only consider moving the current tile if it is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Loop while it is still possible to move the current tile N
          while(startRow > 0 && tileMatrix[startRow - 1][colIdx].getValue() == 0)
          {
            //Update the final row and start row variables
            finalRow = startRow - 1;
            startRow = startRow - 1;
            //Update the flag variables
            currentTileMovedFlag = true;
            anyTileMovedFlag = true;
          }
          //Branch of the statement to execute if the current tile was moved
          if(currentTileMovedFlag)
          {
            //Set the value of the tile in the final position to the value of the current tile
            tileMatrix[finalRow][colIdx].setValue(tileMatrix[rowIdx][colIdx].getValue());
            //Set the value of the current tile to zero
            tileMatrix[rowIdx][colIdx].setValue(0);
          }
        }
        //Reset the value of the curent tile moved flag
        currentTileMovedFlag = false;
      }
    }
    //Branch of the statement to execute if any tiles were moved
    if(anyTileMovedFlag)
    {
      //Call the generateNewTile() function to add a new tile to the board
      generateNewTile();
    }
  }
}
//Function to execute a move corresponding to the a key (W direction)
function moveA()
{
  //Define a variable for the final column of the tile after the move
  var finalCol;
  //Define a flag variable for whether or not the current tile moved as a result of the move
  var currentTileMovedFlag = false;
  //Define a flag variable for whether or not the any tile moved as a result of the move
  var anyTileMovedFlag = false;
  //Make a move if the vertical/horizontal moves are enabled
  if(vhMoves)
  {
    //Loop through each index of the game board that is capable of moving W
    for(var colIdx = 1; colIdx < gridCols; colIdx++)
    {
      for(var rowIdx = 0; rowIdx < gridRows; rowIdx++)
      {
        //Define a variable for the starting column of the tile
        startCol = colIdx;
        //Only consider moving the current tile if it is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Loop while it is still possible to move the current tile W
          while(startCol > 0 && tileMatrix[rowIdx][startCol - 1].getValue() == 0)
          {
            //Update the final col and start col variables
            finalCol = startCol - 1;
            startCol = startCol - 1;
            //Update the flag variables
            currentTileMovedFlag = true;
            anyTileMovedFlag = true;
          }
          //Branch of the statement to execute if the current tile was moved
          if(currentTileMovedFlag)
          {
            //Set the value of the tile in the final position to the value of the current tile
            tileMatrix[rowIdx][finalCol].setValue(tileMatrix[rowIdx][colIdx].getValue());
            //Set the value of the current tile to zero
            tileMatrix[rowIdx][colIdx].setValue(0);
          }
        }
        //Reset the value of the current tile moved flag
        currentTileMovedFlag = false;
      }
    }
    //Branch of the statement to execute if any tiles were moved
    if(anyTileMovedFlag)
    {
      //Call the generateNewTile() function to add a new tile to the board
      generateNewTile();
    }
  }
}
//Function to execute a move corresponding to the s key (S direction)
function moveS()
{
  //Define a variable for the final row of the tile after the move
  var finalRow;
  //Define a flag variable for whether or not the current tile moved as a result of the move
  var currentTileMovedFlag = false;
  //Define a flag variable for whether or not the any tile moved as a result of the move
  var anyTileMovedFlag = false;
  //Make a move if the vertical/horizontal moves are enabled
  if(vhMoves)
  {
    //Loop through each index of the game board that is capable of moving S
    for(var rowIdx = gridRows - 2; rowIdx > -1; rowIdx--)
    {
      for(var colIdx = 0; colIdx < gridCols; colIdx++)
      {
        //Define a variable for the starting row of the tile
        startRow = rowIdx;
        //Only consider moving the current tile if it is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Loop while it is still possible to move the current tile S
          while(startRow < gridRows - 1 && tileMatrix[startRow + 1][colIdx].getValue() == 0)
          {
            //Update the final row and start row variables
            finalRow = startRow + 1;
            startRow = startRow + 1;
            //Update the flag variables
            currentTileMovedFlag = true;
            anyTileMovedFlag = true;
          }
          //Branch of the statement to execute if the current tile was moved
          if(currentTileMovedFlag)
          {
            //Set the value of the tile in the final position to the value of the current tile
            tileMatrix[finalRow][colIdx].setValue(tileMatrix[rowIdx][colIdx].getValue());
            //Set the value of the current tile to zero
            tileMatrix[rowIdx][colIdx].setValue(0);
          }
        }
        //Reset the value of the current tile moved flag
        currentTileMovedFlag = false;
      }
    }
    //Branch of the statement to execute if any tiles were moved
    if(anyTileMovedFlag)
    {
      //Call the generateNewTile() function to add a new tile to the board
      generateNewTile();
    }
  }
}
//Function to execute a move corresponding to the d key (E direction)
function moveD()
{
  //Define a variable for the final column of the tile after the move
  var finalCol;
  //Define a flag variable for whether or not the current tile moved as a result of the move
  var currentTileMovedFlag = false;
  //Define a flag variable for whether or not the any tile moved as a result of the move
  var anyTileMovedFlag = false;
  //Make a move if the vertical/horizontal moves are enabled
  if(vhMoves)
  {
    //Loop through each index of the game board that is capable of moving E
    for(var colIdx = gridCols - 2; colIdx > -1; colIdx--)
    {
      for(var rowIdx = 0; rowIdx < gridRows; rowIdx++)
      {
        //Define a variable for the starting column of the tile
        startCol = colIdx;
        //Only consider moving the current tile if it is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Loop while it is still possible to move the current tile E
          while(startCol < gridCols - 1 && tileMatrix[rowIdx][startCol + 1].getValue() == 0)
          {
            //Update the final col and start col variables
            finalCol = startCol + 1;
            startCol = startCol + 1;
            //Update the flag variables
            currentTileMovedFlag = true;
            anyTileMovedFlag = true;
          }
          //Branch of the statmenet to execute if the current tile was moved
          if(currentTileMovedFlag)
          {
            //Set the value of the tile in the final position to the value of the current tile
            tileMatrix[rowIdx][finalCol].setValue(tileMatrix[rowIdx][colIdx].getValue());
            //Set the value of the current tile to zero
            tileMatrix[rowIdx][colIdx].setValue(0);
          }
        }
        //Reset the value of the current tile moved flag
        currentTileMovedFlag = false;
      }
    }
    //Branch of the statement to execute if any tiles were moved
    if(anyTileMovedFlag)
    {
      //Call the generateNewTile() function to add a new tile to the board
      generateNewTile();
    }
  }
}
//Function to execute a move corresponding to the T key (NW direction)
function moveT()
{
  //Define a variable for the final row of the tile after the move
  var finalRow;
  //Define a variable for the final column of the tile after the move
  var finalCol;
  //Define a list of all the indices on the board that can be a possible NW corner of a square
  var possibleNWs = [];
  //Define a flag variable for whether or not the current tile moved as a result of the move
  var currentTileMovedFlag = false;
  //Define a flag variable for whether or not the any tile moved as a result of the move
  var anyTileMovedFlag = false;
  //Make a move if the diagonal moves are enabled
  if(dMoves)
  {
    //Loop through each index of the game board that is capable of being the NW corner of a square
    for(var rowIdx = 0; rowIdx < gridRows - 1; rowIdx++)
    {
      for(var colIdx = 0; colIdx < gridCols - 1; colIdx++)
      {
        //Only consider adding the current index to the list of possible NW corners if the current tile is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Add the current index to the list of possible NW corners
          possibleNWs.push([rowIdx, colIdx]);
        }
      }
    }
    //Loop through all of the possible NW corners
    for(var idx = 0; idx < possibleNWs.length; idx++)
    {
      //Define variables for the row and column indices of the NW corner of the current square
      rowIdx = possibleNWs[idx][0];
      colIdx = possibleNWs[idx][1];
      //Only consider evaluating the current square if the NW corner is nonzero
      if(tileMatrix[rowIdx][colIdx].getValue() != 0)
      {
        //Define variables for the value of each tile in the current square
        valNW = tileMatrix[rowIdx][colIdx].getValue();
        valNE = tileMatrix[rowIdx][colIdx + 1].getValue();
        valSE = tileMatrix[rowIdx + 1][colIdx + 1].getValue();
        valSW = tileMatrix[rowIdx + 1][colIdx].getValue();
        //Branch of the statement to execute if all of the tiles in the square have the same value
        if(valNW == valNE && valNW == valSE && valNW == valSW)
        {
          //Update the score based on the value of the tiles merged
          score = score + 4 ** (valNW + 1);
          //Set the value of the tile in the NW corner of the current square to its current value incremented by 1
          tileMatrix[rowIdx][colIdx].setValue(valNW + 1);
          //Set the value of the tile in the NE corner of the current square to zero
          tileMatrix[rowIdx][colIdx + 1].setValue(0);
          //Set the value of the tile in the SE corner of the current square to zero
          tileMatrix[rowIdx + 1][colIdx + 1].setValue(0);
          //Set the value of the tile in the SW corner of the current square to zero
          tileMatrix[rowIdx + 1][colIdx].setValue(0);
          //Update the any tile moved flag variable
          anyTileMovedFlag = true;
        }
      }
    }
    //Loop through each index of the game board that is capable of moving NW
    for(var rowIdx = 1; rowIdx < gridRows; rowIdx++)
    {
      for(var colIdx = 1; colIdx < gridCols; colIdx++)
      {
        //Define variables for the starting row and column of the tile
        startRow = rowIdx;
        startCol = colIdx;
        //Only consider moving the current tile if it is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Loop while it is still possible to move the current tile NW
          while(startRow > 0 && startCol > 0 && tileMatrix[startRow - 1][startCol - 1].getValue() == 0)
          {
            //Update the final row, start row, final col, and start col variables
            finalRow = startRow - 1;
            finalCol = startCol - 1;
            startRow = startRow - 1;
            startCol = startCol - 1;
            //Update the flag variables
            currentTileMovedFlag = true;
            anyTileMovedFlag = true;
          }
          //Branch of the statement to execute if the current tile was moved
          if(currentTileMovedFlag)
          {
            //Set the value of the tile in the final position to the value of the current tile
            tileMatrix[finalRow][finalCol].setValue(tileMatrix[rowIdx][colIdx].getValue());
            //Set the value of the current tile to zero
            tileMatrix[rowIdx][colIdx].setValue(0);
          }
        }
        //Reset the value of the curent tile moved flag
        currentTileMovedFlag = false;
      }
    }
    //Branch of the statement to execute if any tiles were moved
    if(anyTileMovedFlag)
    {
      //Call the generateNewTile() function to add a new tile to the board
      generateNewTile();
    }
  }
}
//Function to execute a move corresponding to the G key (SW direction)
function moveG()
{
  //Define a variable for the final row of the tile after the move
  var finalRow;
  //Define a variable for the final column of the tile after the move
  var finalCol;
  //Define a list of all the indices on the board that can be a possible SW corner of a square
  var possibleSWs = [];
  //Define a flag variable for whether or not the current tile moved as a result of the move
  var currentTileMovedFlag = false;
  //Define a flag variable for whether or not the any tile moved as a result of the move
  var anyTileMovedFlag = false;
  //Make a move if the diagonal moves are enabled
  if(dMoves)
  {
    //Loop through each index of the game board that is capable of being the SW corner of a square
    for(var rowIdx = gridRows - 1; rowIdx > 0; rowIdx--)
    {
      for(var colIdx = 0; colIdx < gridCols - 1; colIdx++)
      {
        //Only consider adding the current index to the list of possible SW corners if the current tile is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Add the current index to the list of possible SW corners
          possibleSWs.push([rowIdx, colIdx]);
        }
      }
    }
    //Loop through all of the possible SW corners
    for(var idx = 0; idx < possibleSWs.length; idx++)
    {
      //Define variables for the row and column indices of the SW corner of the current square
      rowIdx = possibleSWs[idx][0];
      colIdx = possibleSWs[idx][1];
      //Only consider evaluating the current square if the SW corner is nonzero
      if(tileMatrix[rowIdx][colIdx].getValue() != 0)
      {
        //Define variables for the value of each tile in the current square
        valNW = tileMatrix[rowIdx - 1][colIdx].getValue();
        valNE = tileMatrix[rowIdx - 1][colIdx + 1].getValue();
        valSE = tileMatrix[rowIdx][colIdx + 1].getValue();
        valSW = tileMatrix[rowIdx][colIdx].getValue();
        //Branch of the statement to execute if all of the tiles in the square have the same value
        if(valNW == valNE && valNW == valSE && valNW == valSW)
       {
          //Update the score based on the value of the tiles merged
          score = score + 4 ** (valSW + 1);
          //Set the value of the tile in the NW corner of the current square to zero
          tileMatrix[rowIdx - 1][colIdx].setValue(0);
          //Set the value of the tile in the NE corner of the current square to zero
          tileMatrix[rowIdx - 1][colIdx + 1].setValue(0);
          //Set the value of the tile in the SE corner of the current square to zero
          tileMatrix[rowIdx][colIdx + 1].setValue(0);
          //Set the value of the tile in the SW corner of the current square to its current value incremented by 1
          tileMatrix[rowIdx][colIdx].setValue(valSW + 1);
          //Update the any tile moved flag variable
          anyTileMovedFlag = true;
        }
      }
    }
    //Loop through each index of the game board that is capable of moving SW
    for(var rowIdx = gridRows - 2; rowIdx > -1; rowIdx--)
    {
      for(var colIdx = 1; colIdx < gridCols; colIdx++)
      {
        //Define variables for the starting row and column of the tile
        startRow = rowIdx;
        startCol = colIdx;
        //Only consider moving the current tile if it is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Loop while it is still possible to move the current tile SW
          while(startRow < gridRows - 1 && startCol > 0 && tileMatrix[startRow + 1][startCol - 1].getValue() == 0)
          {
            //Update the final row, start row, final col, and start col variables
            finalRow = startRow + 1;
            finalCol = startCol - 1;
            startRow = startRow + 1;
            startCol = startCol - 1;
            //Update the flag variables
            currentTileMovedFlag = true;
            anyTileMovedFlag = true;
          }
          //Branch of the statement to execute if the current tile was moved
          if(currentTileMovedFlag)
          {
            //Set the value of the tile in the final position to the value of the current tile
            tileMatrix[finalRow][finalCol].setValue(tileMatrix[rowIdx][colIdx].getValue());
            //Set the value of the current tile to zero
            tileMatrix[rowIdx][colIdx].setValue(0);
          }
        }
        //Reset the value of the curent tile moved flag
        currentTileMovedFlag = false;
      }
    }
    //Branch of the statement to execute if any tiles were moved
    if(anyTileMovedFlag)
    {
      //Call the generateNewTile() function to add a new tile to the board
      generateNewTile();
    }
  }
}
//Function to execute a move corresponding to the H key (SE direction)
function moveH()
{
  //Define a variable for the final row of the tile after the move
  var finalRow;
  //Define a variable for the final column of the tile after the move
  var finalCol;
  //Define a list of all the indices on the board that can be a possible SE corner of a square
  var possibleSEs = [];
  //Define a flag variable for whether or not the current tile moved as a result of the move
  var currentTileMovedFlag = false;
  //Define a flag variable for whether or not the any tile moved as a result of the move
  var anyTileMovedFlag = false;
  //Make a move if the diagonal moves are enabled
  if(dMoves)
  {
    //Loop through each index of the game board that is capable of being the SE corner of a square
    for(var rowIdx = gridRows - 1; rowIdx > 0; rowIdx--)
    {
      for(var colIdx = gridCols - 1; colIdx > 0; colIdx--)
      {
        //Only consider adding the current index to the list of possible SE corners if the current tile is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Add the current index to the list of possible SE corners
          possibleSEs.push([rowIdx, colIdx]);
        }
      }
    }
    //Loop through all of the possible SE corners
    for(var idx = 0; idx < possibleSEs.length; idx++)
    {
      //Define variables for the row and column indices of the SE corner of the current square
      rowIdx = possibleSEs[idx][0];
      colIdx = possibleSEs[idx][1];
      //Only consider evaluating the current square if the SE corner is nonzero
      if(tileMatrix[rowIdx][colIdx].getValue() != 0)
      {
        //Define variables for the value of each tile in the current square
        valNW = tileMatrix[rowIdx - 1][colIdx - 1].getValue();
        valNE = tileMatrix[rowIdx - 1][colIdx].getValue();
        valSE = tileMatrix[rowIdx][colIdx].getValue();
        valSW = tileMatrix[rowIdx][colIdx - 1].getValue();
        //Branch of the statement to execute if all of the tiles in the square have the same value
        if(valNW == valNE && valNW == valSE && valNW == valSW)
        {
          //Update the score based on the value of the tiles merged
          score = score + 4 ** (valSE + 1);
          //Set the value of the tile in the NW corner of the current square to zero
          tileMatrix[rowIdx - 1][colIdx - 1].setValue(0);
          //Set the value of the tile in the NE corner of the current square to zero
          tileMatrix[rowIdx - 1][colIdx].setValue(0);
          //Set the value of the tile in the SE corner of the current square to its current value incremented by 1
          tileMatrix[rowIdx][colIdx].setValue(valSE + 1);
          //Set the value of the tile in the SW corner of the current square to zero
          tileMatrix[rowIdx][colIdx - 1].setValue(0);
          //Update the any tile moved flag variable
          anyTileMovedFlag = true;
        }
      }
    }
    //Loop through each index of the game board that is capable of moving SE
    for(var rowIdx = gridRows - 2; rowIdx > -1; rowIdx--)
    {
      for(var colIdx = gridCols - 2; colIdx > -1; colIdx--)
      {
        //Define variables for the starting row and column of the tile
        startRow = rowIdx;
        startCol = colIdx;
        //Only consider moving the current tile if it is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Loop while it is still possible to move the current tile SE
          while(startRow < gridRows - 1 && startCol < gridCols - 1 && tileMatrix[startRow + 1][startCol + 1].getValue() == 0)
          {
            //Update the final row, start row, final col, and start col variables
            finalRow = startRow + 1;
            finalCol = startCol + 1;
            startRow = startRow + 1;
            startCol = startCol + 1;
            //Update the flag variables
            currentTileMovedFlag = true;
            anyTileMovedFlag = true;
          }
          //Branch of the statement to execute if the current tile was moved
          if(currentTileMovedFlag)
          {
            //Set the value of the tile in the final position to the value of the current tile
            tileMatrix[finalRow][finalCol].setValue(tileMatrix[rowIdx][colIdx].getValue());
            //Set the value of the current tile to zero
            tileMatrix[rowIdx][colIdx].setValue(0);
          }
        }
        //Reset the value of the curent tile moved flag
        currentTileMovedFlag = false;
      }
    }
    //Branch of the statement to execute if any tiles were moved
    if(anyTileMovedFlag)
    {
      //Call the generateNewTile() function to add a new tile to the board
      generateNewTile();
    }
  }
}
//Function to execute a move corresponding to the Y key (NE direction)
function moveY()
{
  //Define a variable for the final row of the tile after the move
  var finalRow;
  //Define a variable for the final column of the tile after the move
  var finalCol;
  //Define a list of all the indices on the board that can be a possible NE corner of a square
  var possibleNEs = [];
  //Define a flag variable for whether or not the current tile moved as a result of the move
  var currentTileMovedFlag = false;
  //Define a flag variable for whether or not the any tile moved as a result of the move
  var anyTileMovedFlag = false;
  //Make a move if the diagonal moves are enabled
  if(dMoves)
  {
    //Loop through each index of the game board that is capable of being the NE corner of a square
    for(var rowIdx = 0; rowIdx < gridRows - 1; rowIdx++)
    {
      for(var colIdx = gridCols - 1; colIdx > 0; colIdx--)
      {
        //Only consider adding the current index to the list of possible NE corners if the current tile is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Add the current index to the list of possible NE corners
          possibleNEs.push([rowIdx, colIdx]);
        }
      }
    }
    //Loop through all of the possible NE corners
    for(var idx = 0; idx < possibleNEs.length; idx++)
    {
      //Define variables for the row and column indices of the NE corner of the current square
      rowIdx = possibleNEs[idx][0];
      colIdx = possibleNEs[idx][1];
      //Only consider evaluating the current square if the NW corner is nonzero
      if(tileMatrix[rowIdx][colIdx].getValue() != 0)
      {
        //Define variables for the value of each tile in the current square
        valNW = tileMatrix[rowIdx][colIdx - 1].getValue();
        valNE = tileMatrix[rowIdx][colIdx].getValue();
        valSE = tileMatrix[rowIdx + 1][colIdx].getValue();
        valSW = tileMatrix[rowIdx + 1][colIdx - 1].getValue();
        if(valNW == valNE && valNW == valSE && valNW == valSW)
        {
          //Update the score based on the value of the tiles merged
          score = score + 4 ** (valNE + 1);
          //Set the value of the tile in the NW corner of the current square to zero
          tileMatrix[rowIdx][colIdx - 1].setValue(0);
          //Set the value of the tile in the NE corner of the current square to its current value incremented by 1
          tileMatrix[rowIdx][colIdx].setValue(valNE + 1);
          //Set the value of the tile in the SE corner of the current square to zero
          tileMatrix[rowIdx + 1][colIdx].setValue(0);
          //Set the value of the tile in the SW corner of the current square to zero
          tileMatrix[rowIdx + 1][colIdx - 1].setValue(0);
          //Update the any tile moved flag variable
          anyTileMovedFlag = true;
        }
      }
    }
    //Loop through each index of the game board that is capable of moving NE
    for(var rowIdx = 1; rowIdx < gridRows; rowIdx++)
    {
      for(var colIdx = gridCols - 2; colIdx > -1; colIdx--)
      {
        //Define variables for the starting row and column of the tile
        startRow = rowIdx;
        startCol = colIdx;
        //Only consider moving the current tile if it is nonzero
        if(tileMatrix[rowIdx][colIdx].getValue() != 0)
        {
          //Loop while it is still possible to move the current tile NE
          while(startRow > 0 && startCol < gridCols - 1 && tileMatrix[startRow - 1][startCol + 1].getValue() == 0)
          {
            //Update the final row, start row, final col, and start col variables
            finalRow = startRow - 1;
            finalCol = startCol + 1;
            startRow = startRow - 1;
            startCol = startCol + 1;
            //Update the flag variables
            currentTileMovedFlag = true;
            anyTileMovedFlag = true;
          }
          //Branch of the statement to execute if the current tile was moved
          if(currentTileMovedFlag)
          {
            //Set the value of the tile in the final position to the value of the current tile
            tileMatrix[finalRow][finalCol].setValue(tileMatrix[rowIdx][colIdx].getValue());
            //Set the value of the current tile to zero
            tileMatrix[rowIdx][colIdx].setValue(0);
          }
        }
        //Reset the value of the curent tile moved flag
        currentTileMovedFlag = false;
      }
    }
    //Branch of the statement to execute if any tiles were moved
    if(anyTileMovedFlag)
    {
      //Call the generateNewTile() function to add a new tile to the board
      generateNewTile();
    }
  }
}
//Class to represent the tile objects in the game
class Tile
{
  //Constructor to create a new tile based on its row position on the game board, its column position on the game board, and its value
  constructor(i, j, v)
  {
    //Set the row position of the tile
    this.rowPos = i;
    //Set the column position of the tile
    this.colPos = j;
    //Set the value of the tile
    this.value = v;
    //Calculate the x position of the tile based on its row position, the size of a tile, and the amount of padding between tiles
    this.xPos = tilepx * j + (tilepad + 1) * j + tilepad;
    //Calculate the y position of the tile based on its column position, the size of a tile, and the amount of padding between tiles
    this.yPos = tilepx * i + (tilepad + 1) * i + tilepad;
    //Create a new HTML element corresponding to the tile
    this.newDiv = document.createElement("p");
    //Set the class of the HTML element to "tile"
    this.newDiv.setAttribute("class", "tile");
    //Set the background color of the HTML element based on the value of the tile
    this.newDiv.style.backgroundColor = "#" + colors[v];
    //Branch of the statement to execute if the tile has a nonzero value
    if(this.value != 0)
    {
      //If the tile has a nonzero value, add text reflecting the value of the tile to the HTML element
      this.newDiv.textContent = ""+this.value;
    }
    //Set the position of the HTML element to absolute
    this.newDiv.style.position = "absolute";
    //Set the position of the HTML element
    this.newDiv.style.left = this.xPos + "px";
    this.newDiv.style.top = this.yPos + "px";
    //Add the HTML element to the game board
    document.getElementById("gameBoard").appendChild(this.newDiv);
  }
  //Function to return the value of the tile
  getValue()
  {
    return this.value;
  }
  //Function to update the value of the tile and update the tile's instance data accordingly
  setValue(v)
  {
    //Update the value of the tile
    this.value = v;
    //Update the background color of the HTML element based on the value of the tile
    this.newDiv.style.backgroundColor = "#" + colors[v];
    //Branch of the statement to execute if the tile has a nonzero value
    if(this.value != 0)
    {
      //Update the text of the HTML element to reflect the new value of the tile
      this.newDiv.textContent = ""+this.value;
    }
    //Branch of the statement to execute if the tile has a zero value
    else
    {
      //Hide the text of the HTML element to reflect the new value of the tile
      this.newDiv.textContent = "";
    }
  }
  //Function to return the HTML element corresponding to the tile
  getDiv()
  {
    return this.newDiv;
  }
}
