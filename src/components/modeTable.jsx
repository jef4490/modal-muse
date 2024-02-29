import { React, useMemo } from 'react';
import { getChord } from '../calculators/chordCalculator.js'
import { getScale } from '../calculators/scaleCalculator.js'
import ModeDisplay from './modeDisplay.jsx';
import ModeTableHead from './modeTableHead.jsx';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ModeTable({parallelModes, namesOfSelectedModes, keyCenter, showSeventhChords}) {
  return (
    <TableContainer sx={{width: "max-content", marginLeft:'auto', marginRight: 'auto', display: 'flex'}} component={Paper}>
      <Table size="small" aria-label="a dense table" sx={{padding: '1px  1px'}}>
        <ModeTableHead />
        <TableBody>
            {useMemo(() => parallelModes.map((mode, i) => <ModeDisplay 
                key={i} mode={mode} name={namesOfSelectedModes[i]} 
                scale={getScale(mode, keyCenter)} showSeventhChords={showSeventhChords}/>), [parallelModes, keyCenter, showSeventhChords])}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default ModeTable;