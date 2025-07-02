import './App.css';
import React from 'react';

// Navigation component
function Navigation() {
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
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

// Work Section
function WorkSection() {
  const projects = [
    {
      title: "Computer Vision Classification",
      description: "Built a deep learning model for image classification with 95% accuracy using CNN architecture.",
      image: "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=CV+Project",
      tags: ["TensorFlow", "Computer Vision", "CNN"]
    },
    {
      title: "NLP Sentiment Analysis",
      description: "Developed a real-time sentiment analysis system processing 10K+ reviews per minute.",
      image: "https://via.placeholder.com/400x250/7C3AED/FFFFFF?text=NLP+Project",
      tags: ["BERT", "Transformers", "Python"]
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Created an interactive dashboard for sales forecasting using time series analysis.",
      image: "https://via.placeholder.com/400x250/059669/FFFFFF?text=Analytics+Dashboard",
      tags: ["Time Series", "Streamlit", "Prophet"]
    },
    {
      title: "Recommendation System",
      description: "Built a collaborative filtering system increasing user engagement by 40%.",
      image: "https://via.placeholder.com/400x250/DC2626/FFFFFF?text=Recommendation+System",
      tags: ["Collaborative Filtering", "Matrix Factorization", "MLOps"]
    }
  ];

  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
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
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
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
        <WorkSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
