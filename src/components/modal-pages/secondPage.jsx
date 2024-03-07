import React from 'react';
import Typography from '@mui/material/Typography';

import ModeTable from '../modeTable.jsx';
import { getSimpleModes } from '../../calculators/modeCalculator.js'

const SecondPage = () => {  
  const modesToDisplay = getSimpleModes('simpleMajor', 0);
  return (
    <>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        One approach is to borrow a chord from a parallel scale (one that shares the root of C), such as C minor.
      </Typography>
      <br/>
      <div className="table-container">
        <ModeTable keyCenter={"C"} modesToDisplay={modesToDisplay} complexity={'simple'} 
          namesOfSelectedModes={['Major', 'Minor']}/>
      </div>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        For example, the <Typography color="secondary" component="span">F minor</Typography> chord that occurs in the C minor scale, might add some interesting flavor to your otherwise diatonic to C major chord progression.
      </Typography>
    </>
  )
}

export default SecondPage;