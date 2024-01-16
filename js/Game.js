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
        console.log(overlay);
        overlay.style.display = "none";
        console.log(this.getRandomPhrase().phrase);
        this.activePhrase = this.getRandomPhrase();
        console.log("activePhrase: " + this.activePhrase.phrase);
        this.activePhrase.addPhraseToDisplay();
    };
}