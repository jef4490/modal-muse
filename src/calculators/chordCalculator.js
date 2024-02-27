import { chords } from "../constants/constants.js"

export const getChord = (mode, startingPitch, getSeventhChords) => {
    let currentPitchIndex = getPitchIndex(mode, startingPitch);
    const firstInterval = getInterval(currentPitchIndex, mode)

    const pitchOfThird = (startingPitch + firstInterval)%12;
    currentPitchIndex = getPitchIndex(mode, pitchOfThird);

    const secondInterval = getInterval(currentPitchIndex, mode);
    
    let chordKey = `${firstInterval}` + `${secondInterval}`;

    if(getSeventhChords){
        const pitchOfFifth = (pitchOfThird + secondInterval)%12;
        currentPitchIndex = getPitchIndex(mode, pitchOfFifth);
        const thirdInterval = getInterval(currentPitchIndex, mode);
        chordKey += thirdInterval;
    }

    return chords[chordKey].symbol;
}

function getPitchIndex(mode, startingPitch){
    return mode.findIndex(element => element === startingPitch);
}

function getInterval(pitchIndex, mode){
    const currentPitch = getPitchFromMode(pitchIndex, mode);
    let thirdScaleDegree = getPitchFromMode(pitchIndex + 2, mode);
    if(thirdScaleDegree < currentPitch){
        thirdScaleDegree += 12;
    }
    return thirdScaleDegree - currentPitch;
}

function getPitchFromMode(pitchIndex, mode){
    const octaveAdjustedIndex = pitchIndex%7;
    return mode[octaveAdjustedIndex];
}