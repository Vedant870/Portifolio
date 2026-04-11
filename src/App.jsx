/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Github, Mail, MessageSquare, Rocket } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import './App.css';
import profile from './assets/profile.png';
import AntigravityBackground from './components/AntigravityBackground';
import CustomCursor from './components/CustomCursor';

const skills = [
  {
    title: 'AI + Computer Vision',
    description:
      'Building perception workflows that turn visual signals into useful product decisions with stable real-time performance.',
    focus: 'Intelligent systems',
  },
  {
    title: 'Frontend Product Engineering',
    description:
      'Crafting premium React experiences with responsive architecture, motion, and modern UI clarity for the AI-first web.',
    focus: 'Interface quality',
  },
  {
    title: 'Backend, APIs & Automation',
    description:
      'Designing service layers, integration logic, and scalable API workflows that support reliable product execution.',
    focus: 'Delivery backbone',
  },
  {
    title: 'Analytics & Security Visualization',
    description:
      'Transforming technical data into dashboards, insights, and visual systems that help teams act faster and smarter.',
    focus: 'Decision support',
  },
];

const projects = [
  {
    title: 'Driver Drowsiness Detection',
    stack: 'Python • OpenCV • PyTorch • API Integration',
    impact:
      'Built a real-time road-safety assistant that monitors eye movement and facial cues to trigger low-latency alerts.',
    spotlight: 'Outcome: real-time safety intelligence optimized for constrained hardware.',
    highlights: [
      'Optimized the processing loop to maintain 20+ FPS in live detection scenarios.',
      'Created extensible integration points for alerting, analytics, and deployment workflows.',
      'Improved reliability under varied lighting conditions and changing camera quality.',
    ],
    tag: 'Computer Vision',
    source: 'https://github.com/vedant870',
    demo: 'https://www.linkedin.com/in/vedant-kasaudhan-9a444a291/',
  },
  {
    title: 'Cyber Threat Visualization Dashboard',
    stack: 'Python • Plotly Dash • Pandas • SQL',
    impact:
      'Developed a cybersecurity intelligence dashboard that converts threat-event data into visual patterns analysts can act on quickly.',
    spotlight: 'Outcome: analyst-friendly threat awareness with executive-ready insight layers.',
    highlights: [
      'Mapped origin-target attack routes and hotspot regions for faster situational awareness.',
      'Added trend and anomaly views to surface unusual spikes in time-series attack behavior.',
      'Designed MITRE ATT&CK visualization and report export for operational storytelling.',
    ],
    tag: 'Security Analytics',
    source: 'https://github.com/vedant870/Cyber-Threat-Visualization',
    demo: 'https://github.com/vedant870/Cyber-Threat-Visualization',
  },
  {
    title: 'Portfolio Experience Platform',
    stack: 'React • Vite • UI/UX Engineering',
    impact:
      'Designed a premium personal brand website with AI-forward storytelling, richer visuals, and stronger recruiter-facing presentation.',
    spotlight: 'Outcome: stronger first impression with modern, AI-native visual language.',
    highlights: [
      'Refined the visual system with layered gradients, glassmorphism, and immersive section flow.',
      'Improved project storytelling to highlight product thinking, execution quality, and outcomes.',
      'Structured the site for easy updates, faster deployment, and long-term brand scaling.',
    ],
    tag: 'Brand + Frontend',
    source: 'https://github.com/vedant870/Portifolio',
    demo: 'https://ai-platform-site.vercel.app',
  },
];

const experience = [
  {
    role: 'AI Intern',
    org: 'HRFI',
    period: '2025',
    points: [
      'Supported backend logic and data-flow tasks for AI-assisted workflows with strong reliability focus.',
      'Improved execution quality through debugging, profiling, and optimization across working modules.',
      'Collaborated on production-minded code with maintainable structure and scalable architecture goals.',
    ],
  },
  {
    role: 'Open Source Contributor',
    org: 'GirlScript Summer of Code (GSSoC)',
    period: '2024',
    points: [
      'Delivered feature enhancements and bug fixes through Git-based open-source collaboration.',
      'Contributed reusable components with clean structure, readable code, and review-friendly changes.',
      'Maintained clear documentation and practical pull requests for smoother team iteration.',
    ],
  },
  {
    role: 'Internship Trainee',
    org: 'Infosys Springboard',
    period: '2026',
    points: [
      'Strengthening fundamentals for building solutions to real-world product and engineering problems.',
      'Working on project-oriented learning with practical implementation and execution discipline.',
      'Learning through structured mentorship, clearer specifications, and industry-ready workflows.',
    ],
  },
];

const quickFacts = [
  '400+ DSA problems solved',
  'AI/ML + full-stack product builder',
  'Open to internships, freelance, and collaborations',
];

const aiSignals = [
  {
    value: 'AI-first',
    label: 'Product mindset',
    detail: 'Designing experiences where intelligence feels useful, clear, and trustworthy.',
  },
  {
    value: 'Full-stack',
    label: 'Execution layer',
    detail: 'Connecting frontend quality, backend logic, and practical model integration.',
  },
  {
    value: 'Fast ship',
    label: 'Build rhythm',
    detail: 'Rapid iteration with clean architecture and presentation-ready polish.',
  },
];

const differentiators = [
  {
    icon: '⚡',
    title: 'Fast visual polish',
    description:
      'Premium gradients, motion, and layout rhythm that feel modern for the next generation of tech portfolios.',
  },
  {
    icon: '🧠',
    title: 'AI storytelling clarity',
    description:
      'Projects are framed around problems, systems, and impact so the portfolio feels credible instead of generic.',
  },
  {
    icon: '🚀',
    title: 'Execution depth',
    description:
      'A balanced profile across UI, APIs, automation, and applied ML for stronger product confidence.',
  },
];

const workflow = [
  {
    step: '01',
    title: 'Discover the signal',
    description:
      'I look for problems where AI creates real value, then shape the feature around user clarity and measurable outcomes.',
    note: 'Problem framing',
  },
  {
    step: '02',
    title: 'Prototype the interaction',
    description:
      'I turn ideas into premium interface flows and dashboards that make smart features understandable at a glance.',
    note: 'Experience design',
  },
  {
    step: '03',
    title: 'Engineer the intelligence',
    description:
      'I connect models, APIs, and backend logic with performance, maintainability, and practical deployment in mind.',
    note: 'System build',
  },
  {
    step: '04',
    title: 'Iterate for trust',
    description:
      'I refine latency, communication, and visual feedback so the product feels reliable and production-ready.',
    note: 'Optimization loop',
  },
];

const toolbelt = [
  'React / Vite',
  'Node / Express',
  'Python / OpenCV',
  'TensorFlow / PyTorch',
  'Dashboards / Data Visualization',
  'REST APIs / Product Architecture',
];

// Reusable scroll animation wrapper
const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <div className="page">
      <CustomCursor />
      <AntigravityBackground />

      <header className="nav glass">
        <div className="brand">
          <span className="brand__dot" />
          <span className="brand__text">Vedant Kasaudhan</span>
          <span className="brand__tag">AI / Full-Stack Engineer</span>
        </div>

        <nav className="nav__links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#ai-lab">AI Lab</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="btn btn--ghost btn--sm">
            <Mail size={16} /> Contact
          </a>
        </nav>
      </header>

      <main>
        <section id="about" className="section hero">
          <div className="hero__content">
            <FadeIn>
              <div className="hero__eyebrow-row">
                <p className="eyebrow">B.Tech CSE (AI/ML) • Galgotias University</p>
                <span className="availability">Open for 2026 internships</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1>
                Building <span className="accent">AI-native</span> products that look sharp, feel human,
                and scale with the next generation.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="hero__summary">
                I blend computer vision, full-stack engineering, and premium UI craft to turn
                intelligent ideas into products people can trust. My goal is to build experiences that
                feel modern on the surface and solid underneath.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="hero__actions">
                <a href="#projects" className="btn btn--primary">
                  <Rocket size={18} /> Explore AI Work
                </a>
                <a href="mailto:vedantkasaudhan@gmail.com" className="btn btn--outline">
                  <MessageSquare size={18} /> Hire / Collaborate
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="statset" role="list" aria-label="Highlights">
                <div className="statset__item glass-strong hover-glow" role="listitem">
                  <h3>400+</h3>
                  <p>Problems solved</p>
                </div>
                <div className="statset__item glass-strong hover-glow" role="listitem">
                  <h3>20+ FPS</h3>
                  <p>Real-time vision benchmark</p>
                </div>
                <div className="statset__item glass-strong hover-glow" role="listitem">
                  <h3>AI + Web</h3>
                  <p>Cross-disciplinary build mindset</p>
                </div>
                <div className="statset__item glass-strong hover-glow" role="listitem">
                  <h3>2026</h3>
                  <p>Internship-ready execution mode</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="chips" aria-label="Quick facts">
                {quickFacts.map((fact) => (
                  <span key={fact} className="chip">
                    {fact}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="hero__mini-grid">
                {differentiators.map((item) => (
                  <article key={item.title} className="mini-card glass hover-glow">
                    <span className="mini-card__icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <Tilt
              className="tilt-shell"
              tiltMaxAngleX={7}
              tiltMaxAngleY={7}
              glareEnable
              glareMaxOpacity={0.12}
              scale={1.01}
              transitionSpeed={1800}
            >
              <aside className="hero__panel glass premium-border">
                <div className="profile__wrap">
                  <div className="profile__frame">
                    <img src={profile} alt="Portrait of Vedant Kasaudhan" className="profile__img" />
                    <span className="profile__status">AI + Full-Stack</span>
                  </div>
                </div>

                <div className="panel__intro">
                  <p className="eyebrow">AI Builder Snapshot</p>
                  <h2 className="panel__title">
                    Designing the bridge between intelligence, interface, and impact.
                  </h2>
                  <p className="muted">
                    I focus on practical AI products that feel premium to use, explainable to teams, and
                    structured to scale.
                  </p>
                </div>

                <div className="signalboard glass-strong">
                  <div className="signalboard__header">
                    <span>Current operating mode</span>
                    <span className="signalboard__badge">Future-ready</span>
                  </div>

                  <div className="signalboard__grid">
                    {aiSignals.map((signal) => (
                      <article key={signal.label} className="signal hover-float">
                        <p className="signal__value">{signal.value}</p>
                        <h3>{signal.label}</h3>
                        <p>{signal.detail}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <ul className="panel__list">
                  <li>Human-centered AI experiences with clean and modern UI systems.</li>
                  <li>Full-stack development using React, Node, Express, and practical integrations.</li>
                  <li>Applied ML thinking shaped for real workflows, not just demo visuals.</li>
                </ul>

                <div className="toolbelt__items toolbelt__items--panel">
                  {toolbelt.map((tool) => (
                    <span key={tool} className="tool glow">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="panel__row">
                  <a
                    className="btn btn--ghost btn--sm"
                    href="https://www.linkedin.com/in/vedant-kasaudhan-9a444a291/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} /> LinkedIn
                  </a>
                  <a
                    className="btn btn--ghost btn--sm"
                    href="https://github.com/vedant870"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </aside>
            </Tilt>
          </FadeIn>
        </section>

        <section id="ai-lab" className="section">
          <FadeIn>
            <div className="section__header section__header--split">
              <div>
                <h2>AI product workflow for a fast-changing generation</h2>
                <p>
                  More than adding AI labels, I focus on how intelligence is discovered, designed,
                  engineered, and polished into something people actually want to use.
                </p>
              </div>
              <span className="section__pill pulse">AI Lab Mode</span>
            </div>
          </FadeIn>

          <div className="workflow">
            {workflow.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.1}>
                <article className="workflow__card glass premium-border hover-float">
                  <span className="workflow__step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="workflow__note">{item.note}</span>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="toolbelt glass premium-border">
              <div>
                <p className="eyebrow">Preferred toolkit</p>
                <h3>Tools I use to ship AI-ready experiences with quality and speed</h3>
              </div>

              <div className="toolbelt__items">
                {toolbelt.map((tool) => (
                  <span key={tool} className="tool glow">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="skills" className="section">
          <FadeIn>
            <div className="section__header">
              <h2>Core capability stack for modern AI experiences</h2>
              <p>
                Built for today&apos;s product expectations: intelligent features, scalable backend systems,
                and polished interfaces that leave a strong first impression.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid--skills">
            {skills.map((skill, index) => (
              <FadeIn key={skill.title} delay={index * 0.1}>
                <article className="card card--skill glass premium-border hover-glow">
                  <p className="card__eyebrow">Capability</p>
                  <h3>{skill.title}</h3>
                  <p className="muted">{skill.description}</p>
                  <span className="card__tag">{skill.focus}</span>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <FadeIn>
            <div className="section__header">
              <h2>Selected AI + full-stack projects</h2>
              <p>
                Practical builds with clear outcomes, structured engineering, and product storytelling
                that feels current, credible, and presentation-ready.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid--projects">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.1}>
                <Tilt
                  className="tilt-shell"
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  scale={1.01}
                  transitionSpeed={1800}
                >
                  <article className="card card--project glass premium-border">
                    <div className="project__top">
                      <h3 className="project__title">{project.title}</h3>
                      <span className="project__badge glow">{project.tag}</span>
                    </div>

                    <p className="card__meta">{project.stack}</p>
                    <p className="project__impact">{project.impact}</p>
                    <p className="project__spotlight">{project.spotlight}</p>

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
                        <Github size={16} /> Source
                      </a>
                      <a
                        href={project.demo}
                        className="btn btn--ghost btn--sm"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BookOpen size={16} /> Overview
                      </a>
                    </div>
                  </article>
                </Tilt>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <FadeIn>
            <div className="section__header">
              <h2>Experience & growth timeline</h2>
              <p>
                I learn fast, build consistently, and keep pushing toward real execution quality in
                every role, collaboration, and product challenge.
              </p>
            </div>
          </FadeIn>

          <div className="timeline">
            {experience.map((item, index) => (
              <FadeIn key={item.role} delay={index * 0.1}>
                <article className="timeline__item glass premium-border hover-glow">
                  <p className="timeline__year pulse">{item.period}</p>
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
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="contact" className="section section--cta">
          <FadeIn>
            <div className="cta glass premium-border scroll-glow">
              <div className="cta__left">
                <h2>Let&apos;s build the next AI-shaped product together</h2>
                <p>
                  Open to internships, freelance opportunities, and long-term collaborations across AI,
                  product engineering, dashboards, and modern frontend experiences.
                </p>

                <div className="chips cta__chips">
                  <span className="chip glow">📞 +91 8707465693</span>
                  <span className="chip glow">✉️ vedantkasaudhan@gmail.com</span>
                  <span className="chip glow">📍 India</span>
                </div>
              </div>

              <form className="cta__form" action="https://formspree.io/f/xwvnedwn" method="POST">
                <input type="email" name="email" placeholder="you@futuremail.com" required />
                <textarea
                  name="message"
                  placeholder="Tell me about your idea, role, startup, or collaboration plan..."
                  required
                />
                <button className="btn btn--primary hover-glow" type="submit">
                  <MessageSquare size={18} /> Send Message
                </button>
                <p className="form__note">Message will be delivered directly to my email inbox.</p>
              </form>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Vedant Kasaudhan • Crafted with React, motion, and AI product thinking.</span>
        <div className="footer__links">
          <a href="https://ai-platform-site.vercel.app" target="_blank" rel="noreferrer">
            Live Site
          </a>
          <a href="https://github.com/vedant870/Portifolio" target="_blank" rel="noreferrer">
            Portifolio Repo
          </a>
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
