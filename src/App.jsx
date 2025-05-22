import React from 'react';
import './index.css';

function App() {
  return (
    <div className="light-mode">
      <header>
        <div className="container">
          <div className="logo">
            <h1>Study<span>Buddy</span></h1>
          </div>
          <nav>
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Goals</a></li>
              <li><a href="#">Quotes</a></li>
            </ul>
          </nav>
          <button id="login-btn" className="btn-login">Login</button>
          <button id="theme-toggle" aria-label="Toggle dark/light mode">
            <SunIcon />
            <MoonIcon />
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Track Your Study Progress</h2>
            <p>StudyBuddy helps you manage your study time, set goals, and stay motivated with personalized tracking and insights.</p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="hero-image">
            <img
              src="https://png.pngtree.com/png-vector/20240810/ourmid/pngtree-a-robot-is-busy-in-study-png-image_13439400.png"
              alt="Student studying with laptop"
            />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="feature-cards">
            <FeatureCard icon="📊" title="Track Study Hours" description="Log your daily study sessions and monitor your progress over time." />
            <FeatureCard icon="🎯" title="Set Goals" description="Create subject-specific goals and track your progress towards achieving them." />
            <FeatureCard icon="📈" title="View Statistics" description="Visualize your study patterns with easy-to-understand charts and graphs." />
            <FeatureCard icon="💭" title="Motivational Quotes" description="Get inspired with daily motivational quotes to keep you focused." />
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <div className="quote-box">
            <blockquote id="quote-text">"The secret of getting ahead is getting started."</blockquote>
            <p id="quote-author">- Mark Twain</p>
            <button id="new-quote" className="btn-secondary">New Quote</button>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to boost your productivity?</h2>
          <p>Start tracking your study progress today and achieve your academic goals.</p>
          <button className="btn-primary">Create Account</button>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>Study<span>Buddy</span></h2>
              <p>Your personal study companion</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Goals</a></li>
                <li><a href="#">Quotes</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Contact</h3>
              <p>Email: info@studybuddy.com</p>
              <p>Follow us on social media</p>
              <div className="social-icons">
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 StudyBuddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Reusable Components
function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function SunIcon() {
  return (
    <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default App;