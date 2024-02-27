import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ModeTableHead({name, scale, mode}) {
  return (
    <TableHead>
      <TableRow>
        <TableCell >Mode</TableCell>
        <TableCell align="right">1</TableCell>
        <TableCell align="right">2</TableCell>
        <TableCell align="right">3</TableCell>
        <TableCell align="right">4</TableCell>
        <TableCell align="right">5</TableCell>
        <TableCell align="right">6</TableCell>
        <TableCell align="right">7</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default ModeTableHead;