import { useState } from 'react'
import museImg from './assets/muse.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={museImg} className="muse" alt="React logo" />
      </div>
      <h1>Modal Muse</h1>
      <div>
      <label for="key-center">Key Center: </label>
      <select name="key-center" id="key-center">
        <option value="C">C</option>
        <option value="C#">C#</option>
      </select>
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
    </>
  )
}

export default App
