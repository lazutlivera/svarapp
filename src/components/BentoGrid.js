import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BentoGrid.css';

const BentoGrid = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isShuffling, setIsShuffling] = useState(false);

  const randomMessages = [
    "Open your window for clean air",
    "Go for a short walk",
    "Tell someone that you love them",
    "Drink a glass of water",
    "Take 3 deep breaths",
    "Stretch your arms and legs",
    "Call a friend you haven't talked to in a while",
    "Write down one thing you're grateful for",
    "Listen to your favorite song",
    "Look out the window for 2 minutes",
    "Stand up and do 5 jumping jacks",
    "Send a kind message to someone",
    "Close your eyes and count to 10",
    "Organize one small thing in your space",
    "Take a photo of something beautiful",
    "Say something nice to yourself",
    "Dance to one song",
    "Read one page of a book",
    "Make yourself a cup of tea",
    "Do 10 push-ups or sit-ups",
    "Write a positive note to yourself",
    "Listen to the sounds around you",
    "Smile at yourself in the mirror",
    "Plan one thing you'll do tomorrow",
    "Give yourself a compliment",
    "Take a 5-minute break from screens",
    "Do some gentle neck stretches",
    "Think of one thing that made you laugh today",
    "Practice saying 'no' to something small",
    "Create a small goal for this week",
    "Thank someone who helped you recently",
    "Do something creative for 5 minutes",
    "Practice mindful eating with one bite",
    "Write down one thing you learned today",
    "Take a different route somewhere",
    "Try a new food or drink",
    "Give someone a genuine compliment",
    "Practice patience in a small way",
    "Learn one new word today",
    "Do something kind for a stranger",
    "Practice active listening in your next conversation",
    "Take responsibility for one small mistake",
    "Celebrate a small win",
    "Practice saying 'yes' to something new",
    "Forgive yourself for one small thing",
    "Practice gratitude for your body",
    "Do something that scares you a little",
    "Practice being present for 2 minutes",
    "Create a small ritual for yourself",
    "Practice self-compassion today"
  ];

  const handleTryClick = () => {
    setIsShuffling(true);
    setShowMessage(false);
    
    // Shuffle effect - show random messages quickly
    let shuffleCount = 0;
    const shuffleInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * randomMessages.length);
      setCurrentMessage(randomMessages[randomIndex]);
      shuffleCount++;
      
      if (shuffleCount >= 8) {
        clearInterval(shuffleInterval);
        // Final random message
        const finalIndex = Math.floor(Math.random() * randomMessages.length);
        setCurrentMessage(randomMessages[finalIndex]);
        setIsShuffling(false);
        setShowMessage(true);
      }
    }, 100);
  };

  useEffect(() => {
    const powerOnSequence = () => {
      // Clear any existing power-on states
      document.querySelectorAll('.highlight').forEach(el => {
        el.classList.remove('power-on');
      });
      
      // Power on sequence
      setTimeout(() => {
        const aiFeature = document.getElementById('ai-feature');
        if (aiFeature) aiFeature.classList.add('power-on');
      }, 800);
      
      setTimeout(() => {
        const mobileFeature = document.getElementById('mobile-feature');
        if (mobileFeature) mobileFeature.classList.add('power-on');
      }, 1600);
      
      setTimeout(() => {
        const personalizeFeature = document.getElementById('personalize-feature');
        if (personalizeFeature) personalizeFeature.classList.add('power-on');
      }, 2400);
      
      // Power off sequence (reverse order)
      setTimeout(() => {
        const personalizeFeature = document.getElementById('personalize-feature');
        if (personalizeFeature) personalizeFeature.classList.remove('power-on');
      }, 4000);
      
      setTimeout(() => {
        const mobileFeature = document.getElementById('mobile-feature');
        if (mobileFeature) mobileFeature.classList.remove('power-on');
      }, 4800);
      
      setTimeout(() => {
        const aiFeature = document.getElementById('ai-feature');
        if (aiFeature) aiFeature.classList.remove('power-on');
      }, 5600);
    };

    // Start the sequence after a short delay
    setTimeout(powerOnSequence, 1000);
    
    // Repeat the sequence every 8 seconds
    const interval = setInterval(powerOnSequence, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      <div className="bento-container">
        {/* Brand Area - Large card spanning 4 columns */}
        <div className="bento-card brand-card">
          <div className="brand-content">
            <div className="brand-header">
              <img src="/photos/Logo.png" alt="Svarapp Logo" className="brand-logo" />
              <h1>Svarapp</h1>
            </div>
            <p className="tagline">AI-Powered Mobile Development</p>
          </div>
        </div>

        {/* Get In Touch - Small card */}
        <div className="bento-card contact-card">
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-item red-bubble">
              <div className="contact-icon left-icon">
                <img src="/photos/inquirires.png" alt="Inquiries" />
              </div>
              <span className="contact-label">Have a question?</span>
              <span className="contact-email">inquiries@svarapp.com</span>
            </div>
            <div className="contact-item green-bubble">
              <span className="contact-label">Need help?</span>
              <span className="contact-email">support@svarapp.com</span>
              <div className="contact-icon right-icon">
                <img src="/photos/support.png" alt="Support" />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Area - 2x2 card */}
        <div className="bento-card projects-card">
          <h2>Featured Project</h2>
          <div className="project-showcase">
            <div className="project-header">
              <div className="project-title">
                <div>PERSONA</div>
                <div>SPORTS</div>
              </div>
              <div className="project-category">
                <div className="progress-indicator">
                  <span className="progress-dot"></span>
                  In Progress
                </div>
                <div className="typing-text">AI-Powered Sports Chat</div>
              </div>
            </div>
            
            <div className="project-description">
              <p>Revolutionary AI-powered chat platform that connects sports fans with their favorite teams through personalized, real-time conversations. Experience the future of sports communication.</p>
            </div>
            
            <div className="store-logos">
              <img src="/photos/play-store.png" alt="Google Play Store" className="store-logo" />
              <img src="/photos/apple.png" alt="Apple App Store" className="store-logo" />
            </div>
          </div>
        </div>

        {/* Team Area - Large card */}
        <div className="bento-card team-card">
          <h2>Development Team</h2>
          <div className="team-layout">
            <div className="team-member">
              <div className="member-avatar">
                <img src="/photos/Dogan.png" alt="Dogan Ozturk" />
              </div>
              <div className="member-info">
                <h4>Dogan Ozturk</h4>
                <p>Full Stack & AI Integration</p>
                <span className="member-email">dogan@svarapp.com</span>
                <a href="https://www.linkedin.com/in/dogan-ozturk-uk" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  <img src="/photos/linkedin.png" alt="LinkedIn" className="linkedin-icon" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="member-bio">
              <p>Full stack developer behind Persona Sports. Designs, builds, and maintains every layer of the platform — from the AI-powered backend to the mobile interface you interact with.</p>
              <div className="bio-tags">
                <span className="bio-tag">React Native</span>
                <span className="bio-tag">Node.js</span>
                <span className="bio-tag">AI / Gemini</span>
                <span className="bio-tag">Supabase</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Area - Wide card */}
        <div className="bento-card about-card">
          <h2>About Us</h2>
          <p>We specialize in developing AI-powered mobile applications that solve real-world problems. Our team combines technical expertise with creative innovation to build apps that users love.</p>
          <div className="about-highlights">
            <div className="highlight" id="ai-feature">
              <img src="/photos/ai.png" alt="AI" className="highlight-icon" />
              <span>AI Integration</span>
            </div>
            <div className="highlight" id="mobile-feature">
              <img src="/photos/smartphone.png" alt="Mobile" className="highlight-icon" />
              <span>Mobile First</span>
            </div>
            <div className="highlight" id="personalize-feature">
              <img src="/photos/personalize.png" alt="Personalize" className="highlight-icon" />
              <span>Personalize</span>
            </div>
          </div>
        </div>

        {/* Do Something Different - Narrow card */}
        <div className="bento-card ready-card">
          <h2>Do Something Different For Yourself</h2>
          <div className="try-container">
            <button className="try-button" onClick={handleTryClick}>
              <img src="/photos/try.png" alt="Try" className="try-icon" />
            </button>
            <div className={`message-container ${showMessage ? 'show' : ''}`}>
              <p className={`random-message ${isShuffling ? 'shuffling' : ''}`}>{currentMessage}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; Svarapp 2025</p>
        <p className="legal-links">
          <Link to="/privacy">Privacy</Link>
          <span className="legal-sep"> · </span>
          <Link to="/terms">Terms</Link>
        </p>
      </div>
    </div>
  );
};

export default BentoGrid; 