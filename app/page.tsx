import Image from "next/image";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { additionalProjects, education, experiences, featuredProjects, profile, skillCategories } from "../lib/portfolio-data";
import { ScrollReveal } from "./components/scroll-reveal";
import { Navigation } from "./components/navigation";
import { ScreenshotGallery } from "./components/screenshot-gallery";

export default function Home() {
  return <main>
    <ScrollReveal />
    <a className="skip-link" href="#top">Skip to content</a>
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur-xl">
      <div className="section-shell relative flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label="Mir Athfan Ali portfolio home" className="text-lg font-semibold text-aqua">MA</a>
        <Navigation />
      </div>
    </header>
    <section id="top" tabIndex={-1} className="section-shell py-12 lg:py-16">
      <div className="grid items-center gap-8 md:grid-cols-[1.5fr_0.7fr]">
        <div className="hero-entrance">
          <p className="section-eyebrow">Chicago · Open to California and remote</p>
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-4 text-2xl font-semibold text-aqua">{profile.title}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">I build AI applications across mobile, web, and backend systems, with retrieval-grounded workflows and measured ML performance work.</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">Seeking early-career AI engineering, full-stack AI, and forward-deployed engineering roles.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">Projects <ArrowRight size={16} aria-hidden="true" /></a>
            <a href={profile.resume} className="button-secondary"><FileText size={16} aria-hidden="true" /> Resume</a>
            <a href="#contact" className="button-secondary">Contact</a>
          </div>
        </div>
        <div className="profile-photo-shell hero-portrait hero-entrance hero-entrance-portrait"><Image src={profile.photo} alt={`${profile.name} portrait`} fill priority sizes="(min-width: 768px) 320px, 240px" className="object-cover" /></div>
      </div>
    </section>
    <section id="experience" tabIndex={-1} className="section-shell compact-section">
      <p className="section-eyebrow">Experience</p><h2 className="section-title">Building products and applied AI</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{experiences.map(item => <article key={item.company} className="timeline-card">
        <p className="text-sm text-aqua">{item.dates}</p><h3 className="mt-2 text-xl font-semibold">{item.role}</h3><p className="mt-1 text-rosegold">{item.company}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">{item.bullets.slice(0, 2).map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
      </article>)}</div>
    </section>
    <section id="projects" tabIndex={-1} className="section-shell compact-section">
      <p className="section-eyebrow">Selected projects</p><h2 className="section-title">AI products and systems engineering</h2>
      <p className="mt-3 text-slate-400">Explore implementation details, evaluation context, and tradeoffs in each case study.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{featuredProjects.map(project => <article data-motion-reveal key={project.slug} className={`project-card ${project.slug === "aura" ? "md:col-span-2" : ""}`}>
        <p className="text-sm text-rosegold">{project.category}</p><h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
        <p className="mt-3 text-sm text-aqua">{project.status}</p><p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">{project.stack.slice(0, 4).map(tool => <span className="tech-chip" key={tool}>{tool}</span>)}</div>
        <a href={`/projects/${project.slug}`} className="button-secondary mt-5">Case study <ArrowRight size={16} aria-hidden="true" /></a>
        {project.screenshots && <div className="mt-6 homepage-gallery"><ScreenshotGallery screenshots={project.screenshots.slice(0, 3)} /></div>}
      </article>)}</div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">{additionalProjects.map(project => <article data-motion-reveal key={project.title} className="project-card"><p className="text-xs text-rosegold">{project.category}</p><h3 className="mt-2 text-xl font-semibold">{project.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="button-secondary mt-4">{link.label}</a>)}</article>)}</div>
    </section>
    <section id="skills" tabIndex={-1} className="section-shell compact-section">
      <p className="section-eyebrow">Skills</p><h2 className="section-title">Tools I work with</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">{skillCategories.map(group => <article className="skill-card" key={group.title}><h3 className="font-semibold">{group.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{group.skills.join(" · ")}</p></article>)}</div>
    </section>
    <section id="about" tabIndex={-1} className="section-shell compact-section">
      <p className="section-eyebrow">About & education</p><h2 className="section-title">Applied AI with a computer science foundation</h2>
      <p className="mt-4 max-w-3xl leading-7 text-slate-300">I completed my master’s at Illinois Tech with an AI specialization. My work connects product interfaces, reliable backends, retrieval, and evaluation—from a mobile stylist to local resume tooling and GPU benchmarks.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{education.map(item => <article key={item.school} className="timeline-card"><h3 className="font-semibold">{item.school}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{item.degree}</p><p className="mt-2 text-sm text-slate-400">{item.dates} · {item.location}</p></article>)}</div>
    </section>
    <section id="contact" tabIndex={-1} className="section-shell compact-section">
      <div className="contact-card"><p className="section-eyebrow">Contact</p><h2 className="section-title">Let’s build practical AI products</h2><p className="mt-3 text-slate-300">Open to AI, full-stack AI, and forward-deployed engineering opportunities.</p>
        <div className="mt-5 flex flex-wrap gap-3"><a href={`mailto:${profile.email}`} className="button-primary"><Mail size={16} aria-hidden="true" />{profile.email}</a><a href={profile.github} target="_blank" rel="noreferrer" className="button-secondary"><Github size={16} aria-hidden="true" />GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="button-secondary"><Linkedin size={16} aria-hidden="true" />LinkedIn</a><a href={profile.resume} className="button-secondary">Resume</a></div>
      </div>
    </section>
    <footer className="section-shell py-8 text-sm text-slate-500">© 2026 {profile.name} · Chicago, IL</footer>
  </main>;
}
