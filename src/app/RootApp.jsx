import React, { useState, useEffect } from "react";
import brainHero from "../assets/brain-hero.png";

const bannerTexts = [
  "FUTURE-PROOF YOUR BUSINESS WITH ELITE WEB SOLUTIONS",
  "TRANSFORM YOUR LOCAL BUSINESS INTO A DIGITAL LEGEND",
  "CUTTING-EDGE WEB APPS THAT GROW WITH YOUR BRAND"
];

const services = [
  {
    title: "Custom Web Design",
    description:
      "Not just templates. Unique digital identities that convert visitors into customers.",
    icon: "bolt",
  },
  {
    title: "Scalable Web Apps",
    description:
      "Internal tools and customer portals built to grow as your business grows.",
    icon: "gear",
  },
  {
    title: "SEO & Optimization",
    description:
      "Lightning-fast load speeds and top-tier Google rankings for local brands.",
    icon: "chart",
  },
];

const howItWorks = [
  {
    title: "Discovery",
    description: "We Jump on a call to understand your goals and roadblocks",
    icon: "phone",
  },
  {
    title: "Development",
    description: "We build your digital engine using the latest tech stacks.",
    icon: "gear",
  },
  {
    title: "Deployment",
    description: "We launch, monitor, and provide 24/7",
    icon: "bolt",
  },
];

const portfolioProjects = [
  {
    title: "E-Commerce Platform",
    company: "TechShop Inc.",
    description: "A full-featured online shopping platform with secure payment integration, inventory management, and user-friendly interface that increased sales by 35%.",
    githubLink: "https://github.com",
    image: heroImg,
    category: "E-commerce",
    technologies: ["React", "Node.js", "MySQL", "Bootstrap"]
  },
  {
    title: "Task Management App",
    company: "Productivity Pro",
    description: "Collaborative task manager with real-time updates, team assignments, and deadline tracking that improved team efficiency by 40%.",
    githubLink: "https://github.com",
    image: brainHero,
    category: "Web Development",
    technologies: ["JavaScript", "React", "PostgreSQL", "Tailwind CSS"]
  },
  {
    title: "AI-Powered Chatbot",
    company: "AI Innovations",
    description: "Intelligent chatbot for customer support that reduced response time by 70% using natural language processing.",
    githubLink: "https://github.com",
    image: brainHero,
    category: "AI Solutions",
    technologies: ["Python", "Django", "JavaScript"]
  },
];

const testimonials = [
  {
    customerName: "John Smith",
    profileImage: heroImg,
    jobTitle: "CEO, TechShop Inc.",
    review: "Working with Apex Digital Systems was fantastic! They delivered our e-commerce platform ahead of schedule and the results speak for themselves. Our sales increased by 35% in the first quarter!",
    rating: 5,
    projectUsed: "E-commerce Platform Development",
    date: "June 2024"
  },
  {
    customerName: "Sarah Johnson",
    profileImage: brainHero,
    jobTitle: "Product Manager, Productivity Pro",
    review: "The task management app they built completely transformed how our team collaborates. Real-time updates and intuitive design make our work so much easier!",
    rating: 5,
    projectUsed: "Task Management App",
    date: "May 2024"
  },
  {
    customerName: "Michael Chen",
    profileImage: brainHero,
    jobTitle: "Founder, AI Innovations",
    review: "Their AI expertise is top-notch! The chatbot they developed handles 70% of our customer inquiries automatically, saving us countless hours.",
    rating: 5,
    projectUsed: "AI Chatbot Development",
    date: "April 2024"
  }
];

const aboutUsData = [
  {
    title: "Company Introduction",
    description: "Apex Digital Systems is a leading web development agency that builds high-performance websites and custom applications to turn small businesses into local legends. We provide complete digital solutions from design to deployment.",
    icon: "brain"
  },
  {
    title: "Company Story",
    description: "Founded in 2019, Apex Digital Systems started with a mission to help small businesses compete in the digital world. Over the years, we've grown from a small team to a full-service agency serving clients worldwide.",
    icon: "phone"
  },
  {
    title: "Mission ",
    description: "To provide high-quality digital solutions for growing businesses.",
    icon: "bolt"
  },
  {
    title: "Vision",
    description: "To become a leading technology partner worldwide.",
    icon: "chart"
  },
  {
    title: "Core Values",
    description: "Innovation, Quality, Integrity, Customer Satisfaction, Teamwork",
    icon: "gear"
  },
  {
    title: "Company Achievements",
    description: "5+ years of experience, 150+ projects completed, 100+ happy clients, multiple industry awards.",
    icon: "chart"
  },
  {
    title: "Why Choose Us",
    description: "Experienced team, affordable solutions, fast delivery, and 24/7 quality support.",
    icon: "phone"
  }
];

function Icon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "bolt") {
    return (
      <svg {...common}>
        <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />
      </svg>
    );
  }
  if (type === "gear") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
      </svg>
    );
  }
  if (type === "chart") {
    return (
      <svg {...common}>
        <path d="M4 19h16" />
        <path d="M7 16v-4" />
        <path d="M12 16V8" />
        <path d="M17 16v-6" />
        <path d="m5 11 4-4 4 2 6-5" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M6.7 4.2c.6-.4 1.4-.2 1.8.4l1.4 2.6c.3.6.2 1.4-.3 1.8l-1.2 1c.9 1.9 2.5 3.4 4.4 4.4l1-1.2c.4-.5 1.2-.6 1.8-.3l2.6 1.4c.6.3.8 1.2.4 1.8l-.7 1.1c-.6 1-1.8 1.5-2.9 1.3-6-.9-10.8-5.7-11.7-11.7-.2-1.1.3-2.3 1.3-2.9l1.1-.7Z" />
      </svg>
    );
  }
  if (type === "lock") {
    return (
      <svg {...common}>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 1 1 8 0v3" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M9.5 3a3.5 3.5 0 0 0-3.5 3.5v.2A3 3 0 0 0 4 9.5a3 3 0 0 0 1 2.2 3 3 0 0 0-1 2.3 3 3 0 0 0 2 2.8v.2A3.5 3.5 0 0 0 9.5 21h0V3Z" />
      <path d="M14.5 3a3.5 3.5 0 0 1 3.5 3.5v.2A3 3 0 0 1 20 9.5a3 3 0 0 1-1 2.2 3 3 0 0 1 1 2.3 3 3 0 0 1-2 2.8v.2a3.5 3.5 0 0 1-3.5 3.5h0V3Z" />
    </svg>
  );
}

import heroImg from "../assets/nav_image.jpg";


function HeroGraphic() {
  return (
    <img

      src={heroImg}
      alt=""
      className="hero-graphic"
      aria-hidden="true"
      decoding="async"
    />
  );
}

function Card({ 
  title, 
  description, 
  icon, 
  className = "", 
  image, 
  company, 
  link, 
  category, 
  technologies, 
  horizontal = false,
  customerName,
  profileImage,
  jobTitle,
  review,
  rating,
  projectUsed,
  date,
  isTestimonial = false
}) {
  const CardContent = () => {
    if (isTestimonial) {
      return (
        <>
          {profileImage && <img src={profileImage} alt={customerName} className="card-image-horizontal testimonial-avatar" />}
          <div className="card-text-content">
            {rating && (
              <div className="testimonial-rating">
                {Array.from({ length: rating }).map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
            )}
            <p className="testimonial-review">{review}</p>
            <h4 className="testimonial-name">{customerName}</h4>
            {jobTitle && <p className="testimonial-job">{jobTitle}</p>}
            {projectUsed && <p className="testimonial-project">{projectUsed}</p>}
            {date && <p className="testimonial-date">{date}</p>}
          </div>
        </>
      );
    }
    
    return (
      <>
        {image && <img src={image} alt={title} className={`card-image ${horizontal ? "card-image-horizontal" : ""}`} />}
        {icon && (
          <div className="icon-wrap">
            <Icon type={icon} />
          </div>
        )}
        <div className="card-text-content">
          {company && <p className="card-company">{company}</p>}
          <h3>{title}</h3>
          {category && <p className="card-category">{category}</p>}
          <p>{description}</p>
          {technologies && technologies.length > 0 && (
            <div className="technologies-tags">
              {technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          )}
        </div>
      </>
    );
  };

  const cardClass = `feature-card ${className} ${horizontal ? "horizontal-card" : ""}`.trim();

  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={cardClass}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <article className={cardClass}>
      <CardContent />
    </article>
  );
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerTexts.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-shell">
      <div className="page-frame">
        <header className="site-header">
          <div className="brand">
            <div className="brand-mark">
              <span />
              <span />
            </div>
            <div className="brand-copy">APEX DIGITAL SYSTEMS</div>
          </div>

          <nav className="site-nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="quote-button" href="#contact">Get a Free Quote</a>
        </header>

        <main className="content">
          <section className="hero-section" id="hero">
            <div className="hero-copy">
              <div className="banner-carousel">
                {bannerTexts.map((text, index) => (
                  <h1 
                    key={index} 
                    className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    {text}
                  </h1>
                ))}
              </div>
              <p className="hero-text">
                We build high-performance websites and custom apps turn small
                businesses into local legends
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#contact">Launch Your Project</a>
                <a className="secondary-button" href="#portfolio">View Our Work</a>
              </div>

            </div>
            <div className="hero-visual">
              <HeroGraphic />
            </div>
          </section>

          <section className="section-block" id="services">
            <p className="section-title">WHAT WE DO</p>
            <div className="card-grid services-grid">
              {services.map((s, i) => (
                <Card
                  key={s.title}
                  {...s}
                  className={
                    i === 0
                      ? "feature-card-leftglow"
                      : i === 2
                        ? "feature-card-accent"
                        : ""
                  }
                />
              ))}
            </div>
          </section>

          <section className="section-block" id="process">
            <p className="section-title">HOW IT WORKS</p>
            <div className="process-layout">
              <div className="timeline" aria-hidden="true">
                <div className="timeline-line" />
                {[1, 2, 3].map((n) => (
                  <div key={n} className="timeline-point">{n}</div>
                ))}
              </div>
              <div className="card-grid process-grid">
                {howItWorks.map((step, i) => (
                  <Card
                    key={step.title}
                    {...step}
                    className={`mini-card ${i === 0 ? "process-card-accent" : ""}`}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="section-block" id="portfolio">
            <p className="section-title">OUR PORTFOLIO</p>
            <div className="portfolio-grid">
              {portfolioProjects.map((project, i) => (
                <Card
                  key={project.title}
                  {...project}
                  link={project.githubLink}
                  horizontal={true}
                  className={
                    i === 0
                      ? "feature-card-leftglow"
                      : i === 2
                        ? "feature-card-accent"
                        : ""
                  }
                />
              ))}
            </div>
          </section>

          <section className="section-block" id="testimonials">
            <p className="section-title">TESTIMONIALS</p>
            <div className="portfolio-grid">
              {testimonials.map((testimonial, i) => (
                <Card
                  key={testimonial.customerName}
                  {...testimonial}
                  horizontal={true}
                  isTestimonial={true}
                  className={
                    i === 0
                      ? "feature-card-leftglow"
                      : i === 2
                        ? "feature-card-accent"
                        : ""
                  }
                />
              ))}
            </div>
          </section>

          <section className="section-block" id="about">
            <p className="section-title">ABOUT US</p>
            <div className="card-grid services-grid">
              {aboutUsData.map((item, i) => (
                <Card
                  key={item.title}
                  {...item}
                  className={
                    i === 0
                      ? "feature-card-leftglow"
                      : i === 2
                        ? "feature-card-accent"
                        : i === 4
                          ? "feature-card-leftglow"
                          : i === 6
                            ? "feature-card-accent"
                            : ""
                  }
                />
              ))}
            </div>
          </section>

          <section className="bottom-grid" id="contact">
            <div className="lead-form-panel">
              <p className="section-title">CONTACT US</p>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <label className="form-label" htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your full name" aria-label="Name" />

                <label className="form-label" htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="your@email.com" aria-label="Email" />

                <label className="form-label" htmlFor="project-type">Project Type</label>
                <select id="project-type" aria-label="Project Type">
                  <option value="">Select a project type</option>
                  <option value="website">Website Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="software">Custom Software</option>
                </select>

                <label className="form-label" htmlFor="description">Short Project Description</label>
                <textarea id="description" placeholder="Tell us about your project..." aria-label="Description" />

                <button type="button" className="primary-button discovery-btn">
                  Send Message
                </button>

                <a 
                  href="https://calendly.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="calendly-link"
                >
                  Book a 15-minute Discovery Call
                </a>
              </form>
            </div>
          </section>
        </main>
        <footer className="site-footer">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-section company-info">
                <div className="brand">
                  <div className="brand-mark">
                    <span></span>
                    <span></span>
                  </div>
                  <div className="brand-copy">APEX DIGITAL SYSTEMS</div>
                </div>
                <p className="footer-text">
                  Apex Digital Systems is a leading web development agency that builds high-performance websites and custom applications to turn small businesses into local legends.
                </p>
              </div>

              <div className="footer-section quick-links">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links">
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>

              <div className="footer-section contact-info">
                <h4 className="footer-title">Contact Us</h4>
                <div className="footer-contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>contact@apexdigitalsystems.com</span>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123 Tech Street, Suite 400, San Francisco, CA 94107</span>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">⏰</span>
                  <span>Mon-Fri: 9AM - 6PM</span>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="copyright-notice">© 2026 Apex Digital Systems. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
