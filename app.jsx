import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuoteMain from './components/quoteMain'
import './components/Style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuoteMain/>
    </>
  )
}

export default App
