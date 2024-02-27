export const pitches = {     
    0: { value: 0, names: ["C", "B#", "D♭♭"], selectable:[0]},
    1: { value: 1, names: ["C#", "Bx", "D♭"], selectable:[0, 2]},
    2: { value: 2, names: ["D", "Cx", "E♭♭"], selectable:[0]},
    3: { value: 3, names: ["D#", "Eb", "F♭♭"], selectable:[0, 1]},
    4: { value: 4, names: ["E", "Dx", "F♭"], selectable:[0]},
    5: { value: 5, names: ["F", "E#", "G♭♭"], selectable:[0]},
    6: { value: 6, names: ["F#", "Ex", "G♭"], selectable:[0,2]},
    7: { value: 7, names: ["G", "Fx", "A♭♭"], selectable:[0]},
    8: { value: 8, names: ["G#", "A♭"], selectable:[0, 1]},
    9: { value: 9, names: ["A", "Gx", "B♭♭"], selectable:[0]},
    10: { value: 10, names: ["A#", "B♭", "C♭"], selectable:[0, 1]},
    11: { value: 11, names: ["B", "Ax", "C♭"], selectable:[0]},
}

export const diatonicNotes = [
    "A", "B", "C", "D", "E", "F", "G"
]

export const scales = {
    major: [0, 2, 4, 5, 7, 9, 11],
    harmonicMinor: [0, 2, 3, 5, 7, 8, 11],
    melodicMinor: [0, 2, 3, 5, 7, 9, 11],
    melodicMajor: [0, 2, 4, 5, 7, 8, 10]
}

export const chords = {
    33: { name: "diminished", symbol: "ᵒ" },
    34: { name: "minor", symbol: "m" },
    43: { name: "major", symbol: "" },
    44: { name: "augmented", symbol: "+" },
    333: { name: "fully diminished 7th", symbol: "ᵒ7" },
    334: { name: "half diminished 7th", symbol: "m7♭5" },
    343: { name: "minor 7th", symbol: "m7" },
    344: { name: "minor major 7th", symbol: "mM7" },
    433: { name: "dominant 7th", symbol: "7" },
    434: { name: "major 7th", symbol: "M7" },
    443: { name: "augmented 7th", symbol: "+7" },
    444: { name: "augmented major 7th", symbol: "+M7" },
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
        "Mixolydian ♭5",
        "Aeolian ♭5",
        "Super Locrian"
    ],
    melodicMajor: [
        "Melodic Major",
        "2nd Mode",
        "3rd Mode",
        "4th Mode",
        "5th Mode",
        "6th Mode",
        "7th Mode",
    ]
}