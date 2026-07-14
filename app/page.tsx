import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Brain,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Cpu,
  Database,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import {
  additionalProjects,
  education,
  featuredProjects,
  heroMetrics,
  navItems,
  profile,
  skillCategories,
  experiences,
  type FeaturedProject,
  type Link,
  type Metric,
} from "../lib/portfolio-data";

const projectIcons: Record<string, LucideIcon> = {
  aura: Sparkles,
  forge: Trophy,
  "llm-training-performance-lab": Brain,
  "gpu-ai-performance-lab": Cpu,
  "comma-video-compression-challenge": Layers3,
};

const additionalProjectIcons: Record<string, LucideIcon> = {
  "EfficientFormer vs ResNet18": Layers3,
  "KDD Network Intrusion Detection": ShieldCheck,
};

const focusAreas = [
  "AI products",
  "Full-stack engineering",
  "GenAI applications",
  "Mobile apps",
  "ML systems",
  "React / React Native",
  "Node / Python",
];

const projectStack = [
  { label: "Mobile", value: "React Native / Expo", icon: Phone },
  { label: "Backend", value: "Firebase / FastAPI / Node", icon: Database },
  { label: "AI", value: "OpenAI / LangGraph / retrieval", icon: Bot },
  { label: "ML systems", value: "PyTorch / CUDA / ONNX", icon: Cpu },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

function ButtonLink({
  href,
  children,
  primary = false,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
  ariaLabel?: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      className={primary ? "button-primary" : "button-secondary"}
    >
      {children}
    </a>
  );
}

function LinkButtons({ links }: { links: Link[] }) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <ButtonLink key={`${link.href}-${link.label}`} href={link.href}>
          {link.label === "GitHub" ? (
            <Github className="h-4 w-4" aria-hidden="true" />
          ) : null}
          {link.label}
          {link.label !== "GitHub" ? (
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          ) : null}
        </ButtonLink>
      ))}
    </div>
  );
}

function IconLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="icon-button"
      aria-label={label}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function MetricTile({ metric }: { metric: Metric }) {
  return (
    <article className="metric-tile">
      <p className="text-3xl font-semibold text-white">{metric.value}</p>
      <h3 className="mt-3 text-sm font-semibold text-aqua">{metric.label}</h3>
      {metric.detail ? (
        <p className="mt-2 text-sm leading-6 text-slate-400">{metric.detail}</p>
      ) : null}
    </article>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual-header">
        <div>
          <p className="text-sm font-semibold text-white">Product engineering map</p>
          <p className="mt-1 text-sm text-slate-400">
            Mobile app to AI systems, with measurable performance work.
          </p>
        </div>
        <Sparkles className="h-5 w-5 text-aqua" aria-hidden="true" />
      </div>

      <div className="stack-grid">
        {projectStack.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="stack-cell">
              <Icon className="h-5 w-5 text-aqua" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">{item.value}</p>
            </div>
          );
        })}
      </div>

      <div className="pipeline-strip">
        <span>Wardrobe retrieval</span>
        <ArrowRight className="h-4 w-4 text-slate-500" aria-hidden="true" />
        <span>Agent reasoning</span>
        <ArrowRight className="h-4 w-4 text-slate-500" aria-hidden="true" />
        <span>Mobile product</span>
      </div>

      <div className="code-card">
        <pre className="whitespace-pre-wrap break-words text-[12px] leading-6 text-slate-300">
          <code>{`const product = await build({
  app: "React Native",
  backend: ["Firebase", "FastAPI", "PostgreSQL"],
  intelligence: ["LangGraph", "vector search", "feedback memory"],
  proof: ["TestFlight", "benchmarks", "case studies"],
});`}</code>
        </pre>
      </div>
    </div>
  );
}

function AuraScreenshotRail({ project }: { project: FeaturedProject }) {
  const screenshots = project.screenshots?.slice(0, 6) ?? [];

  return (
    <div className="aura-rail" aria-label="AURA screenshots">
      {screenshots.map((screen, index) => (
        <figure key={screen.src} className="phone-shot">
          <div className="relative aspect-[1320/2868] overflow-hidden rounded-md bg-black">
            <Image
              src={screen.src}
              alt={screen.alt}
              fill
              priority={index < 2}
              sizes="(min-width: 1024px) 160px, (min-width: 640px) 28vw, 42vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="px-1.5 py-2 text-xs font-medium text-slate-300">
            {screen.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  const Icon = projectIcons[project.slug] ?? Workflow;
  const isAura = project.slug === "aura";

  return (
    <article className={isAura ? "aura-spotlight" : "project-card"}>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className={isAura ? "max-w-2xl" : "min-w-0"}>
          <div className="flex items-start gap-4">
            <div className="icon-square">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-rosegold">{project.category}</p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
                {project.title}
              </h3>
            </div>
          </div>
          <p className="mt-5 text-sm font-medium text-aqua">{project.status}</p>
          <p className="mt-4 text-base leading-7 text-slate-300">{project.summary}</p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="small-metric">
                <p className="text-xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            {project.highlights.map((highlight) => (
              <div key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.slice(0, isAura ? 10 : 7).map((tool) => (
              <span key={tool} className="tech-chip">
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-7">
            <LinkButtons links={project.links} />
          </div>
        </div>

        {isAura ? <AuraScreenshotRail project={project} /> : null}
      </div>
    </article>
  );
}

export default function Home() {
  const aura = featuredProjects[0];
  const remainingFeatured = featuredProjects.slice(1);

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/86 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="text-lg font-semibold text-aqua"
            aria-label="Mir Athfan Ali portfolio home"
          >
            MA
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-aqua">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <IconLink href={profile.github} label="Open GitHub" icon={Github} />
            <IconLink href={profile.linkedin} label="Open LinkedIn" icon={Linkedin} />
          </div>
        </div>
      </header>

      <section id="top" className="section-shell pb-16 pt-16 sm:pt-24 lg:pb-24">
        <div className="grid min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="min-w-0">
            <p className="section-eyebrow">Chicago based, open to California and remote</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 text-2xl font-semibold text-aqua sm:text-3xl">
              {profile.title}
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              I build real AI products end-to-end across mobile, backend, AI agents,
              vector search, recommendation systems, and ML performance tooling.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#projects" primary>
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={profile.resume}>
                <FileText className="h-4 w-4" aria-hidden="true" />
                Resume
              </ButtonLink>
              <ButtonLink href={profile.github}>
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </ButtonLink>
              <ButtonLink href={profile.linkedin}>
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </ButtonLink>
              <ButtonLink href={profile.auraWebsite}>
                AURA
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div className="info-pill">
                <MapPin className="h-4 w-4 text-aqua" aria-hidden="true" />
                {profile.location}
              </div>
              <div className="info-pill">
                <BriefcaseBusiness className="h-4 w-4 text-rosegold" aria-hidden="true" />
                Open to {profile.openTo}
              </div>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-8">
        <div className="section-shell">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-aqua">Featured results</p>
            <span className="hidden h-px flex-1 bg-white/10 sm:block" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {heroMetrics.map((metric) => (
              <MetricTile key={metric.label} metric={metric} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell py-20 lg:py-24">
        <SectionHeading
          eyebrow="Featured project"
          title="AURA is the flagship AI product"
          description="The portfolio leads with the strongest evidence: an end-to-end mobile AI product with real app screens, backend architecture, agent orchestration, retrieval, personalization, and TestFlight workflow."
        />
        <FeaturedProjectCard project={aura} />

        {aura.capabilityGroups ? (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {aura.capabilityGroups.map((group) => (
              <article key={group.title} className="capability-card">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-5 space-y-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Major engineering projects"
            title="Full-stack, AI systems, and performance depth"
            description="These projects make the site less generic for recruiters: each one connects a role-relevant domain to concrete architecture, tooling, and results."
          />
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {remainingFeatured.map((project) => (
              <FeaturedProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 lg:py-24">
        <SectionHeading
          eyebrow="Additional projects"
          title="More applied ML work"
          description="Focused experiments that support computer vision, ML evaluation, and security-oriented machine learning roles."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {additionalProjects.map((project) => {
            const Icon = additionalProjectIcons[project.title] ?? Workflow;

            return (
              <article key={project.title} className="project-card">
                <div className="flex items-start gap-4">
                  <div className="icon-square">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-rosegold">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-base leading-7 text-slate-300">{project.summary}</p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="small-metric">
                      <p className="text-xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-xs font-semibold text-slate-400">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span key={tool} className="tech-chip">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="mt-7">
                  <LinkButtons links={project.links} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="experience" className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Experience"
            title="Product ownership plus engineering execution"
            description="The wording stays grounded in actual work: no inflated company claims, no invented titles, and no unsourced metrics."
          />
          <div className="space-y-5">
            {experiences.map((experience) => (
              <article key={`${experience.company}-${experience.role}`} className="timeline-card">
                <div>
                  <p className="text-sm font-semibold text-aqua">{experience.dates}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{experience.role}</h3>
                  <p className="mt-1 text-base text-rosegold">{experience.company}</p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {experience.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell py-20 lg:py-24">
        <SectionHeading
          eyebrow="Skills"
          title="Recruiter-friendly technical map"
          description="Organized by the kinds of roles you are targeting: full-stack, AI application development, GenAI, React Native, Node, Python, and ML systems."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group) => (
            <article key={group.title} className="skill-card">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="section-shell grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="profile-photo-shell">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={`${profile.name} portrait`}
                fill
                sizes="(min-width: 1024px) 360px, 90vw"
                className="object-cover"
              />
            ) : (
              <div className="portrait-fallback">
                <span>MA</span>
              </div>
            )}
          </div>
          <div>
            <SectionHeading
              eyebrow="About"
              title="Recent MS graduate focused on applied AI products"
              description="I recently completed a Master of Applied Science in Computer Science with an AI specialization at Illinois Tech. I am interested in AI products, full-stack engineering, GenAI applications, mobile apps, and ML systems."
            />
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="skill-pill">
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300">
              My best work sits where product, backend reliability, and applied AI meet:
              building the app experience, wiring the data model, grounding AI output in
              retrieval, and validating the result with tests or benchmark evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 lg:py-24">
        <SectionHeading
          eyebrow="Education"
          title="Computer science and AI foundation"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.school} className="project-card">
              <div className="icon-square">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{item.school}</h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{item.degree}</p>
              <p className="mt-4 text-sm text-rosegold">{item.location}</p>
              <p className="mt-1 text-sm text-slate-400">{item.dates}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="section-shell grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            eyebrow="Contact"
            title="Open to software, full-stack, and AI application roles"
            description="Best fit: teams building practical AI products, mobile or web applications, reliable backends, retrieval systems, recommendation logic, and ML performance workflows."
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a href={`mailto:${profile.email}`} className="contact-card">
              <Mail className="h-5 w-5 text-aqua" aria-hidden="true" />
              <div className="mt-5 text-sm text-slate-400">Email</div>
              <div className="mt-1 break-words text-sm font-semibold text-white">
                {profile.email}
              </div>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-card">
              <Github className="h-5 w-5 text-aqua" aria-hidden="true" />
              <div className="mt-5 text-sm text-slate-400">GitHub</div>
              <div className="mt-1 text-sm font-semibold text-white">github.com/mirathfan</div>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-card">
              <Linkedin className="h-5 w-5 text-aqua" aria-hidden="true" />
              <div className="mt-5 text-sm text-slate-400">LinkedIn</div>
              <div className="mt-1 break-words text-sm font-semibold text-white">
                linkedin.com/in/mirathfan
              </div>
            </a>
            <a href={profile.auraWebsite} target="_blank" rel="noreferrer" className="contact-card">
              <Sparkles className="h-5 w-5 text-aqua" aria-hidden="true" />
              <div className="mt-5 text-sm text-slate-400">AURA</div>
              <div className="mt-1 break-words text-sm font-semibold text-white">
                aurastylist.framer.website
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8">
        <div className="section-shell flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}</p>
          <p>{profile.title} · Chicago, IL</p>
        </div>
      </footer>
    </main>
  );
}
