/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// Get Button element
const button = document.querySelector('#btn__reset');
// Get Key elements
let keys = document.querySelectorAll('.key')
// console.log(keys);

// Add Event Listener to Button and Start/Restart Game
button.addEventListener('click', () => {
    if (button.textContent === 'Start Game') {
        game = new Game();
        game.startGame();
    } else {
        // Clear phrase
        const phraseList = document.querySelector('#phrase ul');
        // console.log(phraseList);
        phraseList.innerHTML = '';

        // Enable keys
        keys.forEach(key => {
            key.disabled = false;
            key.className = 'key';
        });

        // Restore Live in the scoreboard
        const lostHearts = document.querySelectorAll(`img[src="images/lostHeart.png"]`);
        // console.log(lostHearts);
        lostHearts.forEach(heart => {
            heart.src = "images/liveHeart.png";
        });
        // console.log(liveHearts[0]);
        // console.log(lostHearts);

        // Reset Game
        // console.log(game)
        game = null;
        game = new Game();
        game.startGame();
    }
    
});

// Add Event Listener to Keys and Start Game
keys.forEach(key => {
    key.addEventListener('click', () => {
        // console.log(key);
        game.handleInteraction(key);
    });
});

// Add keyboard functionality
document.addEventListener('keyup', e => {
    console.log(e.key);
    const keyStroke = e.key
    console.log(keyStroke);
    keys.forEach(key => {      
        if (key.textContent === keyStroke) {
            console.log(key.textContent);
            game.handleInteraction(key);
        }
    })
});