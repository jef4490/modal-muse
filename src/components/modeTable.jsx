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

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

        //   {/* <table className="model-table">
        //     <thead>
        //     <TableHeader />
        //     </thead>
        //     <tbody>
        //     {useMemo(() => parallelModes.map((mode, i) => <ModeDisplay 
        //         key={i} mode={mode} name={namesOfSelectedModes[i]} 
        //         scale={getScale(mode, keyCenter)} showSeventhChords={showSeventhChords}/>), [parallelModes, keyCenter, showSeventhChords])}
        //     </tbody>
        // </table> */}
function ModeTable({parallelModes, namesOfSelectedModes, keyCenter, showSeventhChords}) {
  return (
    <TableContainer sx={{width: "max-content", marginLeft:'auto', marginRight: 'auto'}} component={Paper}>
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