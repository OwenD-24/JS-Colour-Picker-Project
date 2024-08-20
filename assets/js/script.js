// Code for Selecting Elements and Setting up Event Listeners
const colorCards = document.querySelectorAll('.color-card');
const btnEl = document.getElementById('btn');

// Code for Click Event Listeners to Copy Colours
colorCards.forEach(card => {
    card.addEventListener('click', () => {
        copyClipboard(card.querySelector('p').innerHTML);
    });
});

// Listener for Spacebar press down to Generate new Palette
document.addEventListener('keydown', e => {
    if (e.key === '') {
        e.preventDefault();
        createPalette();
    }
});

// New Palette Button 
btnE1.addEventListener('click', () => {
    createPallet();
})