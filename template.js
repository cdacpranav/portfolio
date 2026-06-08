/**
 * PORTFOLIO GENERATOR TEMPLATES
 * This file contains the base HTML, CSS, and JS template strings used by the builder
 * to compile the final portfolio website.
 */

const PortfolioTemplate = {
  // -------------------------------------------------------------
  // HTML TEMPLATE
  // -------------------------------------------------------------
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{NAME}} — {{TITLE}}</title>
  <meta name="description" content="Portfolio of {{NAME}} — {{TITLE}}. {{TAGLINE}}" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="{{FONTS_URL}}" rel="stylesheet" />
  
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- ===== NAVBAR ===== -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#hero" class="nav-logo">{{LOGO_TEXT}}</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        {{NAV_ABOUT}}
        {{NAV_JOURNEY}}
        {{NAV_SKILLS}}
        {{NAV_PROJECTS}}
        {{NAV_EDUCATION}}
        <li><a href="#contact" class="nav-cta">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- ===== HERO ===== -->
  <section class="hero" id="hero">
    {{PARTICLES_CANVAS}}
    <div class="hero-content">
      {{HERO_BADGE}}
      <h1 class="hero-name">
        Hi, I'm <span class="gradient-text">{{NAME}}</span>
      </h1>
      <p class="hero-title">{{TITLE}}</p>
      <p class="hero-tagline">{{TAGLINE}}</p>
      <div class="hero-buttons">
        <a href="#contact" class="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Get In Touch
        </a>
        <a href="#projects" class="btn btn-outline">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          View Projects
        </a>
      </div>
      <div class="hero-scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </div>
  </section>

  <!-- ===== ABOUT ===== -->
  <section class="section about" id="about">
    <div class="container">
      <h2 class="section-title reveal"><span class="gradient-text">About Me</span></h2>
      <div class="about-grid">
        <div class="about-avatar reveal">
          <div class="avatar-ring">
            <div class="avatar-circle">
              <span>{{INITIALS}}</span>
            </div>
          </div>
          {{ABOUT_STATUS}}
        </div>
        <div class="about-text reveal">
          <p>{{BIO}}</p>
          {{LOCATION_HTML}}
        </div>
      </div>
    </div>
  </section>

  <!-- ===== TIMELINE ===== -->
  {{TIMELINE_SECTION}}

  <!-- ===== SKILLS ===== -->
  {{SKILLS_SECTION}}

  <!-- ===== PROJECTS ===== -->
  {{PROJECTS_SECTION}}

  <!-- ===== EDUCATION ===== -->
  {{EDUCATION_SECTION}}

  <!-- ===== CONTACT ===== -->
  <section class="section contact-section" id="contact">
    <div class="container">
      <h2 class="section-title reveal"><span class="gradient-text">Get In Touch</span></h2>
      <p class="section-subtitle reveal">Have a project in mind or want to collaborate? Let's connect!</p>

      <div class="contact-grid">
        <div class="contact-info reveal">
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:{{EMAIL}}">{{EMAIL}}</a>
            </div>
          </div>
          {{LOCATION_CONTACT_ITEM}}

          <div class="social-links">
            {{SOCIAL_LINKS}}
          </div>
        </div>

        <form class="contact-form reveal" id="contactForm">
          <div class="form-group">
            <input type="text" id="formName" placeholder=" " required />
            <label for="formName">Your Name</label>
          </div>
          <div class="form-group">
            <input type="email" id="formEmail" placeholder=" " required />
            <label for="formEmail">Your Email</label>
          </div>
          <div class="form-group">
            <input type="text" id="formSubject" placeholder=" " />
            <label for="formSubject">Subject</label>
          </div>
          <div class="form-group">
            <textarea id="formMessage" rows="5" placeholder=" " required></textarea>
            <label for="formMessage">Your Message</label>
          </div>
          <button type="submit" class="btn btn-primary btn-submit">
            <span>Send Message</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- ===== FOOTER ===== -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-logo">{{LOGO_TEXT}}</p>
        <p class="footer-text">Designed & Built with ❤️ — &copy; 2026 {{NAME}}. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`,

  // -------------------------------------------------------------
  // CSS TEMPLATE
  // -------------------------------------------------------------
  css: `/* ============================================================
   PORTFOLIO STYLESHEET - GENERATED BY NO-CODE PORTFOLIO BUILDER
   ============================================================ */

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg-primary:    {{BG_PRIMARY}};
  --bg-secondary:  {{BG_SECONDARY}};
  --bg-card:       {{BG_CARD}};
  --bg-glass:      {{BG_GLASS}};
  --border-glass:  {{BORDER_GLASS}};
  --text-primary:  {{TEXT_PRIMARY}};
  --text-secondary:{{TEXT_SECONDARY}};
  --text-muted:    {{TEXT_MUTED}};
  --accent-1:      {{ACCENT_1}};
  --accent-2:      {{ACCENT_2}};
  --accent-grad:   linear-gradient(135deg, {{ACCENT_1}}, {{ACCENT_2}});
  --accent-grad-h: linear-gradient(135deg, {{ACCENT_2}}, {{ACCENT_1}});
  --shadow-lg:     {{SHADOW_LG}};
  --shadow-glow:   0 0 30px {{SHADOW_GLOW_COLOR}};
  --radius-sm:     8px;
  --radius-md:     14px;
  --radius-lg:     20px;
  --font-body:     {{FONT_BODY}};
  --font-heading:  {{FONT_HEADING}};
  --transition:    0.35s cubic-bezier(0.4, 0, 0.2, 1);
  --nav-height:    72px;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--nav-height);
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
ul { list-style: none; }

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ---------- UTILITY ---------- */
.gradient-text {
  background: var(--accent-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section {
  padding: 90px 0;
  position: relative;
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 8px;
  font-weight: 700;
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* ---------- REVEAL ANIMATIONS ---------- */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s var(--transition), transform 0.7s var(--transition);
}
.reveal.active { opacity: 1; transform: translateY(0); }

.reveal-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.7s var(--transition), transform 0.7s var(--transition);
}
.reveal-left.active { opacity: 1; transform: translateX(0); }

.reveal-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.7s var(--transition), transform 0.7s var(--transition);
}
.reveal-right.active { opacity: 1; transform: translateX(0); }

/* ================================================================
   NAVBAR
   ================================================================ */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-height);
  z-index: 1000;
  transition: background var(--transition), box-shadow var(--transition);
}
.navbar.scrolled {
  background: var(--bg-secondary);
  box-shadow: 0 1px 0 var(--border-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  background: var(--accent-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav-links a {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--transition);
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-grad);
  transition: width var(--transition);
}
.nav-links a:hover { color: var(--text-primary); }
.nav-links a:hover::after { width: 100%; }
.nav-cta {
  background: var(--accent-grad);
  color: #fff !important;
  padding: 8px 18px;
  border-radius: 100px;
  font-weight: 600 !important;
}
.nav-cta::after { display: none !important; }
.nav-cta:hover { opacity: 0.9; }

.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
}
.nav-toggle span {
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}

/* ================================================================
   HERO
   ================================================================ */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--bg-primary);
  padding: 80px 24px;
}
.hero::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at 20% 30%, rgba({{RGB_ACCENT_1}}, 0.07) 0%, transparent 45%),
              radial-gradient(circle at 80% 70%, rgba({{RGB_ACCENT_2}}, 0.07) 0%, transparent 45%);
  pointer-events: none;
}

#particlesCanvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 780px;
  animation: heroFadeIn 1s ease-out;
}

@keyframes heroFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  background: rgba({{RGB_ACCENT_1}}, 0.1);
  border: 1px solid rgba({{RGB_ACCENT_1}}, 0.2);
  color: var(--accent-1);
  margin-bottom: 24px;
}

.hero-name {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 12px;
}

.hero-title {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  margin-bottom: 16px;
  font-weight: 500;
}

.hero-tagline {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 540px;
  margin: 0 auto 32px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 26px;
  border-radius: 100px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  transition: all var(--transition);
}
.btn-primary {
  background: var(--accent-grad);
  color: #fff;
  box-shadow: 0 4px 15px rgba({{RGB_ACCENT_1}}, 0.2);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba({{RGB_ACCENT_1}}, 0.3);
}
.btn-outline {
  background: transparent;
  color: var(--text-primary);
  border: 1.5px solid var(--border-glass);
}
.btn-outline:hover {
  border-color: var(--accent-1);
  color: var(--accent-1);
  transform: translateY(-2px);
}

/* Scroll indicator */
.hero-scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: float 3s ease-in-out infinite;
}
.hero-scroll-indicator span {
  font-size: 0.68rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
.mouse {
  width: 22px; height: 34px;
  border: 2px solid var(--text-muted);
  border-radius: 11px;
  position: relative;
}
.wheel {
  width: 3px; height: 6px;
  background: var(--accent-1);
  border-radius: 3px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 2s ease-in-out infinite;
}
@keyframes scrollWheel {
  0%   { opacity: 1; top: 6px; }
  100% { opacity: 0; top: 18px; }
}
@keyframes float {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-6px); }
}

/* ================================================================
   ABOUT
   ================================================================ */
.about-grid {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 48px;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
}
.about-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar-ring {
  width: 160px; height: 160px;
  border-radius: 50%;
  padding: 4px;
  background: var(--accent-grad);
}
.avatar-circle {
  width: 100%; height: 100%;
  border-radius: 50%;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 2.8rem;
  font-weight: 700;
}
.avatar-circle span {
  background: var(--accent-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.avatar-status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  font-size: 0.8rem;
  color: {{STATUS_COLOR}};
  font-weight: 500;
}
.status-dot {
  width: 8px; height: 8px;
  background: {{STATUS_COLOR}};
  border-radius: 50%;
  animation: statusBlink 2s ease-in-out infinite;
}
@keyframes statusBlink {
  0%,100% { opacity: 1; }
  50%     { opacity: 0.3; }
}
.about-text p {
  color: var(--text-secondary);
  margin-bottom: 14px;
  font-size: 1rem;
}
.about-location {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  font-size: 0.88rem;
  margin-top: 8px;
}

/* ================================================================
   TIMELINE
   ================================================================ */
.timeline-section {
  background: var(--bg-secondary);
}
.timeline {
  position: relative;
  max-width: 760px;
  margin: 0 auto;
}
.timeline-line {
  position: absolute;
  left: 20px;
  top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent-1), var(--accent-2));
  opacity: 0.25;
}
.timeline-item {
  position: relative;
  padding-left: 56px;
  margin-bottom: 32px;
}
.timeline-item:last-child { margin-bottom: 0; }
.timeline-dot {
  position: absolute;
  left: 11px;
  top: 6px;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--accent-1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.timeline-dot span {
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--accent-1);
}
.timeline-dot.current {
  border-color: var(--accent-2);
  box-shadow: 0 0 10px rgba({{RGB_ACCENT_2}}, 0.3);
}
.timeline-dot.current span { color: var(--accent-2); }

.timeline-card {
  background: var(--bg-glass);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  transition: border-color var(--transition), transform var(--transition);
}
.timeline-card:hover {
  border-color: rgba({{RGB_ACCENT_1}}, 0.2);
  transform: translateX(4px);
}
.timeline-date {
  font-size: 0.78rem;
  color: var(--accent-1);
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.timeline-card h3 {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 6px;
}
.timeline-card p {
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.5;
  margin-bottom: 8px;
}
.timeline-tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 100px;
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
}
.tag-education { background: rgba({{RGB_ACCENT_1}}, 0.1); color: var(--accent-1); }
.tag-work { background: rgba({{RGB_ACCENT_2}}, 0.1); color: var(--accent-2); }
.tag-current { background: rgba({{RGB_ACCENT_2}}, 0.15); color: var(--accent-2); border: 1px solid rgba({{RGB_ACCENT_2}}, 0.2); }

/* ================================================================
   SKILLS
   ================================================================ */
.skills-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
}
.skill-tab {
  background: var(--bg-glass);
  border: 1px solid var(--border-glass);
  color: var(--text-secondary);
  padding: 8px 20px;
  border-radius: 100px;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
}
.skill-tab:hover { border-color: rgba({{RGB_ACCENT_1}}, 0.2); color: var(--text-primary); }
.skill-tab.active {
  background: var(--accent-grad);
  border-color: transparent;
  color: #fff;
}
.skill-panel { display: none; }
.skill-panel.active { display: block; animation: fadeTab 0.3s ease; }
@keyframes fadeTab {
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
}
.skills-grid {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}
.skill-name { font-weight: 500; font-size: 0.9rem; }
.skill-percent { color: var(--accent-1); font-weight: 600; font-size: 0.85rem; }
.skill-bar {
  height: 8px;
  background: var(--bg-glass);
  border-radius: 4px;
  overflow: hidden;
}
.skill-fill {
  height: 100%;
  width: 0;
  border-radius: 4px;
  background: var(--accent-grad);
  transition: width 1s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ================================================================
   PROJECTS
   ================================================================ */
.projects-section { background: var(--bg-secondary); }
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.project-card {
  background: var(--bg-glass);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
}
.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba({{RGB_ACCENT_1}}, 0.2);
  box-shadow: var(--shadow-glow);
}
.project-icon {
  font-size: 1.8rem;
  margin-bottom: 12px;
}
.project-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px; }
.ptag {
  padding: 2px 8px;
  border-radius: 100px;
  font-size: 0.65rem;
  font-weight: 600;
  background: rgba({{RGB_ACCENT_1}}, 0.08);
  color: var(--accent-1);
}
.project-card h3 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.project-card p {
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 16px;
  flex-grow: 1;
}
.project-link {
  color: var(--accent-1);
  font-weight: 600;
  font-size: 0.85rem;
}
.project-link:hover { text-decoration: underline; }

/* ================================================================
   EDUCATION
   ================================================================ */
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.edu-card {
  background: var(--bg-glass);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: all var(--transition);
}
.edu-card:hover {
  border-color: rgba({{RGB_ACCENT_1}}, 0.15);
  transform: translateY(-2px);
}
.edu-icon { font-size: 1.6rem; margin-bottom: 12px; }
.edu-card h3 {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
}
.edu-institution { color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 2px; }
.edu-year { color: var(--text-muted); font-size: 0.78rem; margin-bottom: 8px; }
.edu-score {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-1);
  margin-top: 4px;
}

/* ================================================================
   CONTACT & FOOTER
   ================================================================ */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  max-width: 850px;
  margin: 0 auto;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
}
.contact-item {
  display: flex;
  gap: 16px;
  align-items: center;
}
.contact-icon {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: rgba({{RGB_ACCENT_1}}, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-1);
  flex-shrink: 0;
}
.contact-item h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 2px; }
.contact-item p, .contact-item a { color: var(--text-secondary); font-size: 0.88rem; }
.social-links { display: flex; gap: 12px; margin-top: 8px; }
.social-link {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: var(--bg-glass);
  border: 1px solid var(--border-glass);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
}
.social-link:hover {
  background: var(--accent-grad);
  border-color: transparent;
  color: #fff;
  transform: translateY(-2px);
}

.contact-form {
  background: var(--bg-glass);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  padding: 32px;
}
.form-group {
  position: relative;
  margin-bottom: 20px;
}
.form-group input, .form-group textarea {
  width: 100%;
  padding: 10px 14px;
  background: rgba(255,255,255,0.02);
  border: 1.5px solid var(--border-glass);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.88rem;
  outline: none;
  transition: border-color var(--transition);
}
.form-group textarea { resize: none; }
.form-group label {
  position: absolute;
  left: 14px; top: 10px;
  color: var(--text-muted);
  font-size: 0.88rem;
  pointer-events: none;
  transition: 0.2s ease all;
}
.form-group input:focus ~ label,
.form-group input:not(:placeholder-shown) ~ label,
.form-group textarea:focus ~ label,
.form-group textarea:not(:placeholder-shown) ~ label {
  top: -8px; left: 8px;
  font-size: 0.72rem;
  padding: 0 4px;
  background: var(--bg-primary);
  color: var(--accent-1);
}
.form-group input:focus, .form-group textarea:focus {
  border-color: var(--accent-1);
}
.btn-submit { width: 100%; justify-content: center; }

.form-success {
  text-align: center;
  padding: 40px 0;
  animation: scaleIn 0.3s ease;
}
.success-icon { font-size: 3rem; margin-bottom: 12px; }
@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

.footer {
  border-top: 1px solid var(--border-glass);
  padding: 32px 0;
  background: var(--bg-primary);
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
.footer-logo {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.1rem;
}
.footer-text {
  color: var(--text-muted);
  font-size: 0.8rem;
}

/* ================================================================
   RESPONSIVE LAYOUTS
   ================================================================ */
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: var(--nav-height); left: -100%;
    width: 100%; height: calc(100vh - var(--nav-height));
    background: var(--bg-secondary);
    flex-direction: column;
    padding: 48px 24px;
    gap: 32px;
    transition: left 0.4s ease;
    z-index: 999;
  }
  .nav-links.open { left: 0; }
  .nav-toggle { display: flex; }
  
  .about-grid { grid-template-columns: 1fr; gap: 32px; }
  .contact-grid { grid-template-columns: 1fr; }
}
`,

  // -------------------------------------------------------------
  // JAVASCRIPT TEMPLATE
  // -------------------------------------------------------------
  js: `/* ============================================================
   PORTFOLIO SCRIPTS - GENERATED BY NO-CODE PORTFOLIO BUILDER
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  {{PARTICLES_INIT}}
  initNavbar();
  initRevealAnimations();
  initSkillTabs();
  initSkillBars();
  initContactForm();
});

/* ================================================================
   PARTICLE SYSTEM — Hero Background
   ================================================================ */
function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let w, h;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.r = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.hue = Math.random() > 0.5 ? {{PARTICLE_HUE_1}} : {{PARTICLE_HUE_2}};
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > w) this.speedX *= -1;
      if (this.y < 0 || this.y > h) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = \`hsla(\${this.hue}, 90%, 65%, \${this.opacity})\`;
      ctx.fill();
    }
  }

  const count = Math.min(60, Math.floor((w * h) / 15000));
  for (let i = 0; i < count; i++) particles.push(new Particle());

  function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = \`rgba(100, 200, 255, \${0.05 * (1 - dist / 120)})\`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    animationId = requestAnimationFrame(animate);
  }
  animate();

  const heroSection = document.getElementById('hero');
  const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    });
  }, { threshold: 0.1 });
  heroObserver.observe(heroSection);
}

/* ================================================================
   NAVBAR — Scroll Effect & Mobile Toggle
   ================================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  // Active navigation highlight
  const sections = document.querySelectorAll('.section, .hero');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const observerNav = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          const href = a.getAttribute('href');
          if (href === '#' + id) {
            a.style.color = 'var(--accent-1)';
          } else if (href && !href.startsWith('mailto')) {
            a.style.color = '';
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -60% 0px' });
  sections.forEach(s => observerNav.observe(s));
}

/* ================================================================
   REVEAL ON SCROLL — IntersectionObserver
   ================================================================ */
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('active');
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
  });
  elements.forEach(el => observer.observe(el));
}

/* ================================================================
   SKILL TABS & BARS
   ================================================================ */
function initSkillTabs() {
  const tabs = document.querySelectorAll('.skill-tab');
  const panels = document.querySelectorAll('.skill-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) {
        panel.classList.add('active');
        animateSkillBarsInPanel(panel);
      }
    });
  });
}

function initSkillBars() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBarsInPanel(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skill-panel').forEach(p => observer.observe(p));
}

function animateSkillBarsInPanel(panel) {
  const fills = panel.querySelectorAll('.skill-fill');
  fills.forEach((fill, i) => {
    fill.style.width = '0';
    setTimeout(() => {
      fill.style.width = fill.dataset.width + '%';
    }, 100 + i * 80);
  });
}

/* ================================================================
   CONTACT FORM — Frontend Simulation
   ================================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const originalContent = btn.innerHTML;

    btn.innerHTML = '<span>Sending...</span>';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    setTimeout(() => {
      form.innerHTML = \`
        <div class="form-success">
          <div class="success-icon">✅</div>
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. I will get back to you shortly.</p>
        </div>
      \`;
    }, 1200);
  });
}
`
};
