/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        // console.log(this.phrase);
    }


    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        console.log(this.phrase);
    
        // Splits phrase into each character
        const phraseToDisplay = this.phrase.split('');
        console.log(phraseToDisplay);
    
        // Variable to hold code snippet to update HTML
        let HTML = "";
    
        // Each letter is presented by an empty box, one li element for each letter. 
        // Loop through phrase to construct Phrase to Display
        phraseToDisplay.forEach(character => {
            let li = ""
            if (character === " ") {
                li = `<li class="space"> </li>`
            } else {
                li = `<li class="hide letter ${character}">${character}</li>`
            }
            HTML += li
        });
        console.log(HTML);
    
        // Get UL element in Phrase div
        const phraseList = document.querySelector('#phrase ul');
        console.log(phraseList);
    
        // Insert Phrase into DOM
        phraseList.innerHTML = HTML;

    }
}