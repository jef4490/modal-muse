import { scales, pitches } from "../constants/constants.js"

export const getScale = (scale, tonic) => {
    return scales[scale].map((scaleDegree) => 
        { return pitches[getPitchForScaleDegree(scaleDegree, tonic)].name
    });
}

const getPitchForScaleDegree = (scaleDegree, tonic) => {
    return (scaleDegree + tonic)%12;
}