var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesList = [];

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesleft");
var guessesListText = document.getElementById("guesseslist");
var repeatText = document.getElementById("sillygoose");

var computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];

function clearGame(){
    guessesLeftText.textContent = "Guesses Left: 10";
    guessesListText.textContent = "Your Guesses so far: ";
    repeatText.textContent = "";
    guessesLeft = 10;
    guessesList = [];
    computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

function refreshStats(){
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesListText.textContent = "Your Guesses so far: " + guessesList;
}

document.onkeyup = function(event) {

var userGuess = event.key.toLowerCase();

if(userGuess === computerChoice)
{
    wins++;
    refreshStats();
    clearGame();
}

else if(guessesList.indexOf(userGuess) === -1)
{
    guessesLeft--;
    guessesList.push(userGuess);
    repeatText.textContent = "";
}
else
{
repeatText.textContent = "You already tried that letter, silly";
}

refreshStats();

if(guessesLeft === 0)
{
    losses++;
    refreshStats();
    clearGame();
}

};