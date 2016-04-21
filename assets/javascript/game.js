
// psychic game object ====== includes everything needed for game play ===============
var psyGameObj = {
// alphabet array(for computer choice)
	alpha: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h ', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],

// number of wins the user has aquired
	numWins: 0,

// number of losses the user has aquired
	numLoss: 0,

// number of lives(wrong guesses) the user has before they recieve a loss increment.
	lives: 9,

// array that holds the letters the user has exhausted during game play.
	lettersGuessed: [],

// The letter the computered has generated.
	theLetter: '',
	
// object method that generates a random letter.
	computerGuess: function () {

     this.theLetter = this.alpha[Math.floor(Math.random() * this.alpha.length)].toLowerCase();

	},

// compares the user input letter to the computer letter
	letterCompare: function (comLet, useLet) {

		if(comLet == useLet) {
			alert('Your Psychic! It was ' + useLet.toUpperCase() + '!');
			this.numWins++;
			this.lives = 9;
			this.lettersGuessed = [];
			this.computerGuess();
		}
		else if (comLet != useLet){
			this.lives--;
			this.lettersGuessed += useLet;

				if(this.lives < 1) {
					this.numLoss++;
					this.lives = 9;
					this.lettersGuessed = [];
					this.computerGuess();
			}
		}

	}

};

$(document).ready(function() {

// calls intial game object method so that a random letter is produced for game play ================
	psyGameObj.computerGuess();

// Console Log ******************************************************************************
//console.log(psyGameObj.theLetter);

// Function that uses the user's key input and then invokes the game object's methods.=================
	document.onkeyup = function(event) {

// Takes in User's letter input ======================================================================
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// Calls the game objects method for letter comparison==================================================
	psyGameObj.letterCompare(psyGameObj.theLetter, userGuess);

// JQuery used to update and manipulate the HTML everytime a key is pressed. ==========================
	$('#winsCount').html(psyGameObj.numWins);
	$('#lossCount').html(psyGameObj.numLoss);
	$('#liveCount').html(psyGameObj.lives);
	$('#Guess').html(psyGameObj.lettersGuessed);

// Console Logs for development purposes. ********************** 

//	console.log('wins: ' + psyGameObj.numWins);
//	console.log('losses: ' + psyGameObj.numLoss);
//	console.log('lives: ' + psyGameObj.lives);
//	console.log('letters guessed: ' + psyGameObj.lettersGuessed);
//	console.log(psyGameObj.theLetter)
};

})














