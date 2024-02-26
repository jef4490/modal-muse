export const pitches = {     
    0: { value: 0, names: ["C", "B#", "Dbb"]},
    1: { value: 1, names: ["C#", "Bx", "Db"]},
    2: { value: 2, names: ["D", "Cx", "Ebb"]},
    3: { value: 3, names: ["D#", "Eb", "Fbb"]},
    4: { value: 4, names: ["E", "Dx", "Fb"]},
    5: { value: 5, names: ["F", "E#", "Gbb"]},
    6: { value: 6, names: ["F#", "Ex", "Gb"]},
    7: { value: 7, names: ["G", "Fx", "Abb"]},
    8: { value: 8, names: ["G#", "Ab"]},
    9: { value: 9, names: ["A", "Gx", "Bbb"]},
    10: { value: 10, names: ["A#", "Bb"]},
    11: { value: 11, names: ["B", "Ax", "Cb"]},
}

export const diatonicNotes = [
    "A", "B", "C", "D", "E", "F", "G"
]

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