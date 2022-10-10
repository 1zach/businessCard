import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from './assets/Info/Info'
import AboutMe from './assets/AboutMe/AboutMe'
import Footer from './assets/Footer/Footer'

function App() {
  return (
    <div className="App w-96 rounded-t-xl bg-slate-600">
      <Info />
      <AboutMe />
      <Footer />
    </div>
  )
}
export default App
