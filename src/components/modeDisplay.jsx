import React from 'react';
import { getChord } from '../calculators/chordCalculator.js'

function ModeDisplay({name, scale, mode, showSeventhChords}) {
  return (
    <>
    <tr>
        <td>
            {name} Triads
        </td>
        {scale.map((pitch, i) => <td key={pitch}>{pitch}{getChord(mode, mode[i], showSeventhChords)}</td>)}
    </tr>
    {/* <tr>
        <td>
            7th Chords
        </td>
        {scale.map((pitch, i) => <td key={pitch}>{getChord(mode, mode[i])}</td>)}
    </tr> */}
    </>
  )
}

export default ModeDisplay;