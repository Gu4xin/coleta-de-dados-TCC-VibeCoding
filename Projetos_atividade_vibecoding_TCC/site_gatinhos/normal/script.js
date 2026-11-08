const pianoKeys = document.querySelector(".play-piano-button");

const pianoNotes = [
    "DÓ",
    "RÉ",
    "MÍ",
    "FÁ",
    "SOL",
    "LÁ",
    "SÍ",
];

pianoKeys.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * pianoNotes.length);
    const randomNote = pianoNotes[randomIndex];
    alert("você tocou a nota: " + randomNote);
});