import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Sparkles,
} from "lucide-react";

import {
  featuredProjects,
  getProjectBySlug,
  type Link,
} from "../../../lib/portfolio-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Mir Athfan Ali`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Mir Athfan Ali`,
      description: project.summary,
      images: [{ url: "/og-image.svg" }],
    },
  };
}

function ProjectLinks({ links }: { links: Link[] }) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={`${link.href}-${link.label}`}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          className="button-secondary"
        >
          {link.label === "GitHub" ? (
            <Github className="h-4 w-4" aria-hidden="true" />
          ) : null}
          {link.label}
          {link.label !== "GitHub" ? (
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          ) : null}
        </a>
      ))}
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isLlmLab = project.slug === "llm-training-performance-lab";

  return (
    <main className="min-h-screen">
      <header className="border-b border-white/10 bg-ink/86 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-aqua">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to portfolio
          </a>
          <a href="/#contact" className="text-sm font-semibold text-aqua">
            Contact
          </a>
        </div>
      </header>

      <section className="section-shell pb-16 pt-16 sm:pt-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="section-eyebrow">{project.category}</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-base font-semibold text-aqua">{project.status}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {project.summary}
            </p>
            <div className="mt-8">
              <ProjectLinks links={project.links.filter((link) => link.label !== "Case study")} />
            </div>
          </div>

          <div className="project-brief">
            <div className="flex items-center gap-3">
              <div className="icon-square">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold text-white">Role and scope</h2>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">{project.role}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((tool) => (
                <span key={tool} className="tech-chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-10">
        <div className="section-shell grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {project.metrics.map((metric) => (
            <article key={metric.label} className="metric-tile">
              <p className="text-3xl font-semibold text-white">{metric.value}</p>
              <h2 className="mt-3 text-sm font-semibold text-aqua">{metric.label}</h2>
              {metric.detail ? (
                <p className="mt-2 text-sm leading-6 text-slate-400">{metric.detail}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {project.screenshots ? (
        <section className="section-shell py-16">
          <div className="mb-8 max-w-3xl">
            <p className="section-eyebrow">Product proof</p>
            <h2 className="text-3xl font-semibold text-white">Real app surfaces</h2>
          </div>
          <div className="aura-rail">
            {project.screenshots.map((screen, index) => (
              <figure key={screen.src} className="phone-shot">
                <div className="relative aspect-[1320/2868] overflow-hidden rounded-md bg-black">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    priority={index < 2}
                    sizes="(min-width: 1024px) 170px, (min-width: 640px) 28vw, 42vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="px-1.5 py-2 text-xs font-medium text-slate-300">
                  {screen.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-shell py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="section-eyebrow">Case study</p>
            <h2 className="text-3xl font-semibold text-white">What this shows</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              {project.caseStudy.overview}
            </p>
          </div>
          <div className="space-y-4">
            <article className="timeline-card">
              <h3 className="text-xl font-semibold text-white">Problem</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.problem}</p>
            </article>
            {project.caseStudy.sections.map((section) => (
              <article key={section.title} className="timeline-card">
                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{section.body}</p>
                {section.points ? (
                  <div className="mt-5 space-y-2">
                    {section.points.map((point) => (
                      <div key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {isLlmLab ? (
        <section className="border-y border-white/10 bg-white/[0.025] py-16">
          <div className="section-shell">
            <div className="mb-8 max-w-3xl">
              <p className="section-eyebrow">Performance visualization</p>
              <h2 className="text-3xl font-semibold text-white">Baseline to optimized</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                A simple visual summary of the WSL2 validation run: throughput increased while peak GPU memory dropped.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <article className="project-card">
                <h3 className="text-xl font-semibold text-white">Throughput</h3>
                <div className="mt-6 space-y-5">
                  <div>
                    <div className="mb-2 flex justify-between text-sm text-slate-300">
                      <span>Baseline</span>
                      <span>51.0K tok/s</span>
                    </div>
                    <div className="metric-bar">
                      <span style={{ width: "33%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex justify-between text-sm text-slate-300">
                      <span>Optimized</span>
                      <span>154.2K tok/s</span>
                    </div>
                    <div className="metric-bar">
                      <span style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </article>
              <article className="project-card">
                <h3 className="text-xl font-semibold text-white">Peak GPU memory</h3>
                <div className="mt-6 space-y-5">
                  <div>
                    <div className="mb-2 flex justify-between text-sm text-slate-300">
                      <span>Baseline</span>
                      <span>1,120 MB</span>
                    </div>
                    <div className="metric-bar memory">
                      <span style={{ width: "100%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex justify-between text-sm text-slate-300">
                      <span>Optimized</span>
                      <span>533 MB</span>
                    </div>
                    <div className="metric-bar memory">
                      <span style={{ width: "48%" }} />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell py-16">
        <div className="contact-card flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-aqua">Interested in the implementation?</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Let’s talk through the details.</h2>
          </div>
          <a href="/#contact" className="button-primary">
            Contact Mir
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
