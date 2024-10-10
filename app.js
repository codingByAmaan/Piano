let allKeys = document.querySelectorAll("#All-keys li");
let volume = document.getElementById("Volume");
let showKeys = document.getElementById("showKeys");
let num = 1;

let allaudio = [];

// Function to handle audio playback for a key press
let connectKey = (key) => {
    // Create a new Audio instance for each key press, use .wav files from the 'audio' directory
    let audio = new Audio(`./audio/${key}.wav`);
    audio.volume = volume.value; // Set volume based on the current slider value
    audio.play(); // Play the audio

    // Add visual feedback for the pressed key
    let clickKey = document.querySelector(`[data-key="${key}"]`);
    if (clickKey) {
        clickKey.classList.add("activeKeys");
        setTimeout(() => {
            clickKey.classList.remove("activeKeys");
        }, 150);
    }
};

// Add click event listeners to each key
allKeys.forEach(function (keyElement) {
    allaudio.push(keyElement.dataset.key); // Store each key's data-key value in allaudio
    keyElement.addEventListener("click", () => connectKey(keyElement.dataset.key));
});

// Function to handle key press events from the keyboard
let pressedKey = (e) => {
    const key = e.key.toUpperCase(); // Convert pressed key to uppercase to match data-key
    if (allaudio.includes(key)) {
        connectKey(key);
    }
};

// Toggle display of key labels when the checkbox is clicked
let keysDisplay = () => {
    let keyWords = document.querySelectorAll("#keyWords p");
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
};

// Add event listeners
document.addEventListener("keydown", pressedKey); // Listen for keyboard presses
volume.addEventListener("input", () => {
    // No need to handle anything here, as volume is applied dynamically on key press
});
showKeys.addEventListener("click", keysDisplay); // Toggle key labels
