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
let debounceTimeout;
document.addEventListener('keydown', e => {
    if (e.key === ' ') {
        e.preventDefault();
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => createPalette(), 200);
    }
});

// New Palette Button
btnEl.addEventListener('click', () => {
    createPalette();
});

// Copying a colour to the Clipboard
async function copyClipboard(color) {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(color);
    } else {
        alert(`Your browser does not support clipboard copying. Please copy the color manually: ${color}`);
    }

    const notificationEl = document.createElement('div');
    notificationEl.className = 'fixed z-20 bg-slate-800 rounded-full py-2 px-4 text-white';
    notificationEl.style.top = '1rem';
    notificationEl.style.right = '1rem';
    notificationEl.innerHTML = `Color <b>${color}</b> is copied to the clipboard!`;

    document.body.appendChild(notificationEl);

    setTimeout(() => {
        notificationEl.remove();
    }, 3000);
}

// Applying new Palette
function createPalette() {
    colorCards.forEach(card => {
        const newColor = generateColor();

        // Update the background color of the card
        card.querySelector('div').style.background = newColor;
        
        // Update the text to display the new color code
        card.querySelector('p').innerText = newColor;

        // Apply the box shadow with the new color
        card.style.boxShadow = `0 4px 15px ${newColor}`;
    });
}

// Generating a Random Colour
function generateColor() {
    const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
        'a', 'b', 'c', 'd', 'e', 'f']; 

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hexArray[Math.floor(Math.random() * hexArray.length)];
    }

    return color;
}
