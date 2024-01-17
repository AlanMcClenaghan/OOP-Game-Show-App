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
        // console.log(this.phrase);
    
        // Splits phrase into each character
        const phraseToDisplay = this.phrase.split('');
        // console.log(phraseToDisplay);
    
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
        // console.log(HTML);
    
        // Get UL element in Phrase div
        const phraseList = document.querySelector('#phrase ul');
        //console.log(phraseList);
    
        // Insert Phrase into DOM
        phraseList.innerHTML = HTML;
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {

        // Get LI element in UL element in Phrase div
        const phraseListItems = document.querySelectorAll('#phrase ul li');
        // console.log(phraseListItems);

        // Variable to hold Boolean set to false
        let letterCorrect = false;

        // Loop through Phrase for letter
        phraseListItems.forEach(item => {
            // console.log(item.textContent);
            if (item.textContent === letter) {
                // Set Boolean to true
                letterCorrect = true;
                this.showMatchedLetter(letter);
            } 
        });
        console.log(letterCorrect);
        // Return Boolean to handleInteraction() method
        return letterCorrect;
    };

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    // Reveals the letter(s) on the board that matches the player's selection. 
    showMatchedLetter(letter) {
        // Select all of the letter DOM elements that have a CSS class name that matches the selected letter  
        const matchingElements = document.querySelectorAll(`.${letter}`);
        // console.log(matchingElements);

        // replace each selected element's hide CSS class with the show CSS class.
        matchingElements.forEach(element => {
            // console.log(element);
            element.classList.remove('hide');
            element.classList.add('show');
            // console.log(element);
        });
    };

}