import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card.jsx'
import TestimonialCard from './components/Testimonial/Testimonial.jsx'

function App() {
  // --- Developers data ---
  const developers = [
    { 
      name: "Dimple Kumari",
       role: "Frontend Developer",
        skills: ["React", "Tailwind", "JavaScript", "Git"] 
      },
    { 
      name: "Priya Singh",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"] 
    },
    { 
      name: "Neha Sharma",
      role: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Sketch", "InVision"] 
    },
    { 
      name: "Aarav Mehta",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "PostgreSQL", "TypeScript"] 
    },
    { 
      name: "Rohan Patel",
      role: "Mobile App Developer",
      skills: ["React Native", "Expo", "Firebase"] 
    },
  ];

  // show one developer at a time
  const [devIndex, setDevIndex] = useState(0);
  const nextDeveloper = () => setDevIndex((i) => (i + 1) % developers.length);

  const testimonials = [
    {
      name: "Dimple Kumari",
      photo: "https://randomuser.me/api/portraits/women/75.jpg",
      feedback: "This platform helped me understand React props and hooks easily!",
      designation: "Frontend Developer",
    },
    {
      name: "Rohan Patel",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback: "A great place to learn and grow. React concepts feel so much simpler now!",
      designation: "Full Stack Developer",
    },
    {
      name: "Neha Sharma",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
      feedback: "Tailwind + React = my new favorite combo! Styling feels effortless.",
      designation: "UI/UX Designer",
    },
  ];

  // show one testimonial at a time
  const [testIndex, setTestIndex] = useState(0);
  const nextTestimonial = () => setTestIndex((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setTestIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[testIndex];

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
     
      <Card
        name={developers[devIndex].name}
        role={developers[devIndex].role}
        skills={developers[devIndex].skills}
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

      <p className="mt-3 text-sm text-gray-500">
        Developer {devIndex + 1} of {developers.length}
      </p>

      <div style={{ marginTop: "40px" }}>
        <TestimonialCard
          name={current.name}
          photo={current.photo}
          feedback={current.feedback}
          designation={current.designation}
        />

        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={prevTestimonial}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>

        <p className="mt-3 text-sm text-gray-500">
          Testimonial {testIndex + 1} of {testimonials.length}
        </p>
      </div>
    </div>
  );
}

export default App
