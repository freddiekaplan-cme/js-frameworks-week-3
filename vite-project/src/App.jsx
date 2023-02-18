import { useEffect, useState, useRef } from 'react'
import billboard from './assets/billboard.jpg'
import '../src/typography.css'
import './App.css'

function App() {
  
  //const [classes, setClasses] = useState(triangleColors);
  
  const nameOne = ["P", "Lil'", "Big", "Mad", "Div", "Flex", "Grid", "DOM", "Link", "Click", "Const", "Absolute", "Var", "Solid", "Root", "Calc", "Vite", "The", "Border", "Script", "Let", "Head", "Body", "Hyper", "Block", "String", "Func", "Loopy", "API"]
  const nameTwo = ["Divvy", "P", "Array", "Div", "Body", "Flexxx", "Cla$$", "Style", "PX", "Head", "Link", "Source", "Element",  "Border", "Solid", "Nav", "DOM", "App", "Selecta", "Block", "Id", "Lang", "Method", "Loop", "Iterator", "Promise", "For Each"]
  const triangleColors = ['triangle-peach', 'triangle-pink']
  // const [currentClassPeach, setCurrentClassPeach] = useState(triangleColors[0])
  // const [currentClassPink, setCurrentClassPink] = useState(triangleColors[1])
  
  const [currentNameOne, setCurrentNameOne] = useState(nameOne[0])
  const [currentNameTwo, setCurrentNameTwo] = useState(nameTwo[0])
 
  const changeName = () => {
    const randomNameOne = Math.floor(Math.random() * nameOne.length)
    const randomNameTwo = Math.floor(Math.random() * nameTwo.length)
    // return nameOne[randomNameOne] & nameTwo[randomNameTwo]
    setCurrentNameOne(nameOne[randomNameOne])
    setCurrentNameTwo(nameTwo[randomNameTwo])
  }

    const [currentClassPeach, setCurrentClassPeach] = useState([triangleColors[0], triangleColors[1]])
    const elements = useRef([])
    
    const changeClass = () => {
        const newClassPeach = triangleColors.map(() => {
          const randomIndex = Math.floor(Math.random() * triangleColors.length)
          return triangleColors[randomIndex]
        });
        setCurrentClassPeach(newClassPeach)
    }
  
    // const randomIndexPeach = Math.floor(Math.random() * triangleColors.length) 
    // const randomClassPeach = randomIndexPeach
    // setCurrentClassPeach(triangleColors[randomClassPeach])
    
    // const randomIndexPink = Math.floor(Math.random() * triangleColors.length) 
    // const randomClassPink = randomIndexPink
    // setCurrentClassPink(triangleColors[randomClassPink])

  
  
  // const triangleColors = ['triangle-peach', 'triangle-pink']
  // const [currentClassPeach, setCurrentClassPeach] = useState(triangleColors[0])
  const [currentClassPink, setCurrentClassPink] = useState(triangleColors[1])
  
  // const changeClass = () => {
    //   const randomIndexPeach = Math.floor(Math.random() * triangleColors.length) 
    //   const randomClassPeach = randomIndexPeach
    //   setCurrentClassPeach(triangleColors[randomClassPeach])
    //   const randomIndexPink = Math.floor(Math.random() * triangleColors.length) 
    
    //   const randomClassPink = randomIndexPink
    //   setCurrentClassPink(triangleColors[randomClassPink])
    // }
    
    return (
      <div className="App">

      <img className='billboard-background' src={billboard} alt='A billboard in a big city.' />
      
      <div className='container'>

        <div className='main-text'>
          {currentNameOne}
          <br />
          {currentNameTwo}
          {/* Billboard<br />Mockup */}
        </div>
        {/* <button onClick={changeName}>Change Class</button>
        <button onClick={[changeName, changeClass]}>Change Class</button> */}

        <div className='second-text' onClick={changeName}>
          Click to Get Your
          <br />
          Web Dev Rap Name
          {/* Put Your<br />Design Here */}
        </div>

        {/* <div className='triangle-container'>
          <div className={`triangle ${currentClassPeach[0]}`}></div>
          <div className={`triangle ${currentClassPink}`}></div>
          <div className={`triangle ${currentClassPeach[0]}`}></div>
          <div className={`triangle ${currentClassPink}`}></div>
          <div className={`triangle ${currentClassPeach[0]}`}></div>

          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle ${currentClassPink}`}></div>
          <div className={`triangle ${currentClassPeach[0]}`}></div>
          <div className={`triangle ${currentClassPink}`}></div>
          <div className={`triangle ${currentClassPeach[0]}`}></div>

          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle ${currentClassPink}`}></div>
          <div className={`triangle ${currentClassPeach[0]}`}></div>    
          <div className={`triangle ${currentClassPink}`}></div>
        </div> */}
        <div className='triangle-container'>
          <div className={`triangle ${currentClassPeach[0]}`} ref={el => elements.current[0] = el}></div>
          <div className={`triangle ${currentClassPeach[1]}`} ref={el => elements.current[1] = el}></div>
          <div className={`triangle ${currentClassPeach[0]}`} ref={el => elements.current[0] = el}></div>
          <div className={`triangle ${currentClassPeach[1]}`} ref={el => elements.current[1] = el}></div>
          <div className={`triangle ${currentClassPeach[0]}`} ref={el => elements.current[0] = el}></div>

          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle ${currentClassPeach[1]}`} ref={el => elements.current[1] = el}></div>
          <div className={`triangle ${currentClassPeach[0]}`} ref={el => elements.current[0] = el}></div>
          <div className={`triangle ${currentClassPeach[1]}`} ref={el => elements.current[1] = el}></div>
          <div className={`triangle ${currentClassPeach[0]}`} ref={el => elements.current[0] = el}></div>

          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle triangle-transparent`}></div>
          <div className={`triangle ${currentClassPeach[1]}`} ref={el => elements.current[1] = el}></div>
          <div className={`triangle ${currentClassPeach[0]}`} ref={el => elements.current[0] = el}></div>    
          <div className={`triangle ${currentClassPeach[1]}`} ref={el => elements.current[1] = el}></div>
        </div>

      </div>
    </div>
  )
}

export default App
