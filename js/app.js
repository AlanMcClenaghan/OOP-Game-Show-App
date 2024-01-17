/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// Get Button element
const button = document.querySelector('#btn__reset');
// Get Key elements
let keys = document.querySelectorAll('.key');

// Add Event Listener to Button and Start/Restart Game
button.addEventListener('click', () => {
    if (button.textContent === 'Start Game') {
        game = new Game();
        game.startGame();
    } else {
        // Clear phrase
        const phraseList = document.querySelector('#phrase ul');
        phraseList.innerHTML = '';

        // Enable keys
        keys.forEach(key => {
            key.disabled = false;
            key.className = 'key';
        });

        // Restore Live in the scoreboard
        const lostHearts = document.querySelectorAll(`img[src="images/lostHeart.png"]`);
        lostHearts.forEach(heart => {
            heart.src = "images/liveHeart.png";
        });

        // Reset Game
        game = null;
        game = new Game();
        game.startGame();
    }
    
});

// Add Event Listener to Keys and Start Game
keys.forEach(key => {
    key.addEventListener('click', () => {
        game.handleInteraction(key);
    });
});

// Add keyboard functionality
document.addEventListener('keyup', e => {
    const keyStroke = e.key
    keys.forEach(key => {      
        if (key.textContent === keyStroke) {
            game.handleInteraction(key);
        }
    })
});