import { useState } from 'react'
import { nameOne, nameTwo, triangleColors, colorArrayNumbers } from './arrays.js'
import './assets/styles/App.css'
import './assets/styles/typography.css'
import billboard from './assets/billboard.jpg'

function App() {
  const [colorArray, changeColorArrayNumbers] = useState(colorArrayNumbers)
  const [currentNameOne, setCurrentNameOne] = useState('Web Dev')
  const [currentNameTwo, setCurrentNameTwo] = useState('Rap Name')
  
  const changeName = () => {
    const randomNameOne = Math.floor(Math.random() * nameOne.length)
    const randomNameTwo = Math.floor(Math.random() * nameTwo.length)
    setCurrentNameOne(nameOne[randomNameOne])
    setCurrentNameTwo(nameTwo[randomNameTwo])

    const shuffleColorArrayNumbers = arr => [...arr].sort(() => Math.random() - 0.5)
    const randomColorArrayNumbers = shuffleColorArrayNumbers(colorArrayNumbers)
    changeColorArrayNumbers(randomColorArrayNumbers)
  }
  
  return (
    <div className="App">

      <div className='flip-device-container'>
        <div className='flip-device-yo'>Yo!</div>
        <div className='flip-device'>The screen is too narrow. Flip your device or make your window larger.</div>
      </div>

      <img className='billboard-background' src={billboard} alt='A billboard in a big city.' />  
      <div className='container'>

        <div className='generated-name'>
          {currentNameOne}
          <br />
          {currentNameTwo}
        </div>

        <div className='click-to-change-name' onClick={changeName}>
          Click Here to
          <br />
          Get Your Name
        </div>

        <div className='triangle-container'>
          <div className={`triangle ${triangleColors[colorArray[0]]}`}></div>
          <div className={`triangle ${triangleColors[colorArray[1]]}`}></div>
          <div className={`triangle ${triangleColors[colorArray[2]]}`}></div>
          <div className={`triangle ${triangleColors[colorArray[3]]}`}></div>
          <div className={`triangle ${triangleColors[colorArray[4]]}`}></div>

          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle ${triangleColors[colorArray[5]]}`}></div>
          <div className={`triangle ${triangleColors[colorArray[6]]}`}></div>
          <div className={`triangle ${triangleColors[colorArray[7]]}`}></div>
          <div className={`triangle ${triangleColors[colorArray[8]]}`}></div>

          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle ${triangleColors[colorArray[9]]}`}></div>
          <div className={`triangle ${triangleColors[colorArray[10]]}`}></div>    
          <div className={`triangle ${triangleColors[colorArray[11]]}`}></div>
        </div>

      </div>
    </div>
  )
}

export default App