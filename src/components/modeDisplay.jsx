import { React, useMemo } from 'react';
import { getChord } from '../calculators/chordCalculator.js'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ModeDisplay({name, scale, mode, showSeventhChords}) {
  return (
    <TableRow key={name} sx={{padding: 1}}>
        <TableCell align="right">{name}</TableCell>
        {useMemo(() => scale.map((pitch, i) => <TableCell align="right" key={pitch}>
            {pitch}{getChord(mode, mode[i], showSeventhChords)}</TableCell>), 
            [scale, mode, showSeventhChords])}
    </TableRow>
  )
}

export default ModeDisplay;