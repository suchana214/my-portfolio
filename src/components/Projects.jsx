import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>
      <ul className="projects-list">
        <li className="project-item">
          <h3>This portfolio</h3>
          <p>A responsive portfolio site built with React.js.</p>
          <div style={{display:'flex',gap:12,marginTop:8}}>
            <a className="btn github" href="https://github.com/suchana214" target="_blank" rel="noreferrer">View on GitHub</a>
            <a className="btn github" href="#contact">Contact</a>
          </div>
        </li>
      </ul>
    </section>
  )
}
