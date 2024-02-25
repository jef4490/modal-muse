import { scales } from "../constants/constants.js"
import { getScale } from "./scaleCalculator.js"

export const getModes = (quality) => {
    let result = {};
    let currentMode = scales[quality];
    result[1] = currentMode;
    for(let i = 1; i < currentMode.length; i++){
        let nextMode = [...result[i]];
        let firstScaleDegree = nextMode.shift();
        nextMode.push(firstScaleDegree);
        result[i+1] = nextMode;
    }
    return Object.values(result);
}

export const getParallelModes = (quality, startingPitch) => {
    let modes = getModes(quality);

    let parallelModes = modes.map((mode) => {
        while(mode[0] != startingPitch){
            mode = mode.map(pitch => transposePitch(pitch, 1))
        }
        return mode;
    });

    return parallelModes;
}

function transposePitch(pitch, interval){
    return (pitch + interval) % 12;
}