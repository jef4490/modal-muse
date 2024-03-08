import { useState, useCallback, useEffect, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Help, Close } from '@mui/icons-material';
import Modal from '@mui/material/Modal';

import museImg from './assets/muse.png'
import './App.css'
import { pitches, modeNames } from './constants/constants.js'
import { getSimpleModes, getParallelModes } from './calculators/modeCalculator.js'
import ModeTable from './components/modeTable.jsx';
import HelpModalContent from './components/helpModalContent.jsx';

function App() {
  useEffect(() => {
    if(!localStorage.getItem('isFirstTimeUser')){
      localStorage.setItem("isFirstTimeUser", "false");
      setModalIsOpen(true);
    }
    var complexityToSet = localStorage.getItem('complexity') || 'simple';
    setComplexity(complexityToSet);
    if(complexityToSet !== 'simple'){
      setBaseScale('major')
    }
  }, [])
  
  const isSystemDarkModeOn = useMediaQuery('(prefers-color-scheme: dark)');
  const appTheme = createTheme({palette:  { mode: isSystemDarkModeOn ? 'dark' : 'light' }})  
  const [keyCenter, setKeyCenter] = useState("C");
  const [baseScale, setBaseScale] = useState("simpleMajor");
  const [complexity, setComplexity] = useState("simple");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsClosing, setModalIsClosing] = useState(false);

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
    modesToDisplay = getSimpleModes(baseScale, selectableKeyCenters.find(selectableKeyCenter => selectableKeyCenter.displayName === keyCenter).value)
  }
  else{
    modesToDisplay = getParallelModes(baseScale, selectableKeyCenters.find(selectableKeyCenter => selectableKeyCenter.displayName === keyCenter).value);
  }

  let simpleInstruction = "";

  if(isSimpleMode){
    simpleInstruction = (
      <p>The highlights indicate the most common borrowed chord selections.</p>
    )
  }

  const namesOfSelectedModes = modeNames[baseScale];
  const renderbaseScaleSelect = () => {
    if(isSimpleMode){
      return(
        <Box sx={{ minWidth: 110, maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="base-scale-select-label">Quality</InputLabel>
          <Select
            label="Quality"
            value={baseScale}
            onChange={useCallback((event) => setBaseScale(() => event.target.value), [baseScale])}
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
          <InputLabel id="base-scale-select-label">Base Scale</InputLabel>
          <Select
            label="Base Scale"
            value={baseScale}
            onChange={useCallback((event) => setBaseScale(() => event.target.value), [baseScale])}
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

  const IconToDisplay = modalIsOpen ? (
  <Close className={"close-icon"} onClick={useCallback(() => setModalIsOpen(false), [])}/>
  ) : (<Help className={"help-icon"} onClick={useCallback(() => setModalIsOpen(true), [])}/>);

  return (
    <Box className={"the-wrap"} sx={{height: isSimpleMode ? '975px' : '1100px'}}>
      <ThemeProvider theme={appTheme}>
        <Modal
          open={modalIsOpen}
          onClose={useCallback(() => {
            setTimeout(() => {
              setModalIsOpen(false)
              setModalIsClosing(false)
            }, 200);
            setModalIsClosing(true);
          }, [])}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <HelpModalContent modalIsClosing={modalIsClosing} />
        </Modal>
        <div>
        {IconToDisplay}
          <img src={museImg} className="muse" alt="React logo" />
          <h1>Modal Mu𝄞e</h1>
          <h2>Modal Interchange Calculator</h2>
        </div>
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
          {renderbaseScaleSelect()}
          <Box sx={{ minWidth: 100, maxWidth: 100 }}>
            <FormControl fullWidth>
              <InputLabel id="complexity-select-label">Complexity</InputLabel>
              <Select
                label="Complexity"
                value={complexity}
                onChange={useCallback((event) => { 
                  localStorage.setItem('complexity', event.target.value);
                  setComplexity(() => event.target.value); 
                  setBaseScale(event.target.value === "simple" ? "simpleMajor" : "major"); 
                }, [complexity])}
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
            Looking for inspiration? <a onClick={useCallback(() => setModalIsOpen(true), [])}>Modal Interchange</a> can add a little flavor to your chord progressions.
          </p>
          <p>
            Choose your key center and {isSimpleMode ? "quality" : "base scale"} to see some chords you can borrow from {isSimpleMode ? "a parallel scale" : "parallel modes"}.
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
