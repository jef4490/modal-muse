import { useState } from 'react'
import museImg from './assets/muse.png'
import viteLogo from '/vite.svg'
import './App.css'
import { pitches, scales } from './constants/constants.js'
import { getScale } from './calculators/scaleCalculator.js'
import { getModes, getParallelModes } from './calculators/modeCalculator.js'

function App() {
  const [keyCenter, setKeyCenter] = useState(0)
  let parallelModes = getParallelModes("major", keyCenter);
  console.log(parallelModes);
  parallelModes.forEach(mode => {
    console.log(getScale(mode));
  });
  return (
    <>
      <div>
        <img src={museImg} className="muse" alt="React logo" />
      </div>
      <h1>Modal Muse</h1>
      <div>
      <label for="key-center">Key Center: </label>
      <select name="key-center" id="key-center">
        {Object.values(pitches).map((pitch, i) => <option value={pitch.value} key={i} >{pitch.name}</option>)}
      </select>
      <br/>
      <input value={keyCenter} onChange={(event) => setKeyCenter(() => event.target.value)}/>
      <br/>
      <label for="scale-group">Scale Group: </label>
      <select name="scale-group" id="scale-group">
        <option value="major">Major</option>
        <option value="harmonic-minor">Harmonic Minor</option>
        <option value="melodic-minor">Melodic Minor</option>
      </select>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Inspire me daddy!
        </button>
        <p>
          Welcome to Modal Muse
        </p>
      </div>
      <p>
        Here are your scales and chords!
      </p>
      <br/>
      {parallelModes.map((mode) => <div>{getScale(mode)}</div>)}
    </>
  )
}

export default App
