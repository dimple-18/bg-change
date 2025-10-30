import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card 
        name = "Dimple Kumari"
        role ="Frontend Developer"
        skills = {["React", "Tailwind", "JavaScript", "Git"]}
      />

      <Card 
        name = "Priya Singh"
        role = "Backend Developer"
        skills = {["Node.js", "Express", "MongoDB", "RestAPIs"]}
      />

      <Card 
        name= "Neha Sharma"
        role= "UI/UX Designer"
        skills = {["Figma", "Adobe XD", "Sketch", "InVision"]}     
        />
    </>
  )
}

export default App
