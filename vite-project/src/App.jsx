import { useEffect, useState } from 'react'
import billboard from './assets/billboard.jpg'
import '../src/typography.css'
import './App.css'

function App() { 

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
          <div className='triangle triangle-peach'></div>
          <div className='triangle triangle-pink'></div>
          <div className='triangle triangle-peach'></div>
          <div className='triangle triangle-pink'></div>
          <div className='triangle triangle-peach'></div>

          <div className='triangle triangle-transparent'></div>
          <div className='triangle triangle-pink'></div>
          <div className='triangle triangle-peach'></div>
          <div className='triangle triangle-pink'></div>
          <div className='triangle triangle-peach'></div>

          <div className='triangle triangle-transparent'></div>
          <div className='triangle triangle-transparent'></div>
          <div className='triangle triangle-pink'></div>
          <div className='triangle triangle-peach'></div>    
          <div className='triangle triangle-pink'></div>
        </div>

      </div>

    </div>
  )
}

export default App
