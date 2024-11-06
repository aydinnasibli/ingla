import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/*" element={<div><Home /></div>
          } />
          <Route path="/timezones" element={<div>Lo</div>} />
          <Route path="/calendars" element={<div>Lo</div>} />
          <Route path="/annualwwevents" element={<div>Lo</div>} />

          <Route path="/historicaltimelines" element={<div>Lo</div>} />

        </Routes>
      </Layout>
    </>
  )
}

export default App
