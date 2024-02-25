import { pitches } from "../constants/constants.js"

export const getScale = (scale) => {
    return scale.map((scaleDegree) => 
        { return pitches[scaleDegree%12].name
    });
}