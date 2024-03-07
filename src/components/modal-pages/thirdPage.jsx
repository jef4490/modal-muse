import React from 'react';
import Typography from '@mui/material/Typography';

import ModeTable from '../modeTable.jsx';
import { getParallelModes } from '../../calculators/modeCalculator.js'
import { modeNames } from '../../constants/constants.js';

const ThirdPage = () => {  
  const modesToDisplay = getParallelModes('major', 0).filter((_, i) => i < 3);
  return (
    <>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Want even more colors? Try switching the <Typography color="secondary" component="span">Complexity</Typography> to 'Advanced' to display every mode of the Major scale.
      </Typography>
      <br/>
      <div className="table-container">
        <ModeTable keyCenter={"C"} modesToDisplay={modesToDisplay} complexity={'major'} 
          namesOfSelectedModes={modeNames['major']}/>
      </div>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       Different <Typography color="secondary" component="span">Base Scales</Typography>, such as 'Harmonic Minor' will result in completely different chords. 
      </Typography>
    </>
  )
}

export default ThirdPage;