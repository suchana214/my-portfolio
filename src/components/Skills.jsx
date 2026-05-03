import React from 'react'

const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'C', 'C++', 'Java']

export default function Skills() {
  return (
    <section id="skills" className="card">
      <h2>Skills</h2>
      <ul className="skills-grid">
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <p><strong>Languages:</strong> English, Bengali, Hindi</p>
    </section>
  )
}
