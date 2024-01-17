/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// Get Button element
const button = document.querySelector('#btn__reset');
// Get Key elements
let keys = document.querySelectorAll('.key')
console.log(keys);

// Add Event Listener to Button and Start Game
button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// Add Event Listener to Keys and Start Game
keys.forEach(key => {
    key.addEventListener('click', () => {
        console.log(key.textContent)
        game.handleInteraction(key.textContent);
    });
});