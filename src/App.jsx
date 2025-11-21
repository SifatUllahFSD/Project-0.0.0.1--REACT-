import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Success from './components/Success/Success'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Why from './components/Why/Why'
import Review from './components/Review/Review'
import Design from './components/Design/Design'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <Banner/>
       <Success/>
       <Services/>
       <Work/>
       <Why/>
       <Review/>
       <Design/>
       <Footer/>
      
    </>
  )
}

export default App
