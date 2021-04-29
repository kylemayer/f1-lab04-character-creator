const inputEl = document.getElementById ('input-feeling');
const buttonEl = document.getElementById ('submit');
const imageEl = document.getElementById ('image-area');


// Functions
function getHappinessImage(happiness) {
    if (happiness < 4) return 'http://www.placekitten.com/300/300'
    if (happiness > 7) return 'http://www.placekitten.com/400/400'
    return 'http://www.placekitten.com/500/500'
}

// function getSadImage(sad) {
//     if (sad)


// }


buttonEl.addEventListener('click', () => {
    console.log(inputEl.value);
    const kittyImage = getHappinessImage(inputEl.value);
    imageEl.src = kittyImage;

})

