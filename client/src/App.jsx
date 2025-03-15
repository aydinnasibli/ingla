import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import OverAllMath from './pages/OverALLMATH'
import Yos from './pages/YOS'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import GeneralEnglish from './pages/GeneralEnglish'
import Cambridge from './pages/Cambridge'
import Sat from './pages/SatVerbal'
import Duolingo from './pages/Duolingo'
import AdaSchool from './pages/AdaSchool'
import Almandili from './pages/Almandili'
import XaricdeTehsil from './pages/XaricdeTehsil'
import Haqqimizda from './pages/Haqqimizda'
import Kontakt from './pages/Kontakt'
import { AnimatePresence, motion } from 'framer-motion'
import axios from 'axios'
import TrainingCenter from './pages/TrainingCenter'
import PreschoolPage from './pages/PreSchool'
import RusDili from './pages/RusDili'
import Ielts from './pages/Ielts'
import { Toaster } from 'react-hot-toast'
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true
function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()
  return (
    <>
      <Toaster position="bottom-left" />
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

            <Route path="/yos" element={
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
                <Yos />
              </motion.div>
            } />
            <Route path="/ielts" element={
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
                <Ielts />
              </motion.div>
            } />
            <Route path="/sat" element={
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
                <Sat />
              </motion.div>
            } />
            <Route path="/allmath" element={
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
                <OverAllMath />
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
            <Route path="/training" element={
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
                <TrainingCenter />
              </motion.div>
            } />
            <Route path="/rusdili" element={
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
                <RusDili />
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
                <PreschoolPage />
              </motion.div>
            } />


          </Routes>
        </AnimatePresence >
      </Layout>
    </>
  )
}

export default App
