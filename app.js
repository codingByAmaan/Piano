
let allKeys = document.querySelectorAll("#All-keys li");
let volume = document.getElementById("Volume");
let showKeys = document.getElementById("showKeys");
let num = 1;

let allaudio = [];

let connectKey = (key) => {
    // Create a new Audio instance for each key press
    let audio = new Audio(`tunes/${key}.wav`);
    audio.volume = volume.value; // Set the volume based on the current slider value
    audio.play();

    let clickKey = document.querySelector(`[data-key="${key}"]`);
    if (clickKey) {
        clickKey.classList.add("activeKeys");
        setTimeout(() => {
            clickKey.classList.remove("activeKeys");
        }, 150);
    }
}

allKeys.forEach(function (Keys) {
    allaudio.push(Keys.dataset.key);
    Keys.addEventListener("click", () => connectKey(Keys.dataset.key));
});

let pressedKey = (e) => {
    const key = e.key.toUpperCase();
    if (allaudio.includes(key)) {
        connectKey(key);
    }
}

let keysDisplay = (k) => {
    let keyWords = document.querySelectorAll("#keyWords");
    if (num === 1) {
        keyWords.forEach((w) => {
            w.style.visibility = 'hidden';
        });
        num = 0;
    } else {
        keyWords.forEach((w) => {
            w.style.visibility = "visible";
        });
        num = 1;
    }
}

document.addEventListener("keydown", pressedKey);
volume.addEventListener("input", () => {
    // Volume will now apply to newly created audio instances
    // The slider only affects future sounds
});
showKeys.addEventListener("click", keysDisplay);
