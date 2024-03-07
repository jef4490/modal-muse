import { useState, useCallback, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import museImg from './assets/muse.png'
import './App.css'
import { pitches, modeNames } from './constants/constants.js'
import { getSimpleModes, getParallelModes } from './calculators/modeCalculator.js'
import ModeTable from './components/modeTable.jsx';

function App() {
  const isSystemDarkModeOn = useMediaQuery('(prefers-color-scheme: dark)');
  const appTheme = createTheme({palette:  { mode: isSystemDarkModeOn ? 'dark' : 'light' }})  
  const [keyCenter, setKeyCenter] = useState("C");
  const [scaleGroup, setScaleGroup] = useState("simpleMajor");
  const [complexity, setComplexity] = useState("simple");

  const isSimpleMode = complexity === 'simple';
  let modesToDisplay = []; 

  let selectableKeyCenters = Object.values(pitches).reduce((accumulator, currentPitch) => {
    currentPitch.selectable.forEach(selectableOption => {
      const selectableKeyCenter = {...currentPitch, displayName: currentPitch.names[selectableOption]}; 
      accumulator.push(selectableKeyCenter);
    });
    return accumulator;
  }, []);

  if(isSimpleMode){
    modesToDisplay = getSimpleModes(scaleGroup, selectableKeyCenters.find(selectableKeyCenter => selectableKeyCenter.displayName === keyCenter).value)
  }
  else{
    modesToDisplay = getParallelModes(scaleGroup, selectableKeyCenters.find(selectableKeyCenter => selectableKeyCenter.displayName === keyCenter).value);
  }

  let simpleInstruction = "";

  if(isSimpleMode){
    simpleInstruction = (
      <p>The highlights indicate the most common borrowed chord selections.</p>
    )
  }

  const namesOfSelectedModes = modeNames[scaleGroup];
  const renderScaleGroupSelect = () => {
    if(isSimpleMode){
      return(
        <Box sx={{ minWidth: 110, maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="scale-group-select-label">Scale Group</InputLabel>
          <Select
            label="Scale Group"
            value={scaleGroup}
            onChange={useCallback((event) => setScaleGroup(() => event.target.value), [scaleGroup])}
          >
            <MenuItem value="simpleMajor">Major</MenuItem>
            <MenuItem value="simpleMinor">Minor</MenuItem>
          </Select>
        </FormControl>
      </Box>)
    }else{
      return(
        <Box sx={{ minWidth: 110, maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="scale-group-select-label">Scale Group</InputLabel>
          <Select
            label="Scale Group"
            value={scaleGroup}
            onChange={useCallback((event) => setScaleGroup(() => event.target.value), [scaleGroup])}
          >
            <MenuItem value="major">Major</MenuItem>
            <MenuItem value="harmonicMinor">Harmonic Minor</MenuItem>
            <MenuItem value="melodicMinor">Melodic Minor</MenuItem>
            <MenuItem value="melodicMajor">Melodic Major</MenuItem>
          </Select>
        </FormControl>
      </Box>)
    }
  }

  return (
    <Box className={"the-wrap"} sx={{height: isSimpleMode ? '975px' : '1100px'}}>
      <ThemeProvider theme={appTheme}>
        <div>
          <img src={museImg} className="muse" alt="React logo" />
        </div>
        <h1>Modal Muse</h1>
        <h2>Modal Interchange Calculator</h2>
        <div className="selection-section">
          <Box sx={{ minWidth: 90, maxWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="key-center-select-label">Key Center</InputLabel>
              <Select MenuProps={{style: { maxHeight: 400}}}
                value={keyCenter}
                label="Key Center"
                onChange={useCallback((event) => setKeyCenter(() => event.target.value), [keyCenter])}
              >
                {useMemo(() => selectableKeyCenters.map((pitch, i) => <MenuItem value={pitch.displayName} 
                  key={i}>{pitch.displayName}</MenuItem>), [selectableKeyCenters])}
              </Select>
            </FormControl>
          </Box>
          {renderScaleGroupSelect()}
          <Box sx={{ minWidth: 100, maxWidth: 100 }}>
            <FormControl fullWidth>
              <InputLabel id="complexity-select-label">Complexity</InputLabel>
              <Select
                label="Complexity"
                value={complexity}
                onChange={useCallback((event) => { setComplexity(() => event.target.value); 
                  setScaleGroup(event.target.value === "simple" ? "simpleMajor" : "major") }, [complexity])}
              >
                <MenuItem value="simple">Simple</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
                <MenuItem value="jazz">Jazz</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="card">
          <p>
            Looking for inspiration? <a href="https://en.wikipedia.org/wiki/Borrowed_chord" target="_blank">Modal Interchange</a> can add a little flavor to your chord progressions.
          </p>
          <p>
            Choose your key center and scale group to see some chords you can borrow from parallel modes.
          </p>
        </div>
        <div className="table-container">
          <ModeTable keyCenter={keyCenter} modesToDisplay={modesToDisplay} complexity={complexity} 
            namesOfSelectedModes={namesOfSelectedModes}/>
        </div>
        {simpleInstruction}
      </ThemeProvider>
    </Box>
  )
}

export default App
