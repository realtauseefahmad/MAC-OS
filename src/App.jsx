import React from 'react'
import './app.scss'
import Doc from './components/Doc'
import Nav from './components/Nav'
import Github from './components/windows/Github'


const App = () => {
  return (
    <main>
      <Nav />
      <Doc />
      
      <Github />
    </main>
  )
}

export default App
