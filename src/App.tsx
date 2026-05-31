import { useState, useEffect, useRef } from 'react'
import './App.css'

const techSkills = [
  { name: 'Next.js', icon: 'next' },
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express', icon: 'express' },
  { name: 'Tailwind', icon: 'tailwind' },
  { name: 'Python', icon: 'python' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Firebase', icon: 'firebase' },
  { name: 'Git', icon: 'git' },
  { name: 'Docker', icon: 'docker' },
  { name: 'AWS', icon: 'aws' },
]

const services = [
  {
    title: 'Web Development',
    description: 'Creating stunning, high-performance web applications with cutting-edge technologies.',
    icon: '🌐'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing beautiful, intuitive interfaces that users love and remember.',
    icon: '✨'
  },
  {
    title: 'Mobile Apps',
    description: 'Building cross-platform mobile applications with Flutter and React Native.',
    icon: '📱'
  },
  {
    title: 'Cloud Solutions',
    description: 'Deploying and managing scalable cloud infrastructure on AWS and more.',
    icon: '☁️'
  }
]

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [activeSection, setActiveSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL

    const embed = {
      title: `📬 New Message from ${formData.name}`,
      color: 0x00d9ff,
      fields: [
        { name: 'Email', value: formData.email, inline: true },
        { name: 'Subject', value: formData.subject, inline: true },
        { name: 'Message', value: formData.message, inline: false }
      ],
      timestamp: new Date().toISOString()
    }

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [embed] })
      })
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="app">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
      <div
        className="cursor-trail"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Animated Background */}
      <div className="bg-animation">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      {/* Header */}
      <header className={`header ${isLoaded ? 'loaded' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <span className="logo-s">S</span>
            <span className="logo-text">efonx</span>
          </div>
          <nav className="nav">
            {['home', 'about', 'services', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
          <div className="header-actions">
            <button className="btn-primary" onClick={() => scrollToSection('contact')}>
              <span>Let's Talk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={`hero ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for work
          </div>
          <h1 className="hero-title">
            <span className="title-line">Crafting</span>
            <span className="title-line gradient-text">Digital</span>
            <span className="title-line">Experiences</span>
          </h1>
          <p className="hero-subtitle">
            Hey, I'm <span className="highlight">Bilal Farhan</span>
          </p>
          <p className="hero-description">
            A passionate developer specializing in creating beautiful,
            functional, and immersive digital experiences that make an impact.
          </p>
          <div className="hero-btns">
            <button className="btn-primary btn-lg" onClick={() => scrollToSection('contact')}>
              Start a Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-secondary btn-lg" onClick={() => scrollToSection('about')}>
              Learn More
            </button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-value">5+</span>
              <span className="stat-text">Years</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-value">100+</span>
              <span className="stat-text">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-value">50+</span>
              <span className="stat-text">Clients</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-ring" />
          <div className="visual-ring" />
          <div className="visual-ring" />
          <div className="visual-center">
            <span className="visual-s">S</span>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Tech Stack</span>
            <h2 className="section-title">Technologies I Master</h2>
            <p className="section-subtitle">The tools I use to bring ideas to life</p>
          </div>
          <div className="tech-grid">
            {techSkills.map((tech, index) => (
              <div
                key={tech.name}
                className="tech-badge"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={`https://skillicons.dev/icons?i=${tech.icon}`}
                  alt={tech.name}
                  className="tech-icon"
                />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-tag">About Me</span>
              <h2 className="section-title">Passionate About Creating Great Software</h2>
              <p className="about-text">
                With years of experience in the tech industry, I've developed a keen eye for
                what makes digital products succeed. I believe in clean code, thoughtful
                design, and user-centric development.
              </p>
              <p className="about-text">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or helping businesses transform their digital presence.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div>
                    <h4>Goal-Oriented</h4>
                    <p>Focused on delivering results</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <div>
                    <h4>Fast-Paced</h4>
                    <p>Quick learner and adapter</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💡</div>
                  <div>
                    <h4>Innovative</h4>
                    <p>Creative problem solver</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="visual-card">
                <div className="card-inner">
                  <div className="card-face card-front">
                    <span className="big-s">S</span>
                  </div>
                  <div className="card-face card-back">
                    <div className="card-content">
                      <h3>Bilal Farhan</h3>
                      <p>Full-Stack Developer</p>
                      <div className="card-stats">
                        <div className="card-stat">
                          <span>5+</span>
                          <small>Years Exp</small>
                        </div>
                        <div className="card-stat">
                          <span>100+</span>
                          <small>Projects</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Services</span>
            <h2 className="section-title">What I Offer</h2>
            <p className="section-subtitle">Comprehensive solutions for your digital needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <span className="section-tag">Contact</span>
              <h2 className="section-title">Let's Work Together</h2>
              <p className="contact-text">
                Have a project in mind? Let's create something amazing together.
                Fill out the form and I'll get back to you as soon as possible.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">sefonx@example.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Available Worldwide</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">⏰</div>
                  <div>
                    <span className="contact-label">Response Time</span>
                    <span className="contact-value">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="What should I call you?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Where can I reach you?"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary btn-lg btn-full"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-s">S</span>
              <span className="logo-text">efonx</span>
            </div>
            <p className="footer-tagline">Creating digital experiences that matter</p>
          </div>
          <div className="footer-links">
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('services')}>Services</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Sefonx. Crafted with passion.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App