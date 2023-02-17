import { useEffect, useState } from 'react'
import billboard from './assets/billboard.jpg'
import '../src/typography.css'
import './App.css'

function App() { 

  const triangleColors = ['triangle-peach', 'triangle-pink']
  const [currentClassPeach, setCurrentClassPeach] = useState(triangleColors[0])
  const [currentClassPink, setCurrentClassPink] = useState(triangleColors[1])

  const changeClass = () => {
    const randomIndexPeach = Math.floor(Math.random() * triangleColors.length) 
    const randomClassPeach = randomIndexPeach
    setCurrentClassPeach(triangleColors[randomClassPeach])

    const randomIndexPink = Math.floor(Math.random() * triangleColors.length) 
    const randomClassPink = randomIndexPink
    setCurrentClassPink(triangleColors[randomClassPink])
  }
 
  return (
    <div className="App">

      <img className='billboard-background' src={billboard} alt='A billboard in a big city.' />
      
      <div className='container'>

        <div className='main-text'>
          Billboard<br />Mockup
        </div>

        <div className='second-text'>
          Put Your<br />Design Here
        </div>

        <div className='triangle-container'>
          <div className={`triangle ${currentClassPeach}`}></div>
          <div className={`triangle ${currentClassPink}`}></div>
          <div className={`triangle ${currentClassPeach}`}></div>
          <div className={`triangle ${currentClassPink}`}></div>
          <div className={`triangle ${currentClassPeach}`}></div>

          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle ${currentClassPink}`}></div>
          <div className={`triangle ${currentClassPeach}`}></div>
          <div className={`triangle ${currentClassPink}`}></div>
          <div className={`triangle ${currentClassPeach}`}></div>

          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle ${currentClassPink}`}></div>
          <div className={`triangle ${currentClassPeach}`}></div>    
          <div className={`triangle ${currentClassPink}`}></div>

          <div className={`triangle ${currentClassPeach}`}>
            <button onClick={changeClass}>Change Class</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
