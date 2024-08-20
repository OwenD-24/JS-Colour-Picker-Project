// Code for Selecting Elements and Setting up Event Listeners
const colorCards = document.querySelectorAll('.color-card');
const btnEl = document.getElementById('btn');

// Code for Click Event Listeners to Copy Colours
colorCards.forEach(card => {
    card.addEventListener('click', () => {
        copyClipboard(card.querySelector('p').innerText);
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
    createPalette();
})

// Copying a colour to the Clipboard
async function copyClipboard(color) {
    await navigator.clipboard.writeText(color);

    const notificationE1 = document.createElement('div');
    notificationEl.className = 'fixed top-4 z-20 bg-slate-800 rounded-full py-4 px-20 text-white';

    notificationEl.innerHTML = `Color <b>${color}</b> is copied to the clipboard!`;
    
    document.body.appendChild(notificationEl);

    setTimeout(() => {
        notificationEl.remove();
    }, 3000);
}