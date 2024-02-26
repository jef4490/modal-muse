export const pitches = {     
    0: { value: 0, names: ["C", "B#", "Dbb"], selectable:[0]},
    1: { value: 1, names: ["C#", "Bx", "Db"], selectable:[0, 2]},
    2: { value: 2, names: ["D", "Cx", "Ebb"], selectable:[0]},
    3: { value: 3, names: ["D#", "Eb", "Fbb"], selectable:[0, 1]},
    4: { value: 4, names: ["E", "Dx", "Fb"], selectable:[0]},
    5: { value: 5, names: ["F", "E#", "Gbb"], selectable:[0]},
    6: { value: 6, names: ["F#", "Ex", "Gb"], selectable:[0,2]},
    7: { value: 7, names: ["G", "Fx", "Abb"], selectable:[0]},
    8: { value: 8, names: ["G#", "Ab"], selectable:[0, 1]},
    9: { value: 9, names: ["A", "Gx", "Bbb"], selectable:[0]},
    10: { value: 10, names: ["A#", "Bb"], selectable:[0, 1]},
    11: { value: 11, names: ["B", "Ax", "Cb"], selectable:[0]},
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