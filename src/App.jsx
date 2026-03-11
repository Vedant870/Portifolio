import './App.css';
import Tilt from 'react-parallax-tilt';
import profile from './assets/profile.png';

const skills = [
  {
    title: 'AI + Computer Vision',
    description: 'OpenCV workflows, real-time inference tuning, and model integration for practical products.',
    focus: 'Real-time systems',
  },
  {
    title: 'Frontend Engineering',
    description: 'React + Vite experiences with responsive UI architecture, polished interactions, and performance focus.',
    focus: 'UX + speed',
  },
  {
    title: 'Backend & APIs',
    description: 'Node.js + Express services, modular API design, authentication flows, and production-ready patterns.',
    focus: 'Scalable services',
  },
  {
    title: 'Data & Dev Tools',
    description: 'MongoDB, MySQL, Git, Postman, Linux basics, and deployment-minded engineering workflows.',
    focus: 'Reliable delivery',
  },
];

const projects = [
  {
    title: 'Driver Drowsiness Detection',
    stack: 'Python • OpenCV • PyTorch • API Integration',
    impact:
      'Built a real-time safety system that tracks eye movement and facial cues with low-latency predictions.',
    highlights: [
      'Optimized processing loop for 20+ FPS behavior on constrained hardware.',
      'Designed clean extension points for alerts, analytics, and deployment.',
      'Focused on reliability under varied lighting and camera conditions.',
    ],
    source: 'https://github.com/vedant870',
    demo: 'https://www.linkedin.com/in/vedant-kasaudhan-9a444a291/',
  },
  {
    title: 'Social Platform Analyzer',
    stack: 'React • Node.js • Express • MongoDB',
    impact:
      'Engineered a full-stack analytics platform to process user interaction data and surface decision-ready insights.',
    highlights: [
      'Structured REST services with modular architecture and reusable middleware.',
      'Applied DSA-backed optimizations to improve processing speed and stability.',
      'Connected frontend state and backend logic for a complete product flow.',
    ],
    source: 'https://github.com/vedant870',
    demo: 'https://www.linkedin.com/in/vedant-kasaudhan-9a444a291/',
  },
  {
    title: 'PromptLab Portfolio System',
    stack: 'React • Vite • AI Content Tooling',
    impact:
      'Created a next-generation personal brand site with dynamic storytelling and conversion-focused visual design.',
    highlights: [
      'Glassmorphism + neon palette with smooth micro-interactions.',
      'Modular sections for rapid edits, growth, and future case studies.',
      'Balanced visual impact with readable content hierarchy.',
    ],
    source: 'https://github.com/vedant870',
    demo: 'https://www.linkedin.com/in/vedant-kasaudhan-9a444a291/',
  },
];

const experience = [
  {
    role: 'AI Intern',
    org: 'HRFI',
    period: '2025',
    points: [
      'Supported backend logic and data pipelines for AI-assisted workflows.',
      'Improved reliability through debugging, profiling, and optimization.',
      'Collaborated on production-grade code with scalable architecture goals.',
    ],
  },
  {
    role: 'Open Source Contributor',
    org: 'GirlScript Summer of Code (GSSoC)',
    period: '2024',
    points: [
      'Delivered feature enhancements and bug fixes through Git-based collaboration.',
      'Contributed reusable components with clean coding standards.',
      'Maintained readable docs and review-friendly pull requests.',
    ],
  },
  {
    role: 'B.Tech CSE (AI/ML)',
    org: 'Galgotias University',
    period: '2023 — 2027',
    points: [
      'Building strong foundations in algorithms, software engineering, and ML systems.',
      'Applying academics to practical products, internships, and hackathon prototypes.',
      'Continuously upskilling in modern AI + full-stack engineering.',
    ],
  },
];

const quickFacts = [
  '400+ DSA problems solved',
  'AI/ML + full-stack builder',
  'Open to internships & collaborations',
];

function App() {
  return (
    <div className="page">
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <div className="ambient ambient--three" />

      <header className="nav glass">
        <div className="brand">
          <span className="brand__dot" />
          <span className="brand__text">Vedant Kasaudhan</span>
          <span className="brand__tag">AI / Full-Stack Engineer</span>
        </div>

        <nav className="nav__links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="btn btn--ghost btn--sm">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section id="about" className="section hero">
          <div className="hero__content">
            <p className="eyebrow">B.Tech CSE (AI/ML) • Galgotias University</p>
            <h1>
              Designing <span className="accent">AI-native</span> experiences for the new internet.
            </h1>
            <p className="hero__summary">
              I build modern web and AI products that are fast, scalable, and user-first. My focus is
              on shipping practical solutions with clean architecture and strong visual quality.
            </p>

            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                Explore Work
              </a>
              <a href="mailto:vedantkasaudhan@gmail.com" className="btn btn--outline">
                Hire / Collaborate
              </a>
            </div>

            <div className="statset" role="list" aria-label="Highlights">
              <div className="statset__item" role="listitem">
                <h3>400+</h3>
                <p>Problems solved</p>
              </div>
              <div className="statset__item" role="listitem">
                <h3>20+ FPS</h3>
                <p>Vision optimization benchmark</p>
              </div>
              <div className="statset__item" role="listitem">
                <h3>2026</h3>
                <p>Focused on internship-ready products</p>
              </div>
            </div>

            <div className="chips" aria-label="Quick facts">
              {quickFacts.map((fact) => (
                <span key={fact} className="chip">
                  {fact}
                </span>
              ))}
            </div>
          </div>

          <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} glareEnable glareMaxOpacity={0.2} scale={1.01}>
            <aside className="hero__panel glass">
              <div className="profile__wrap">
                <img src={profile} alt="Portrait of Vedant Kasaudhan" className="profile__img" />
              </div>

              <p className="eyebrow">Now Building</p>
              <h2 className="panel__title">AI-powered products with clean product thinking</h2>

              <ul className="panel__list">
                <li>Full-stack development with React, Node, and Express.</li>
                <li>AI/ML integrations that solve real product problems.</li>
                <li>Performance-focused and responsive UI systems.</li>
              </ul>

              <div className="panel__row">
                <a
                  className="btn btn--ghost btn--sm"
                  href="https://www.linkedin.com/in/vedant-kasaudhan-9a444a291/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn--ghost btn--sm"
                  href="https://github.com/vedant870"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </aside>
          </Tilt>
        </section>

        <section id="skills" className="section">
          <div className="section__header">
            <h2>Future-ready engineering skill set</h2>
            <p>
              Built for today&apos;s product expectations: intelligent features, scalable backend systems,
              and premium user experiences.
            </p>
          </div>

          <div className="grid grid--skills">
            {skills.map((skill) => (
              <Tilt key={skill.title} tiltMaxAngleX={9} tiltMaxAngleY={9} glareEnable glareMaxOpacity={0.15}>
                <article className="card card--skill glass">
                  <h3>{skill.title}</h3>
                  <p className="muted">{skill.description}</p>
                  <span className="card__tag">{skill.focus}</span>
                </article>
              </Tilt>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section__header">
            <h2>Selected AI + full-stack projects</h2>
            <p>
              Practical builds with measurable outcomes, clean code patterns, and modern visual
              execution.
            </p>
          </div>

          <div className="grid grid--projects">
            {projects.map((project) => (
              <Tilt
                key={project.title}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable
                glareMaxOpacity={0.12}
              >
                <article className="card card--project glass">
                  <h3 className="project__title">{project.title}</h3>
                  <p className="card__meta">{project.stack}</p>
                  <p className="project__impact">{project.impact}</p>

                  <ul className="project__highlights">
                    {project.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="project__links">
                    <a
                      href={project.source}
                      className="btn btn--outline btn--sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source
                    </a>
                    <a
                      href={project.demo}
                      className="btn btn--ghost btn--sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Overview
                    </a>
                  </div>
                </article>
              </Tilt>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section__header">
            <h2>Experience & growth timeline</h2>
            <p>
              I learn fast, build consistently, and focus on real execution quality in every role and
              collaboration.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role} className="timeline__item glass">
                <p className="timeline__year">{item.period}</p>
                <div className="timeline__content">
                  <h3>{item.role}</h3>
                  <p className="muted">{item.org}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section--cta">
          <div className="cta glass">
            <div className="cta__left">
              <h2>Let&apos;s build impactful products together</h2>
              <p>
                Open to internships, freelance opportunities, and long-term collaborations in AI and
                full-stack engineering.
              </p>

              <div className="chips cta__chips">
                <span className="chip">📞 +91 8707465693</span>
                <span className="chip">✉️ vedantkasaudhan@gmail.com</span>
                <span className="chip">📍 India</span>
              </div>
            </div>

            <form className="cta__form" action="https://formspree.io/f/xwvnedwn" method="POST">
              <input type="email" name="email" placeholder="you@futuremail.com" required />
              <textarea
                name="message"
                placeholder="Tell me about your idea, role, or collaboration plan..."
                required
              />
              <button className="btn btn--primary" type="submit">
                Send Message
              </button>
              <p className="form__note">Message will be delivered directly to my email inbox.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Vedant Kasaudhan • Crafted with React + AI mindset.</span>
        <div className="footer__links">
          <a href="https://leetcode.com/u/vedantkasaudhan8707/" target="_blank" rel="noreferrer">
            LeetCode
          </a>
          <a href="https://github.com/vedant870" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vedant-kasaudhan-9a444a291/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
