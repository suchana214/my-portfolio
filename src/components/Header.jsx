import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <div className="avatar" aria-hidden="true"></div>
          <div className="brand-content">
            <div>
              <h1>Suchana Dutta</h1>
              <p className="subtitle">B.Sc. Computer Science</p>
            </div>

            <nav className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#goals">Goals</a>
              <a href="#contact">Contact</a>
              <a className="icon-button" href="https://github.com/suchana214" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a className="icon-button" href="https://in.linkedin.com/in/suchana-dutta-1782b7379" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </nav>
          </div>
        </div>

        <div className="menu-mark" aria-hidden={open}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="menu-button"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}
