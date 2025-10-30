import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card.jsx'

function App() {
  const developers = [
    {
      name: "Dimple Kumari",
      role: "Frontend Developer",
      skills: ["React", "Tailwind", "JavaScript", "Git"],
    },
    {
      name: "Priya Singh",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      name: "Neha Sharma",
      role: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
    {
      name: "Aarav Mehta",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    },
    {
      name: "Rohan Patel",
      role: "Mobile App Developer",
      skills: ["React Native", "Expo", "Firebase"],
    },
  ];

  const [index, setIndex] = useState(0);

  const nextDeveloper = () => {
    setIndex((index + 1) % developers.length);
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <Card
        name={developers[index].name}
        role={developers[index].role}
        skills={developers[index].skills}
      />

      <button
        onClick={nextDeveloper}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Next Developer
      </button>
    </div>
  );
}
export default App
