/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('A piece of cake'),
            new Phrase('Call it a day'),
            new Phrase('Once in a blue moon'),
            new Phrase('The best of both worlds'),
            new Phrase('The last straw')
        ];
        this.activePhrase = null;
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * 5);
        const randomPhrase = this.phrases[randomNumber];
        return randomPhrase;
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won 
     * */
    checkForWin() {

        // Get Hidden Letters and convert to array
        let phraseListItems = document.querySelectorAll('#phrase ul li');
        phraseListItems = Array.from(phraseListItems);

        // Count number of hidden letters
        const hiddenLetters = phraseListItems.reduce((count, item) => {
            if (item.classList.contains('hide')) {
                return count + 1;
            }
            return count
        }, 0);

        // Check to if there are any hidden letter
        if (hiddenLetters === 0) {
            return true;
        } else {
            return false;
        }
        
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        // Increment missed property
        this.missed += 1;

        // Remove a life from the scoreboard
        const liveHearts = document.querySelectorAll(`img[src="images/liveHeart.png"]`);
        liveHearts[0].src = "images/lostHeart.png";

        // If player has no more lives, end the game
        if (this.missed === 5) {
            this.gameOver(false);
        }
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = "flex";
        const gameOverMessage = document.querySelector('#game-over-message');

        if (gameWon) {
            gameOverMessage.textContent = "Congratulation! You Win!";
            overlay.className = "win";
            button.textContent = "Restart Game";
        } else {
            gameOverMessage.textContent = "Sorry, better luck next time";
            overlay.className = "lose";
            button.textContent = "Try Again!";
        }

        button.style.animation = "slide 4s 1";

        gameOverMessage.style.animation = "slide 1s 1";

    };

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
        // Disable selected button
        button.disabled = true

        // Get letter of nutton
        const letter = button.textContent;

        // Calls Checkletter method and sets Boolean true or false
        const letterCorrect = this.activePhrase.checkLetter(letter);

        // If letter is incorrect/Correct
        if (!letterCorrect) {
            // Set button class to wrong
            button.classList.add('wrong');
            // Remove a life
            this.removeLife();
        } else {
            // Set button class to chosen
            button.classList.add('chosen');
            // Checks for win true or false
            const winningGuess = this.checkForWin();
            // If winning guess call gameOver
            if (winningGuess) {
                this.gameOver(winningGuess);
            }
        }
    };
}