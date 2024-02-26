import { pitches, diatonicNotes } from "../constants/constants.js"

export const getScale = (scale, firstNoteName) => {
    let previousNoteName = null;
    return scale.map((scaleDegree) => { 
        if(previousNoteName == null){
            previousNoteName = firstNoteName;
            return firstNoteName;
        }
        let result = findDiatonicNameForPitch(pitches[scaleDegree%12], previousNoteName)
        previousNoteName = result;
        return result;
    });
}

function findDiatonicNameForPitch(pitch, previousNoteName){
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