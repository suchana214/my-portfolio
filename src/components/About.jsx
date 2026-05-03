import React from 'react'

export default function About() {
  // Resolve profile image URL (works with Vite public/)
  let imgSrc = '/profile.jpg'
  try {
    // prefer a resolved URL so bundler can show errors if missing
    imgSrc = new URL('/profile.jpg', import.meta.url).href
  } catch (e) {
    imgSrc = '/profile.jpg'
  }

  return (
    <section id="about" className="card">
      <h2>About</h2>
      <div className="about-top">
        <div className="profile-pic">
          <img
            src={imgSrc}
            alt="Suchana Dutta"
            width={160}
            height={160}
            onError={(e) => { e.target.onerror = null; e.target.src = '/profile.svg' }}
          />
        </div>
        <div>
          <p>
            Hello — I'm <strong>Suchana Dutta</strong>. I'm a B.Sc. Computer Science
            student. I'm passionate about web development and learning modern
            technologies like React.
          </p>
          <div className="contact-quick">
            <div style={{color:'#475569',fontSize:'.95rem'}}>Course: B. Sc in Computer Science</div>
          </div>
        </div>
      </div>
    </section>
  )
}
