import React from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="card">
      <h2>Contact</h2>
      <p>I'd love to connect — reach out on LinkedIn or GitHub, or send me an email.</p>
      <ul className="contact-list">
        <li><FaEnvelope style={{marginRight:8}}/> <strong>Email:</strong> <a href="mailto:duttaduttasuchana@gmail.com">duttaduttasuchana@gmail.com</a></li>
        <li><FaPhone style={{marginRight:8}}/> <strong>Phone:</strong> <a href="tel:8918615537">8918615537</a></li>
        <li><FaGithub style={{marginRight:8}}/> <strong>GitHub:</strong> <a href="https://github.com/suchana214" target="_blank" rel="noreferrer">suchana214</a></li>
        <li><FaLinkedin style={{marginRight:8}}/> <strong>LinkedIn:</strong> <a href="https://in.linkedin.com/in/suchana-dutta-1782b7379" target="_blank" rel="noreferrer">Suchana Dutta</a></li>
      </ul>
      <div className="contact-actions">
        <a className="btn github" href="mailto:duttaduttasuchana@gmail.com">Email Me</a>
        <a className="btn github" href="tel:8918615537">Call</a>
        <a className="btn github" href="https://github.com/suchana214" target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn github" href="https://in.linkedin.com/in/suchana-dutta-1782b7379" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
