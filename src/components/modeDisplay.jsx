import { React, useMemo } from 'react';
import { getChord } from '../calculators/chordCalculator.js'
import { suggestedChords } from '../constants/constants.js';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function ModeDisplay({name, scale, mode, isFirstMode, complexity}) {
  const isSuggested = (i) => {
    if(shouldDisplayAsSuggestedChord(complexity, isFirstMode, name, i)){
      return true;
    }
    return false;
  }
  const showSeventhChords = complexity ==='jazz';

  return (
    <TableRow key={name} sx={{padding: 1}}>
        <TableCell align="right">{name}</TableCell>
        {useMemo(() => scale.map((pitch, i) => <TableCell align="right" key={pitch} className={isSuggested(i) ? "blob suggested data-cell" : "data-cell"}>
            {pitch}{getChord(mode, mode[i], showSeventhChords)}</TableCell>), 
            [scale, mode, showSeventhChords])}
    </TableRow>
  )
}

export default ModeDisplay;

function shouldDisplayAsSuggestedChord(complexity, isFirstMode, name, i) {
  return complexity === 'simple' && !isFirstMode && suggestedChords[name].includes(i);
}
