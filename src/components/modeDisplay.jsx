import React from 'react';
import { getChord } from '../calculators/chordCalculator.js'

function ModeDisplay({name, scale, mode}) {
  return (
    <>
    <tr>
      <td>
        {name}
      </td>
        {scale.map((pitch, i) => <td key={pitch}>{pitch}</td>)}
    </tr>
    <tr>
        <td/>
        {scale.map((pitch, i) => <td key={pitch}>{getChord(mode, mode[i])}</td>)}
    </tr>
    </>
  )
}

export default ModeDisplay;