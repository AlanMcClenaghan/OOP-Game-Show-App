/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        this.missed = 0;
        // console.log(this.missed);
        this.phrases = [
            new Phrase('A piece of cake'),
            new Phrase('Call it a day'),
            new Phrase('Once in a blue moon'),
            new Phrase('The best of both worlds'),
            new Phrase('The last straw')
        ];
        // console.log(this.phrases);
        this.activePhrase = null;
        // console.log(this.activePhrase);
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * 5);
        // console.log("randomNumber: " + randomNumber);
        const randomPhrase = this.phrases[randomNumber];
        // console.log("randomPhrase: " + randomPhrase.phrase);
        return randomPhrase;
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const overlay = document.querySelector('#overlay');
        // console.log(overlay);
        overlay.style.display = "none";
        // console.log(this.getRandomPhrase().phrase);
        this.activePhrase = this.getRandomPhrase();
        // console.log("activePhrase: " + this.activePhrase.phrase);
        this.activePhrase.addPhraseToDisplay();
        // this.activePhrase.checkLetter('e');
        // console.log(this.checkForWin());
        // this.removeLife();
    };

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won 
     * */
    checkForWin() {

        // Get Hidden Letters and convert to array
        let phraseListItems = document.querySelectorAll('#phrase ul li');
        phraseListItems = Array.from(phraseListItems);
        // console.log(phraseListItems);

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
        // console.log(this.missed);
        // Increment missed property
        this.missed += 1;
        // console.log(this.missed);

        // Remove a life from the scoreboard
        const liveHearts = document.querySelectorAll(`img[src="images/liveHeart.png"]`);
        // console.log(liveHearts);
        liveHearts[0].src = "images/lostHeart.png";
        // console.log(liveHearts[0]);

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
        // console.log(overlay);
        overlay.style.display = "block";
        const gameOverMessage = document.querySelector('#game-over-message');
        // console.log(gameOverMessage.textContent);

        if (gameWon) {
            gameOverMessage.textContent = "Congratulation! You Win!";
            overlay.classList.replace("start", "win");
            // console.log(gameOverMessage.textContent);
        } else {
            gameOverMessage.textContent = "Sorry, better luck next time";
            overlay.classList.replace("start", "lose");
            // console.log(gameOverMessage.textContent)
        }
    };

    

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {





        console.log(button);
    };





}