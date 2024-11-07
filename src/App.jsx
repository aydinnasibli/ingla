import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import GeneralEnglish from './pages/GeneralEnglish'
import Cambridge from './pages/Cambridge'
import SatVerbal from './pages/SatVerbal'
import SatMath from './pages/SatMath'
import Duolingo from './pages/Duolingo'
import AdaSchool from './pages/AdaSchool'
import Intensiv from './pages/Intensiv'
import BussinessEnglish from './pages/BussinessEnglish'
import Almandili from './pages/Almandili'
import KidsEnglish from './pages/KidsEnglish'
import XaricdeTehsil from './pages/XaricdeTehsil'
import Haqqimizda from './pages/Haqqimizda'
import Kontakt from './pages/Kontakt'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/*" element={<div><Home /></div>} />

          <Route path="/generalenglish" element={<GeneralEnglish />} />
          <Route path="/ibvecambridgemath" element={<Cambridge />} />
          <Route path="/satverbal" element={<SatVerbal />} />
          <Route path="/satmath" element={<SatMath />} />
          <Route path="/duolingo" element={<Duolingo />} />
          <Route path="/adaschool" element={<AdaSchool />} />
          <Route path="/intensiv" element={<Intensiv />} />
          <Route path="/bussinessenglish" element={<BussinessEnglish />} />
          <Route path="/almandili" element={<Almandili />} />
          <Route path="/kids" element={<KidsEnglish />} />
          <Route path="xaricdetehsil" element={<XaricdeTehsil />} />
          <Route path="/haqqimizda" element={<Haqqimizda />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/preschool" element={<div>Preschool</div>} />


        </Routes>
      </Layout>
    </>
  )
}

export default App
