// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

function App() {
  const changeBodyColorBlue = () => {
    document.body.style.backgroundColor = 'blue';
  };
  const changeBodyColorRed = () => {
    document.body.style.backgroundColor = 'red';
  };
  const changeBodyColorGreen = () => {
    document.body.style.backgroundColor = 'green';
  };
  const changeBodyColorPink = () => {
    document.body.style.backgroundColor = 'rgb(214, 48, 76)';
  };
  const changeBodyColorGray = () => {
    document.body.style.backgroundColor = 'gray';
  };
  const changeBodyColorWhite = () => {
    document.body.style.backgroundColor = 'white';
  };
  const changeBodyColorYellow = () => {
    document.body.style.backgroundColor = 'yellow';
  };
  const changeBodyColorBlack = () => {
    document.body.style.backgroundColor = 'black';
  };
  return (
    <>
    <div id='maindiv'>
      <button id='blue' onClick={changeBodyColorBlue} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background to Blue</button>

      <button id='red' onClick={changeBodyColorRed} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background to Red</button>

      <button id='green' onClick={changeBodyColorGreen} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background to Green</button>

      <button id='pink' onClick={changeBodyColorPink} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background to Pink</button>

      <button id='gray' onClick={changeBodyColorGray} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background to Gray</button>

      <button id='white' onClick={changeBodyColorWhite} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background to White</button>

      <button id='yellow' onClick={changeBodyColorYellow} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background to Yellow</button>

      <button id='black' onClick={changeBodyColorBlack} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Background to Black</button>
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// export default App
