import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Portfolio = () => {
  const canvasRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Create subtle particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 15;
      posArray[i + 1] = (Math.random() - 0.5) * 15;
      posArray[i + 2] = (Math.random() - 0.5) * 10;

      // Create color variation - cyan, purple, pink
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Cyan
        colorArray[i] = 0.0;
        colorArray[i + 1] = 0.83;
        colorArray[i + 2] = 1.0;
      } else if (colorChoice < 0.66) {
        // Purple
        colorArray[i] = 0.49;
        colorArray[i + 1] = 0.23;
        colorArray[i + 2] = 0.93;
      } else {
        // Pink
        colorArray[i] = 0.93;
        colorArray[i + 1] = 0.28;
        colorArray[i + 2] = 0.6;
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      particlesMesh.rotation.y = elapsedTime * 0.03;
      particlesMesh.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;

      camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      renderer.dispose();
    };
  }, []);

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #000000;
          color: #f5f5f7;
          line-height: 1.6;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        #three-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.7;
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          backdrop-filter: blur(20px) saturate(180%);
          background: rgba(0, 0, 0, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        nav.scrolled {
          background: rgba(0, 0, 0, 0.95);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.3rem;
          font-weight: 600;
          color: #f5f5f7;
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: #f5f5f7;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 400;
          transition: opacity 0.3s ease;
        }

        .nav-links a:hover {
          opacity: 0.6;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }

        .hero-content {
          max-width: 900px;
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          animation: gradientShift 8s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.75rem);
          font-weight: 400;
          color: #86868b;
          margin-bottom: 3rem;
          letter-spacing: -0.01em;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 0.875rem 2rem;
          background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
          color: #fff;
          border: none;
          border-radius: 980px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
          transform: scale(1.05);
          box-shadow: 0 6px 30px rgba(124, 58, 237, 0.5);
        }

        .btn-secondary {
          padding: 0.875rem 2rem;
          background: transparent;
          color: #f5f5f7;
          border: 2px solid transparent;
          background-image: linear-gradient(#000, #000), linear-gradient(135deg, #00d4ff, #7c3aed);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          border-radius: 980px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background-image: linear-gradient(rgba(0, 212, 255, 0.1), rgba(124, 58, 237, 0.1)), linear-gradient(135deg, #00d4ff, #7c3aed);
          transform: scale(1.02);
        }

        /* Section Styling */
        section {
          padding: 8rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 3rem;
          letter-spacing: -0.03em;
          text-align: center;
          background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subheader {
          font-size: 1.25rem;
          color: #86868b;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
          font-weight: 400;
        }

        /* Experience Cards */
        .experience-grid {
          display: grid;
          gap: 2rem;
        }

        .exp-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .exp-card:hover {
          background: rgba(0, 212, 255, 0.05);
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(0, 212, 255, 0.2);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .exp-title {
          font-size: 1.5rem;
          font-weight: 600;
          background: linear-gradient(135deg, #00d4ff 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.25rem;
        }

        .exp-company {
          font-size: 1.125rem;
          color: #86868b;
          font-weight: 400;
        }

        .exp-meta {
          text-align: right;
          font-size: 0.9rem;
          color: #86868b;
        }

        .exp-card ul {
          list-style: none;
          padding: 0;
        }

        .exp-card li {
          color: #a1a1a6;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
        }

        .exp-card li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #86868b;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          background: rgba(124, 58, 237, 0.05);
          border-color: rgba(0, 212, 255, 0.4);
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(124, 58, 237, 0.3);
        }

        .project-video {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          background: #000;
          overflow: hidden;
        }

        .project-video iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .project-placeholder {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          background: linear-gradient(135deg, rgba(100, 100, 100, 0.2), rgba(50, 50, 50, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-placeholder-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 4rem;
        }

        .project-info {
          padding: 2rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tech-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .tech-tag {
          padding: 0.375rem 0.875rem;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(124, 58, 237, 0.15));
          border: 1px solid rgba(0, 212, 255, 0.3);
          border-radius: 980px;
          font-size: 0.813rem;
          font-weight: 500;
          color: #00d4ff;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(124, 58, 237, 0.3));
          border-color: rgba(124, 58, 237, 0.5);
          transform: translateY(-2px);
        }

        .project-description {
          color: #86868b;
          font-size: 0.938rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-link {
          color: #00d4ff;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.938rem;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .project-link:hover {
          opacity: 0.7;
          transform: translateX(5px);
          display: inline-block;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          background: rgba(0, 212, 255, 0.05);
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.15);
        }

        .skill-category h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #00d4ff 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-item {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 980px;
          font-size: 0.875rem;
          color: #a1a1a6;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(124, 58, 237, 0.2));
          color: #00d4ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
        }

        /* Footer */
        footer {
          padding: 4rem 2rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .footer-link {
          color: #86868b;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #f5f5f7;
        }

        .copyright {
          color: #86868b;
          font-size: 0.813rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
          }

          .nav-links a {
            font-size: 0.813rem;
          }

          section {
            padding: 4rem 1.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>

      <canvas ref={canvasRef} id="three-canvas"></canvas>

      <div className="content-wrapper">
        {/* Navigation */}
        <nav className={scrollY > 50 ? 'scrolled' : ''}>
          <div className="nav-container">
            <div className="logo">Subham</div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Subham Bhattacharya</h1>
            <p className="hero-subtitle">
              Software Engineer crafting exceptional digital experiences
            </p>
            <div className="cta-group">
              <a href="https://github.com/CyberDragon25" className="btn-primary" target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
              <a href="https://linkedin.com/in/shubhambhattacharya" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:bhattacharya.shubham123@gmail.com" className="btn-secondary">
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <h2 className="section-header">About</h2>
          <p className="section-subheader">
            Computer Science graduate from Iowa State University with expertise in full-stack development, 
            mobile applications, and systems programming. Passionate about building impactful software solutions.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="section-header">Experience</h2>
          
          <div className="experience-grid">
            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-title">Software Engineering Intern</div>
                  <div className="exp-company">Qualcomm</div>
                </div>
                <div className="exp-meta">
                  <div>May 2024 – Aug 2024</div>
                  <div>San Diego, CA</div>
                </div>
              </div>
              <ul>
                <li>Engineered a kernel-level CPU latency benchmarking library in C/C++ using Windows Driver Framework, improving observability by 20%</li>
                <li>Implemented IOCTL-based communication layer for seamless user-space to kernel-space interaction</li>
                <li>Designed priority-based kernel thread scheduling with configurable core affinity</li>
              </ul>
            </div>

            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-title">Tech Fellow - TIP 101</div>
                  <div className="exp-company">CodePath</div>
                </div>
                <div className="exp-meta">
                  <div>Aug 2025 – Present</div>
                  <div>Remote</div>
                </div>
              </div>
              <ul>
                <li>Mentored 6+ students per session in advanced data structures and algorithms</li>
                <li>Collaborated with leadership team to refine curriculum materials for 100+ students</li>
              </ul>
            </div>

            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <div className="exp-title">Tech Lead - Android</div>
                  <div className="exp-company">Google Developers Student Club</div>
                </div>
                <div className="exp-meta">
                  <div>Oct 2022 – May 2025</div>
                  <div>Ames, IA</div>
                </div>
              </div>
              <ul>
                <li>Architected comprehensive Android development curriculum for 30+ students</li>
                <li>Designed workshops covering Compose, REST API integration, and dependency injection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="section-header">Featured Projects</h2>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-video">
                <iframe
                  src="https://www.youtube.com/embed/mgoWAoikVoQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="project-info">
                <h3 className="project-title">FindRight</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Android</span>
                  <span className="tech-tag">XML</span>
                  <span className="tech-tag">GitLab CI/CD</span>
                </div>
                <p className="project-description">
                  Two-sided marketplace Android application connecting service providers with clients. 
                  Features role-based flows, real-time discovery, and RESTful API integration.
                </p>
                <a href="https://youtu.be/mgoWAoikVoQ" className="project-link" target="_blank" rel="noopener noreferrer">
                  Watch demo →
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-video">
                <iframe
                  src="https://www.youtube.com/embed/9oS3cz72fZQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="project-info">
                <h3 className="project-title">Cyflix</h3>
                <div className="tech-tags">
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                </div>
                <p className="project-description">
                  Full-stack video streaming platform with JWT authentication and TMDB API integration. 
                  Features 1000+ movie titles with real-time watchlist updates.
                </p>
                <a href="https://youtu.be/9oS3cz72fZQ" className="project-link" target="_blank" rel="noopener noreferrer">
                  Watch demo →
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-placeholder">
                <div className="project-placeholder-content">🎮</div>
              </div>
              <div className="project-info">
                <h3 className="project-title">Terminal-Based Pokemon Game</h3>
                <div className="tech-tags">
                  <span className="tech-tag">C</span>
                  <span className="tech-tag">C++</span>
                  <span className="tech-tag">ncurses</span>
                </div>
                <p className="project-description">
                  Roguelike Pokemon game with procedural generation and turn-based combat. 
                  Implements Dijkstra's algorithm for intelligent NPC pathfinding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="section-header">Technical Skills</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-items">
                <span className="skill-item">Python</span>
                <span className="skill-item">Java</span>
                <span className="skill-item">C</span>
                <span className="skill-item">C++</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">Kotlin</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Developer Tools</h3>
              <div className="skill-items">
                <span className="skill-item">Git</span>
                <span className="skill-item">VS Code</span>
                <span className="skill-item">WinDbg</span>
                <span className="skill-item">IntelliJ</span>
                <span className="skill-item">Android Studio</span>
                <span className="skill-item">GCP</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Technologies</h3>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">Node.js</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">Express</span>
                <span className="skill-item">Jetpack Compose</span>
                <span className="skill-item">WDF</span>
                <span className="skill-item">Linux</span>
                <span className="skill-item">HTML/CSS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <div className="footer-links">
              <a href="mailto:bhattacharya.shubham123@gmail.com" className="footer-link">Email</a>
              <a href="https://github.com/CyberDragon25" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/shubhambhattacharya" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <p className="copyright">© 2025 Subham Bhattacharya. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;