// Code for Selecting Elements and Setting up Event Listeners
const colorCards = document.querySelectorAll('.color-cards');
const btnEl = document.getElementById('button');

// Code for Click Event Listeners to Copy Colours
colorCards.forEach(card => {
    card.addEventListener('click', () => {
        copyClipboard(card.querySelector('p').innerHTML);
    });
});