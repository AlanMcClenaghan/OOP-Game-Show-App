/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        this.missed = 0;
        console.log(this.missed);
        this.phrases = [
            new Phrase('A piece of cake'),
            new Phrase('Call it a day'),
            new Phrase('Once in a blue moon'),
            new Phrase('The best of both worlds'),
            new Phrase('The last straw')
        ];
        console.log(this.phrases);
        this.activePhrase = null;
        console.log(this.activePhrase);
    }
}