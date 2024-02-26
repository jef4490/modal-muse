import { pitches, diatonicNotes } from "../constants/constants.js"

export const getScale = (scale) => {
    let previousNoteName = null;
    return scale.map((scaleDegree) => { 
        let result = findDiatonicNameForPitch(pitches[scaleDegree%12], previousNoteName)
        previousNoteName = result;
        return result;
    });
}

function findDiatonicNameForPitch(pitch, previousNoteName){
    if(previousNoteName === null){
        return pitch.names[0];
    }
    let letterName = diatonicNotes[(getIndexOfDiatonicNote(previousNoteName)+1)%7];
    return pitch.names.find(name => name[0] === letterName);
}

function getIndexOfDiatonicNote(pitch){
    var letterName = pitch[0];
    let i = 0;
    while(diatonicNotes[i] != letterName){
        i++;
        if(i > 100){
            break;
        }
    }

    return i;
}