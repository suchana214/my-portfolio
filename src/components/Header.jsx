import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <h1>Suchana Dutta</h1>
        <p className="subtitle">B.Sc. Computer Science</p>
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a className="icon-button" href="https://github.com/suchana214" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a className="icon-button" href="https://in.linkedin.com/in/suchana-dutta-1782b7379" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </nav>
    </header>
  )
}
