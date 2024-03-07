import React from 'react';
import Typography from '@mui/material/Typography';

import ModeTable from '../modeTable.jsx';
import { getSimpleModes } from '../../calculators/modeCalculator.js'

const FirstPage = () => {
  const abbreviatedModesToDisplay = getSimpleModes('simpleMajor', 0).filter((_, i) => i === 0);
  return (
    <>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        When playing in a given key, such as C major, there are seven diatonic chords. These are the triads built on each note of the C major scale.
      </Typography>
      <br/>
      <div className="table-container">
        <ModeTable keyCenter={"C"} modesToDisplay={abbreviatedModesToDisplay} complexity={'simple'} 
          namesOfSelectedModes={['Major']}/>
      </div>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        These allow for fully functional harmony, but sometimes you might wish to add some new colors into our music.
      </Typography>
    </>
  )
}

export default FirstPage;