import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
      <div className='front-side'>
        <button className='front-side-button'></button>
        <button className='second-button'></button>
        <div className='text'> 0000 0000 0000 0000</div>
        <p className='name'>JANE APPLESERD
        <p className='number'>00/00</p></p>
       
       </div>
      <div className='back-side'> <div className='back-side-style'>
        <input className='back-side-input' type="text" /></div>
        </div>
    <div className='sidebar'>
      <p>cardholder name</p>
       <input className='box' type="text" />
       <p>card number</p>
       <input className='box' type="text" />
       <p> exp. date (mm/yy)  cvc</p>
       <input className='box' type="date"></input>
       <button className='button'>confirm</button>
     </div>
  
     </div>
    </>
  )
}

export default App
