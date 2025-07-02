import './App.css';
import React from 'react';

// Navigation component
function Navigation() {
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#work' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">Farhan Abdulla</div>
      <div className="nav-links">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="nav-link"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-profile">
          <div className="profile-container">
            <div className="profile-image">
              <img 
                src="/farhan_abdulla.jpg" 
                alt="Farhan Abdulla"
                className="profile-photo"
              />
              <div className="profile-ring"></div>
              <div className="profile-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
            <div className="profile-status">
              <span className="status-dot"></span>
              <span className="status-text">Available for opportunities</span>
            </div>
          </div>
        </div>
        <div className="hero-main">
          <h1 className="hero-title">
            ML Engineer & Data Scientist
          </h1>
          <p className="hero-subtitle">
            Transforming data into intelligent solutions through machine learning and advanced analytics
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">ML Models Deployed</span>
            </div>
          </div>
          <button 
            className="cta-button"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#work').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </button>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="code-snippet">
              <span className="code-line">from transformers import AutoModel</span>
              <span className="code-line">from transformers import AutoTokenizer</span>
              <span className="code-line"></span>
              <span className="code-line">model = AutoModel.from_pretrained(</span>
              <span className="code-line">  "bert-base-uncased"</span>
              <span className="code-line">)</span>
              <span className="code-line">tokenizer = AutoTokenizer.from_pretrained(</span>
              <span className="code-line">  "bert-base-uncased"</span>
              <span className="code-line">)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate ML Engineer and Data Scientist with experience in developing 
              end-to-end machine learning solutions. I specialize in natural language processing
              & transformer models.
            </p>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Machine Learning</h4>
                <div className="skills">
                  <span className="skill-tag">TensorFlow</span>
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">Scikit-learn</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Data Science</h4>
                <div className="skills">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Pandas</span>
                  <span className="skill-tag">NumPy</span>
                  <span className="skill-tag">SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Resume Section
function ResumeSection() {
  return (
    <section id="work" className="resume-section">
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        <div className="resume-content">
          <div className="resume-intro">
            <h3>Experience & Qualifications</h3>
            <p>
              Take a look at my professional journey, education, and technical expertise. 
              My resume showcases my experience in machine learning, data science, and software development.
            </p>
            <div className="resume-actions">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-btn download-btn"
              >
                <span className="btn-icon">📄</span>
                Download Resume
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="resume-btn view-btn"
              >
                <span className="btn-icon">🔍</span>
                View Full Screen
              </a>
            </div>
          </div>
          
          <div className="resume-viewer">
            <div className="resume-frame">
              <div className="frame-header">
                <div className="frame-controls">
                  <span className="control-dot close"></span>
                  <span className="control-dot minimize"></span>
                  <span className="control-dot maximize"></span>
                </div>
                <div className="frame-title">resume.pdf</div>
                <div className="frame-actions">
                  <button className="frame-action">⚡</button>
                  <button className="frame-action">🔗</button>
                </div>
              </div>
              
              <div className="pdf-container">
                <iframe
                  src="/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  title="Farhan Abdulla Resume"
                  className="pdf-viewer"
                  frameBorder="0"
                />
                <div className="pdf-overlay">
                  <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Loading Resume...</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="resume-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">🎓</div>
                <h4>Education</h4>
                <p>UC Berkeley</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">💼</div>
                <h4>Experience</h4>
                <p>3+ Years in ML/DS</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🏆</div>
                <h4>Projects</h4>
                <p>5+ Completed</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🚀</div>
                <h4>Skills</h4>
                <p>Python, ML, NLP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with pre-filled data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Hi Farhan,

${formData.message}

Best regards,
${formData.name}
${formData.email}`;

    const mailtoLink = `mailto:farhan_abdulla@berkeley.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Ready to collaborate?</h3>
            <p>I'm always interested in new opportunities and challenging projects in ML and Data Science.</p>
            <div className="contact-methods">
              <a href="mailto:farhan_abdulla@berkeley.edu" className="contact-method">
                <span className="contact-icon">✉️</span>
                <span>farhan_abdulla@berkeley.edu</span>
              </a>
              <a href="https://linkedin.com/in/farhan-abdulla" className="contact-method">
                <span className="contact-icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/fabdulla1" className="contact-method">
                <span className="contact-icon">🔗</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <span className="btn-icon">📧</span>
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
