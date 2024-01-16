/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// Get Button element
const button = document.querySelector('#btn__reset');

// Add Event Listener to Button and Start Game
button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});