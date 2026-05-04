import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Goals from './components/Goals'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <About />
        <Skills />
        <Projects />
        <Goals />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Suchana Dutta</footer>
    </div>
  )
}
