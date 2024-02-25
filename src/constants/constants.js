export const pitches = {     
    0: { value: 0, name: "C"},
    1: { value: 1, name: "C#"},
    2: { value: 2, name: "D"},
    3: { value: 3, name: "D#"},
    4: { value: 4, name: "E"},
    5: { value: 5, name: "F"},
    6: { value: 6, name: "F#"},
    7: { value: 7, name: "G"},
    8: { value: 8, name: "G#"},
    9: { value: 9, name: "A"},
    10: { value: 10, name: "A#"},
    11: { value: 11, name: "B"},
}

export const scales = {
    major: [0, 2, 4, 5, 7, 9, 11],
    harmonicMinor: [0, 2, 3, 5, 7, 8, 11],
    melodicMinor: [0, 2, 3, 5, 7, 9, 11]
}

export const chords = {
    33: { name: "diminished" },
    34: { name: "minor" },
    43: { name: "major" },
    44: { name: "augmented" }
}

export const modeNames = {
    major: [
        "Ionian",
        "Dorian",
        "Phrygian",
        "Lydian",
        "Mixolydian",
        "Aeolian",
        "Locrian"
    ],
    harmonicMinor: [
        "Harmonic Minor",
        "Locrian ♮6",
        "Ionian ♯5",
        "Altered Dorian",
        "Phrygian Dominant",
        "Lydian #2",
        "Altered Diminished"
    ],
    melodicMinor: [
        "Melodic Minor",
        "Dorian b2",
        "Lydian Augmented",
        "Lydian Dominant",
        "Mixolydian b5",
        "Aeolian b5",
        "Super Locrian"
    ]
}