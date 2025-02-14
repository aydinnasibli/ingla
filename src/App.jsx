import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import { AnimatePresence, motion } from 'framer-motion'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true
function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()
  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/*" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <Home />
              </motion.div>
            } />

            <Route path="/generalenglish" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <GeneralEnglish />
              </motion.div>
            } />
            <Route path="/ibvecambridgemath" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <Cambridge />
              </motion.div>
            } />
            <Route path="/satverbal" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <SatVerbal />
              </motion.div>
            } />
            <Route path="/satmath" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <SatMath />
              </motion.div>
            } />
            <Route path="/duolingo" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <Duolingo />
              </motion.div>
            } />
            <Route path="/adaschool" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <AdaSchool />
              </motion.div>
            } />
            <Route path="/intensiv" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <Intensiv />
              </motion.div>
            } />
            <Route path="/bussinessenglish" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <BussinessEnglish />
              </motion.div>
            } />
            <Route path="/almandili" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <Almandili />
              </motion.div>
            } />
            <Route path="/kids" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <KidsEnglish />
              </motion.div>
            } />
            <Route path="xaricdetehsil" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <XaricdeTehsil />
              </motion.div>
            } />
            <Route path="/haqqimizda" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <Haqqimizda />
              </motion.div>
            } />
            <Route path="/kontakt" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <Kontakt />
              </motion.div>
            } />

            <Route path="/preschool" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{
                  type: "spring",
                  stiffness: 80, // Lower stiffness for softer motion
                  damping: 15,   // Higher damping to avoid excessive bounciness
                  opacity: { duration: 0.6 }, // Ensure opacity changes are smooth and sync well
                }}
              >
                <div>Pre</div>
              </motion.div>
            } />


          </Routes>
        </AnimatePresence >
      </Layout>
    </>
  )
}

export default App
