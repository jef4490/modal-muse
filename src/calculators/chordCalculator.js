import { chords } from "../constants/constants.js"

export const getChord = (mode, startingPitch) => {
    let currentPitchIndex = getPitchIndex(mode, startingPitch);
    let firstInterval = getInterval(currentPitchIndex, mode)
    
    let pitchOfThird = (startingPitch + firstInterval)%12;
    currentPitchIndex = getPitchIndex(mode, pitchOfThird);

    let secondInterval = getInterval(currentPitchIndex, mode);
    
    let chordKey = `${firstInterval}` + `${secondInterval}`;
    return chords[chordKey].name;
}

function getPitchIndex(mode, startingPitch){
    let i = 0;
    while(mode[i] != startingPitch){
        i++;
        if(i > 100){
            break;
        }
    }
    return i;
}

function getInterval(pitchIndex, mode){
    let currentPitch = getPitchFromMode(pitchIndex, mode);
    let thirdScaleDegree = getPitchFromMode(pitchIndex + 2, mode);
    if(thirdScaleDegree < currentPitch){
        thirdScaleDegree += 12;
    }
    return thirdScaleDegree - currentPitch;
}

function getPitchFromMode(pitchIndex, mode){
    let octaveAdjustedIndex = pitchIndex%7;

    return mode[octaveAdjustedIndex];
}