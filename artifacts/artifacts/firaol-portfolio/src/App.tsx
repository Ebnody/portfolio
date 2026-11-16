import { useState, type FormEvent } from 'react';
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Send,
  ShieldCheck,
  X,
} from 'lucide-react';

const navItems = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Case studies', '#case-studies'],
  ['Education', '#education'],
] as const;

const projects = [
  {
    name: 'Eqied',
    description: 'EthioBudget Tracker — a budgeting application. The public repository identifies Next.js, React, and TypeScript.',
    stack: 'NEXT.JS  /  REACT  /  TYPESCRIPT',
    category: 'Web',
    demoUrl: 'https://eqied.vercel.app/',
    url: 'https://github.com/Ebnody/Eqied',
    icon: Code2,
  },
  {
    name: 'debalmoti-menu',
    description: 'A simple HTML repository. The public repository does not establish a live deployment or additional product details.',
    stack: 'HTML',
    category: 'HTML',
    url: 'https://github.com/Ebnody/debalmoti-menu',
    icon: Laptop,
  },
  {
    name: 'MKDSS Compliance Management System',
    description: 'A Django-based document-control platform for compliance workflows, controlled documents, approval queues, reading acknowledgments, audit records, notifications, and reporting.',
    stack: 'PYTHON  /  DJANGO  /  SQLITE  /  WAITRESS',
    category: 'MKDSS',
    url: 'https://github.com/Ebnody/MKDSS-CMS',
    icon: Building2,
  },
  {
    name: 'MKDSS IT Helpdesk',
    description: 'An internal Flask helpdesk with role-based ticket workflows, assignment and completion approvals, notifications, daily work reports, audit logging, and PDF/CSV exports.',
    stack: 'PYTHON  /  FLASK  /  SQLALCHEMY  /  SQLITE',
    category: 'MKDSS',
    url: 'https://github.com/Ebnody/MKDSS-IT-Helpdesk',
    icon: BriefcaseBusiness,
  },
  {
    name: 'MKDSS Visitor Management System',
    description: 'A Python desktop client connected to a central Flask server for visitor registration, host approval, check-in/check-out, security-area workflows, and visitor reporting.',
    stack: 'PYTHON  /  TKINTER  /  FLASK  /  SQLITE',
    category: 'MKDSS',
    url: 'https://github.com/Ebnody/MKDSS-VMS',
    icon: Network,
  },
];

const projectFilters = ['All', 'Web', 'HTML', 'MKDSS'] as const;

const mkdssPositions = [
  { title: 'Junior IT Support Technician', date: 'MAR 10, 2025 — JAN 24, 2026' },
  { title: 'Personalization Data Preparation Officer', date: 'JAN 25 — FEB 05, 2026' },
  { title: 'IT Officer', date: 'FEB 06 — MAR 03, 2026' },
  { title: 'IT Support Technician', date: 'MAR 04 — NOV 10, 2026' },
] as const;

const workingKnowledgeGroups = [
  {
    title: 'Operating systems & systems administration',
    items: ['Ubuntu', 'Linux', 'Windows', 'Windows Server', 'Linux command line', 'SSH', 'Systemd', 'APT', 'Active Directory', 'User and permission management', 'Windows installation and configuration', 'Server administration'],
  },
  {
    title: 'Networking & network engineering',
    items: ['TCP/IP', 'LAN and WAN', 'VLANs', 'IP addressing and subnetting', 'Routing and switching', 'DNS and DHCP', 'Network segmentation', 'Network troubleshooting', 'Firewall rules and access control', 'Network documentation'],
  },
  {
    title: 'Firewalls & network security',
    items: ['FortiGate 60F', 'pfSense', 'Firewall policies', 'Access Control Lists', 'Firewall hardening', 'Least-privilege access', 'Network security', 'IDS/IPS concepts', 'Endpoint security', 'DMZ architecture', 'Security policy enforcement'],
  },
  {
    title: 'VPN & secure remote access',
    items: ['OpenVPN', 'IPsec', 'IKE', 'Remote access VPN', 'VPN client configuration', 'Split tunneling', 'VPN routing', 'DNS forwarding', 'NAT and IP forwarding', 'VPN troubleshooting'],
  },
  {
    title: 'Virtualization & server infrastructure',
    items: ['Proxmox VE', 'KVM', 'Virtual machine deployment and management', 'Virtual CPU, memory, and storage allocation', 'Virtual networking', 'HPE ProLiant DL380 Gen9', 'HPE iLO 4', 'Server hardware management'],
  },
  {
    title: 'Cybersecurity & security monitoring',
    items: ['Wazuh', 'Graylog', 'Syslog', 'Log analysis', 'Security event monitoring', 'IDS/IPS concepts', 'Endpoint security', 'Firewall hardening', 'tcpdump and packet analysis', 'Security documentation'],
  },
  {
    title: 'Containers & web infrastructure',
    items: ['Docker', 'Nginx', 'Web server environments', 'API gateways', 'Application deployment', 'Linux server services', 'MongoDB application environments', 'System and application troubleshooting'],
  },
  {
    title: 'Programming & software development',
    items: ['Python', 'PHP', 'HTML', 'FastAPI', 'Django', 'React', 'Flutter', 'PySide6', 'TypeScript', 'JavaScript', 'SQL', 'REST APIs', 'Desktop, web, and cross-platform applications'],
  },
  {
    title: 'Databases & information systems',
    items: ['MySQL', 'SQLite', 'MongoDB', 'SQLAlchemy', 'Alembic', 'Supabase', 'Database connectivity troubleshooting', 'Database configuration', 'Database-backed applications', 'Data processing', 'Document management', 'Database migrations'],
  },
  {
    title: 'Development tools & workflow',
    items: ['Visual Studio Code', 'Git', 'GitHub', 'PowerShell', 'Python virtual environments', 'PyInstaller', 'Git-based version control', 'Application packaging and deployment'],
  },
  {
    title: 'IT support & technical operations',
    items: ['Desktop and laptop troubleshooting', 'Windows installation and configuration', 'Hardware diagnostics', 'Printer setup and troubleshooting', 'Peripheral configuration', 'Software installation and updates', 'User account and access support', 'Computer deployment', 'Windows image cloning', 'IT asset support', 'End-user technical support'],
  },
  {
    title: 'Enterprise systems & digital transformation',
    items: ['Enterprise IT infrastructure', 'Active Directory environments', 'CCTV systems', 'Biometric access control', 'Smart-card system environments', 'Business process digitization', 'Compliance management systems', 'Document approval workflows', 'Digital document management', 'Role-based access control', 'Workflow automation'],
  },
  {
    title: 'Monitoring, administration & documentation',
    items: ['Technical activity reporting', 'IT infrastructure documentation', 'Network configuration documentation', 'Security documentation', 'Troubleshooting reports', 'Compliance-related IT documentation', 'Technical training and knowledge sharing', 'ISO compliance support'],
  },
] as const;

const focusAreas = [
  { label: 'Enterprise IT support', icon: Laptop },
  { label: 'Network administration', icon: Network },
  { label: 'Systems administration', icon: Building2 },
  { label: 'Cybersecurity', icon: ShieldCheck },
  { label: 'Software development', icon: Code2 },
  { label: 'Infrastructure operations', icon: BriefcaseBusiness },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState<(typeof projectFilters)[number]>('All');
  const [formStatus, setFormStatus] = useState('');
  const [formError, setFormError] = useState('');
  const visibleProjects = activeProjectFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeProjectFilter);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim() || `Portfolio enquiry from ${name}`;
    const message = String(data.get('message') ?? '').trim();
    if (!name || !email || !message) {
      setFormError('Please complete your name, email, and message.');
      setFormStatus('');
      return;
    }
    const body = `${message}\n\n— ${name}\n${email}`;
    const mailto = `mailto:firaolallo19@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormError('');
    setFormStatus('Your email draft is ready in your mail app. Review it and send when ready.');
    window.location.href = mailto;
  }

  return (
    <div className="portfolio-shell min-h-[100dvh]">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Firaol Allo Hussen, home" data-testid="link-home">
            <span className="brand-mark" aria-hidden="true">FA</span>
            <span>Firaol Allo Hussen</span>
          </a>
          <button
            type="button"
            className="menu-button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <nav id="primary-navigation" className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="nav-cta" href={`${import.meta.env.BASE_URL}Firaol-Allo-Hussen-CV.pdf`} download data-testid="link-download-cv">
              <ArrowDownToLine size={13} aria-hidden="true" /> Download CV
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <div className="eyebrow">IT operations · Addis Ababa, Ethiopia</div>
            <h1 id="hero-title">Systems that<br />work. <span>People</span><br />who can rely on them.</h1>
            <p className="hero-lede">
              I’m <strong>Firaol Allo Hussen</strong> — an IT professional working across enterprise support,
              infrastructure, network and systems administration, cybersecurity, and software development.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#experience" data-testid="link-experience">
                Explore my experience <ArrowDown size={15} aria-hidden="true" />
              </a>
              <a className="button-quiet" href="#contact" data-testid="link-contact">
                Get in touch <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-meta" aria-label="Quick details">
              <span><MapPin size={13} aria-hidden="true" /> ADDIS ABABA</span>
              <span><BriefcaseBusiness size={13} aria-hidden="true" /> IT SUPPORT & INFRASTRUCTURE</span>
            </div>
          </div>
          <div className="hero-visual reveal-delay" aria-label="Portrait of Firaol Allo Hussen">
            <div className="network-art" aria-hidden="true">
              <div className="orbit" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <span className="node n1" /><span className="node n2" /><span className="node n3" /><span className="node n4" />
              <div className="profile-frame">
                <img src={`${import.meta.env.BASE_URL}github-avatar.jpg`} alt="Firaol Allo Hussen" />
              </div>
              <div className="visual-label">
                <strong>IT • Infrastructure • Code</strong>
                <small>ONE PRACTICAL TOOLKIT</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <div><div className="section-kicker">01 / About</div><h2 id="about-title">Technical breadth.<br />A service-first mindset.</h2></div>
            <p className="section-intro">A clear view of my working range—grounded in IT support and administration, with software and security alongside it.</p>
          </div>
          <div className="about-layout">
            <div className="about-copy">
              <p>I’m an Addis Ababa-based IT professional with experience in <strong>technical support, network and systems administration, and infrastructure</strong>, as well as an academic foundation in Information Technology.</p>
              <p>My work spans keeping day-to-day IT running and building a broader understanding of how systems fit together. I’m also developing software projects in public, and bring a practical interest in cybersecurity to the way I approach technology.</p>
              <p>I value clear communication, careful troubleshooting, and being precise about what I know—and what I’m still learning.</p>
            </div>
            <div className="focus-panel">
              <h3>Areas of practice</h3>
              <div className="focus-grid">
                {focusAreas.map(({ label, icon: Icon }) => <div className="focus-item" key={label}><Icon size={15} aria-hidden="true" />{label}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div><div className="section-kicker">02 / Experience</div><h2 id="experience-title">Work, in context.</h2></div>
            <p className="section-intro">Four positions at MKDSS, a concurrent security assignment, and an earlier IT support internship.</p>
          </div>
          <div className="timeline">
            <article className="role">
              <div className="role-top">
                <div><h3>Role progression</h3><div className="role-company">MK Digital Security Solutions PLC</div></div>
                <time className="role-date">MAR 10, 2025 — NOV 10, 2026</time>
              </div>
              <div className="role-position-list" aria-label="MKDSS job title progression">
                {mkdssPositions.map(({ title, date }) => (
                  <div className="role-position" key={title}>
                    <strong>{title}</strong>
                    <time>{date}</time>
                  </div>
                ))}
              </div>
              <p className="role-scope">Across these positions: firewall and perimeter management, antivirus and endpoint security, network infrastructure and security integration, systems administration and technical support, and security systems administration.</p>
              <div className="additional-assignment">
                <div className="assignment-top">
                  <div>
                    <div className="assignment-label">Additional assignment · MKDSS Smart Card Factory</div>
                    <h4>Designated backup for the IT &amp; Security Services Division Manager</h4>
                  </div>
                  <time>MAR 16 — NOV 10, 2026</time>
                </div>
                <ul>
                  <li>Supported information-security policies, standards, and procedures.</li>
                  <li>Served as a point of contact during manager absences and coordinated incident response and reporting.</li>
                  <li>Supported security governance, compliance, and risk activities, including PCI-CP and ISO 27001 frameworks.</li>
                </ul>
              </div>
              <div className="experience-note"><Check size={14} aria-hidden="true" /> Titles and dates follow the employer letters.</div>
            </article>
            <article className="role">
              <div className="role-top">
                <div><h3>IT Support Intern</h3><div className="role-company">Harar Urban Development Office</div></div>
                <time className="role-date">AUG — OCT 2023</time>
              </div>
              <p>Assisted with network management and IT support, diagnosed basic system issues, and supported installation and maintenance of IT equipment.</p>
            </article>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <div><div className="section-kicker">03 / Skills</div><h2 id="skills-title">A practical range.</h2></div>
            <p className="section-intro">Grouped by familiarity rather than inflated scores. VMware is listed as exposure only.</p>
          </div>
          <div className="skills-layout">
            <article className="skill-card">
              <div className="skill-icon"><Laptop size={17} aria-hidden="true" /></div>
              <h3>Hands-on practice</h3>
              <div className="tag-list">
                <span className="tag">Windows OS & hardware troubleshooting</span>
                <span className="tag">Firewall and perimeter management</span>
                <span className="tag">Network configuration and security integration</span>
                <span className="tag">Server configuration</span>
                <span className="tag">Antivirus and endpoint security</span>
                <span className="tag">Systems administration and IT support</span>
                <span className="tag">Access control and CCTV</span>
                <span className="tag">Security systems administration</span>
                <span className="tag">Documentation and user support</span>
              </div>
              <div className="skill-level"><b>HANDS-ON</b> · skills and responsibilities listed on the supplied CV</div>
            </article>
            <article className="skill-card wide">
              <div className="skill-icon"><Code2 size={17} aria-hidden="true" /></div>
              <h3>Working knowledge</h3>
              <div className="skill-groups">
                {workingKnowledgeGroups.map((group) => (
                  <details className="skill-category" key={group.title}>
                    <summary><span>{group.title}</span><small>{group.items.length} topics</small></summary>
                    <div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
                  </details>
                ))}
              </div>
              <div className="skill-level"><b>WORKING KNOWLEDGE</b> · grouped from the supplied skills inventory, without percentage scores</div>
            </article>
            <article className="skill-card">
              <div className="skill-icon"><Network size={17} aria-hidden="true" /></div>
              <h3>Exposure</h3>
              <div className="tag-list"><span className="tag">VMware · exposure only</span></div>
              <div className="skill-level">VMware is listed as exposure, not hands-on experience.</div>
            </article>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <div><div className="section-kicker">04 / Projects</div><h2 id="projects-title">Public work, no guesswork.</h2></div>
            <p className="section-intro">Repository links point directly to GitHub. Descriptions stay within what the public repository identifies.</p>
          </div>
          <div className="project-filters" role="group" aria-label="Filter projects by category">
            {projectFilters.map((filter) => (
              <button
                className={`project-filter${activeProjectFilter === filter ? ' active' : ''}`}
                type="button"
                key={filter}
                aria-pressed={activeProjectFilter === filter}
                onClick={() => setActiveProjectFilter(filter)}
                data-testid={`filter-projects-${filter.toLowerCase()}`}
              >
                {filter === 'MKDSS' ? 'MKDSS repositories' : filter === 'Web' ? 'Web applications' : filter}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {visibleProjects.map(({ name, description, stack, category, demoUrl, url, icon: Icon }) => (
              <article className="project-card" key={name} data-testid={`card-project-${name}`}>
                <div className="project-top"><Icon size={19} aria-hidden="true" /><span>GITHUB REPOSITORY</span></div>
                <h3>{name}</h3>
                <p className="project-description">{description}</p>
                <div className="project-foot">
                  <span className="project-stack">{stack}</span>
                  <a className="project-link" href={url} target="_blank" rel="noreferrer" aria-label={`View ${name} on GitHub`} data-testid={`link-project-${name}`}>
                    View repository <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
                {demoUrl && category !== 'MKDSS' && (
                  <a className="demo-link" href={demoUrl} target="_blank" rel="noreferrer" data-testid={`link-demo-${name}`}>
                    Open live demo <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="case-studies" aria-labelledby="cases-title">
          <div className="section-heading">
            <div><div className="section-kicker">05 / Case studies</div><h2 id="cases-title">How I think through the work.</h2></div>
            <p className="section-intro">Practice-led themes, not embellished client stories or unverified project outcomes.</p>
          </div>
          <div className="case-list">
            <article className="case-row">
              <span className="case-number">01</span><h3>Network and perimeter security</h3>
              <p>CV-listed scope: firewall and perimeter management, plus network infrastructure and security integration. Internal topology, configurations, incidents, and measured results are not published.</p>
            </article>
            <article className="case-row">
              <span className="case-number">02</span><h3>Endpoint security and systems support</h3>
              <p>CV-listed scope: antivirus and endpoint security, systems administration, technical support, and security systems administration. No specific production incident or outcome is claimed.</p>
            </article>
            <article className="case-row">
              <span className="case-number">03</span><h3>EthioBudget Tracker</h3>
              <p>The public README describes a budgeting app for Ethiopian users, built with Next.js, React, and TypeScript. Its public demo is linked from the project card; repository completion status is unverified.</p>
            </article>
          </div>
          <div className="case-disclaimer">These are professional themes and working principles—not claims of specific incidents, client deliverables, or measured outcomes. MKDSS repository details are intentionally limited to public names.</div>
        </section>

        <section className="section" id="education" aria-labelledby="education-title">
          <div className="section-heading">
            <div><div className="section-kicker">06 / Education & certifications</div><h2 id="education-title">The foundation.</h2></div>
            <p className="section-intro">Education and credentials, stated plainly.</p>
          </div>
          <div className="education-layout">
            <article className="education-card">
              <div className="label"><GraduationCap size={14} aria-hidden="true" /> Education</div>
              <h3>BSc in Information Technology</h3>
              <p>Debre Markos University</p>
              <span className="date">2021 — 2025 · Graduated February 2025</span>
            </article>
            <article className="education-card">
              <div className="label"><ShieldCheck size={14} aria-hidden="true" /> Certifications & training</div>
              <h3>Cybersecurity, networks & machine learning</h3>
              <p>iCog Labs Participation Certificate; Cisco entry-level training in Cybersecurity & Network Security; Building Machine Learning and NLP Models for Cybersecurity.</p>
              <span className="date">AS LISTED ON THE SUPPLIED CV</span>
            </article>
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-copy">
              <div className="section-kicker">07 / Contact</div>
              <h2 id="contact-title">Let’s talk about the work.</h2>
              <p>For IT support, infrastructure, or software opportunities, send a note. The form opens a prefilled draft in your email application.</p>
              <div className="contact-details">
                <a className="contact-detail" href="mailto:firaolallo19@gmail.com"><Mail size={15} aria-hidden="true" /> firaolallo19@gmail.com</a>
                <a className="contact-detail" href="tel:+251922530129"><Phone size={15} aria-hidden="true" /> +251 922 530 129</a>
                <span className="contact-detail"><MapPin size={15} aria-hidden="true" /> Addis Ababa, Ethiopia</span>
                <a className="contact-detail" href="https://github.com/Ebnody" target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" /> github.com/Ebnody <ExternalLink size={12} aria-hidden="true" /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitContact} noValidate={false} data-testid="form-contact">
              <div className="field-row">
                <div className="field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Name" required maxLength={100} data-testid="input-name" /></div>
                <div className="field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={200} data-testid="input-email" /></div>
              </div>
              <div className="field"><label htmlFor="contact-subject">Subject <span>(optional)</span></label><input id="contact-subject" name="subject" placeholder="What would you like to discuss?" maxLength={140} data-testid="input-subject" /></div>
              <div className="field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" placeholder="A little context helps me respond well." required maxLength={4000} data-testid="input-message" /></div>
              {formError && <div className="form-error" role="alert" data-testid="status-form-error">{formError}</div>}
              {formStatus && <div className="form-success" role="status" data-testid="status-form-success">{formStatus}</div>}
              <button className="button-primary submit-button" type="submit" data-testid="button-send-message">Open email draft <Send size={14} aria-hidden="true" /></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Firaol Allo Hussen · Addis Ababa</span>
        <a href="#home" aria-label="Back to top">Back to top <ChevronDown size={12} style={{ transform: 'rotate(180deg)', verticalAlign: 'middle' }} /></a>
        <span>Built around clarity, reliability, and the work.</span>
      </footer>
    </div>
  );
}

export default App;
