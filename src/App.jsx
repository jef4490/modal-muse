import { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import museImg from './assets/muse.png'
import viteLogo from '/vite.svg'
import './App.css'
import { pitches, scales, modeNames } from './constants/constants.js'
import { getScale } from './calculators/scaleCalculator.js'
import { getModes, getParallelModes } from './calculators/modeCalculator.js'
import ModeDisplay from './components/modeDisplay.jsx';
import TableHeader from './components/tableHeader.jsx';

function App() {
  const [keyCenter, setKeyCenter] = useState("C");
  const [scaleGroup, setScaleGroup] = useState("major");
  const [showSeventhChords, setShowSeventhChords] = useState(false);

  let parallelModes = []; 
  
  let namesOfSelectedModes = modeNames[scaleGroup];
  let selectableKeyCenters = Object.values(pitches).reduce((accumulator, currentPitch) => {
    currentPitch.selectable.forEach(selectableOption => {
      let selectableKeyCenter = {...currentPitch, displayName: currentPitch.names[selectableOption]}; 
      accumulator.push(selectableKeyCenter);
    });
    return accumulator;
  }, []);

  parallelModes = getParallelModes(scaleGroup, selectableKeyCenters.find(selectableKeyCenter => selectableKeyCenter.displayName === keyCenter).value);

  return (
    <>
      <div>
        <img src={museImg} className="muse" alt="React logo" />
      </div>
      <h1>Modal Muse</h1>
      <h2>Modal Interchange Calculator</h2>
      <div className="selection-section">
        <Box sx={{ minWidth: 120, maxWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Key Center</InputLabel>
            <Select
              value={keyCenter}
              label="Key Center"
              onChange={(event) => setKeyCenter(() => event.target.value)}
            >
              {selectableKeyCenters.map((pitch, i) => <MenuItem value={pitch.displayName} key={i}>{pitch.displayName}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, maxWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Scale Group</InputLabel>
            <Select
              value={keyCenter}
              label="Scale Group"
              value={scaleGroup}
              onChange={(event) => setScaleGroup(() => event.target.value)}
            >
              <MenuItem value="major">Major</MenuItem>
              <MenuItem value="harmonicMinor">Harmonic Minor</MenuItem>
              <MenuItem value="melodicMinor">Melodic Minor</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormGroup>
          <FormControlLabel control={<Switch checked={showSeventhChords} onChange={(event) => setShowSeventhChords(() => event.target.checked)}/>} label="Jazz Mode" />
        </FormGroup>
      </div>
      <div className="card">
        <p>
          Looking for inspiration? <a href="https://en.wikipedia.org/wiki/Borrowed_chord" target="_blank">Modal Interchange</a> can add a little flavor to your chord progressions.
        </p>
        <p>
          Choose your key center and quality to see some chords you can borrow from parallel modes.
        </p>
      </div>
      <br/>
      <table className="model-table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {parallelModes.map((mode, i) => <ModeDisplay 
            key={i} mode={mode} name={namesOfSelectedModes[i]} 
            scale={getScale(mode, keyCenter)} showSeventhChords={showSeventhChords}/>)}
        </tbody>
      </table>
    </>
  )
}

export default App
