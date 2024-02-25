import { useState } from 'react'
import museImg from './assets/muse.png'
import viteLogo from '/vite.svg'
import './App.css'
import { pitches, scales, modeNames } from './constants/constants.js'
import { getScale } from './calculators/scaleCalculator.js'
import { getModes, getParallelModes } from './calculators/modeCalculator.js'
import ModeDisplay from './components/modeDisplay.jsx';
import TableHeader from './components/tableHeader.jsx';

function App() {
  const [keyCenter, setKeyCenter] = useState(0, "major")
  const [scaleGroup, setScaleGroup] = useState("major")
  let parallelModes = getParallelModes(scaleGroup, keyCenter);

  let namesOfSelectedModes = modeNames[scaleGroup];
  
  return (
    <>
      <div>
        <img src={museImg} className="muse" alt="React logo" />
      </div>
      <h1>Modal Muse</h1>
      <div>
      <label>Key Center: </label>
      <select name="key-center" id="key-center" value={keyCenter} onChange={(event) => setKeyCenter(() => event.target.value)}>
        {Object.values(pitches).map((pitch, i) => <option value={pitch.value} key={i}>{pitch.name}</option>)}
      </select>
      <br/>
      <label>Scale Group: </label>
      <select name="scale-group" id="scale-group" value={scaleGroup} onChange={(event) => setScaleGroup(() => event.target.value)}>
        <option value="major" default>Major</option>
        <option value="harmonicMinor">Harmonic Minor</option>
        <option value="melodicMinor">Melodic Minor</option>
      </select>
      </div>
      <div className="card">
        <p>
          Looking for inspiration? Modal Interchange can add a little flavor to your chord progressions.
        </p>
        <p>
          Choose your key center and quality to see some chords you can borrow from parallel modes.
        </p>
      </div>
      <br/>
      <table class="model-table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {parallelModes.map((mode, i) => <ModeDisplay key={i} mode={mode} name={namesOfSelectedModes[i]} scale={getScale(mode)}/>)}
        </tbody>
      </table>
    </>
  )
}

export default App
