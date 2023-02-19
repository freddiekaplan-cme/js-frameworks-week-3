import { useState } from 'react'
import billboard from './assets/billboard.jpg'
import '../src/typography.css'
import './App.css'

function App() {
  
  //const [classes, setClasses] = useState(triangleColors);
  
  const nameOne = ["P", "Lil'", "Big", "Mad", "Div", "Flex", "Grid", "DOM", "Click", "Const", "Absolute", "Var", "Solid", "Root", "Vite", "The", "Script", "Let", "Head", "Body", "Hyper", "String", "Func", "Loopy", "Ol' Dirty", "Biggie", "Vanilla", "MC", "Busta", "Run", "Kool", "Dr.", "Slick", "Fat", "Master", "Notorious", "Repo"]
  const nameTwo = ["Divvy", "P", "Array", "Div", "Body", "Flexxx", "Cla$$", "Style", "PX", "Link", "Source", "Element",  "Border", "Solid", "Nav X", "DOM", "App", "Selecta", "Block", "Id", "Lang", "Method", "Loop", "Iterator", "Fetch", "For Each", "Git", "A.P.I."]
  const triangleColors = ['triangle-peach', 'triangle-pink']
  // const [currentClassPeach, setCurrentClassPeach] = useState(triangleColors[0])
  // const [currentClassPink, setCurrentClassPink] = useState(triangleColors[1])

  
  // console.log(colorArrayNumbers)
  // console.log(randomColorArrayNumbers)
  
  const colorArrayNumbers = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
  const [colorArray, changeColorArrayNumbers] = useState(colorArrayNumbers)
  const [currentNameOne, setCurrentNameOne] = useState('Web Dev')
  const [currentNameTwo, setCurrentNameTwo] = useState('Rap Name')
  
  const changeName = () => {
    const randomNameOne = Math.floor(Math.random() * nameOne.length)
    const randomNameTwo = Math.floor(Math.random() * nameTwo.length)
    // return nameOne[randomNameOne] & nameTwo[randomNameTwo]
    setCurrentNameOne(nameOne[randomNameOne])
    setCurrentNameTwo(nameTwo[randomNameTwo])

    const shuffleColorArrayNumbers = arr => [...arr].sort(() => Math.random() - 0.5)
  
    const randomColorArrayNumbers = shuffleColorArrayNumbers(colorArrayNumbers)
    changeColorArrayNumbers(randomColorArrayNumbers)
  }
  
  // const changeColorArray = () => {
  //   const shuffleColorArrayNumbers = arr => [...arr].sort(() => Math.random() - 0.5)
  
  //   const randomColorArrayNumbers = shuffleColorArrayNumbers(colorArrayNumbers)
  //   changeColorArrayNumbers(randomColorArrayNumbers)
  // }

  // const [currentClassPeach, setCurrentClassPeach] = useState([triangleColors[0], triangleColors[1]])
  // const elements = useRef([])
    
  // const changeClass = () => {
  //   const newClassPeach = triangleColors.map(() => {
  //   const randomIndex = Math.floor(Math.random() * triangleColors.length)
  //   return triangleColors[randomIndex]
  //   });
  //   setCurrentClassPeach(newClassPeach)
  // }
  
    // const randomIndexPeach = Math.floor(Math.random() * triangleColors.length) 
    // const randomClassPeach = randomIndexPeach
    // setCurrentClassPeach(triangleColors[randomClassPeach])
    
    // const randomIndexPink = Math.floor(Math.random() * triangleColors.length) 
    // const randomClassPink = randomIndexPink
    // setCurrentClassPink(triangleColors[randomClassPink])

  
  
  // const triangleColors = ['triangle-peach', 'triangle-pink']
  // const [currentClassPeach, setCurrentClassPeach] = useState(triangleColors[0])
 // const [currentClassPink, setCurrentClassPink] = useState(triangleColors[1])
  
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
          Click Here to
          <br />
          Get Your Name
          {/* Put Your<br />Design Here */}
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
        {/* <div className='triangle-container'>
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
        </div> */}

      </div>
    </div>
  )
}

export default App
