const inputEl = document.getElementById('input-feeling');
const inputEn = document.getElementById('input-energy');
const buttonEl = document.getElementById('submit');
const imageEl = document.getElementById('image-area');
const imageEn = document.getElementById('image-area-2');


// Functions
function getHappinessImage(happiness) {
    if (happiness < 4) return 'http://www.placekitten.com/200/200'
    if (happiness > 7) return 'http://www.placekitten.com/250/250'
    return 'http://www.placekitten.com/500/500'
}

function getSadImage(energy) {
    if (energy < 4) return 'https://www.placecage.com/gif/284/196'
    if (energy > 7) return 'https://www.placecage.com/c/460/300'
    return 'https://www.placecage.com/300/200'
}


buttonEl.addEventListener('click', () => {
    console.log(inputEl.value);
    const kittyImage = getHappinessImage(inputEl.value);
    const cageImage = getSadImage(inputEn.value);

    imageEl.src = kittyImage;
    imageEn.src = cageImage;
})

