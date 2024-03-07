import { React, useMemo } from 'react';
import { getScale } from '../calculators/scaleCalculator.js'
import ModeDisplay from './modeDisplay.jsx';
import ModeTableHead from './modeTableHead.jsx';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

function ModeTable({modesToDisplay, namesOfSelectedModes, keyCenter, complexity}) {
  return (
    <TableContainer sx={{width: "max-content", marginLeft:'auto', marginRight: 'auto', display: 'flex', overflow: 'visible'}} component={Paper}>
      <Table size="small" aria-label="a dense table" sx={{padding: '1px  1px'}}>
        <ModeTableHead />
        <TableBody>
            {useMemo(() => modesToDisplay.map((mode, i) => <ModeDisplay 
                key={i} mode={mode} name={namesOfSelectedModes[i]} 
                scale={getScale(mode, keyCenter)} complexity={complexity} isFirstMode={i === 0}/>), [modesToDisplay, keyCenter, complexity])}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default ModeTable;