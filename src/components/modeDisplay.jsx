import { React, useMemo } from 'react';
import { getChord } from '../calculators/chordCalculator.js'

function ModeDisplay({name, scale, mode, showSeventhChords}) {
  return (
    <>
        <tr>
            <td>
                {name}
            </td>
            {useMemo(() => scale.map((pitch, i) => <td key={pitch}>{pitch}{getChord(mode, mode[i], showSeventhChords)}</td>), 
                [scale, mode, showSeventhChords])}
        </tr>
    </>
  )
}

export default ModeDisplay;