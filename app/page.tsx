import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  CircuitBoard,
  Cloud,
  Cpu,
  Database,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareText,
  Network,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UploadCloud,
  Workflow,
} from "lucide-react";

const profile = {
  name: "Mir Athfan Ali",
  headline: "Full-Stack AI Engineer",
  location: "Chicago, IL",
  openTo: "Chicago, California, and Remote",
  email: "mali83@hawk.illinoistech.edu",
  github: "https://github.com/mirathfan",
  linkedin: "https://www.linkedin.com/in/mirathfan/",
  auraWebsite: "https://aurastylist.framer.website/",
  auraRepo: "https://github.com/mirathfan/AURA",
  resume: "/Mir_Athfan_Ali_AI_ML_Resume.pdf",
};

const navItems = [
  { label: "AURA", href: "#aura" },
  { label: "Architecture", href: "#architecture" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const whatIBuild = [
  {
    title: "AI mobile apps",
    detail: "React Native / Expo",
    icon: Phone,
  },
  {
    title: "Scalable backends",
    detail: "Node.js / Python",
    icon: Database,
  },
  {
    title: "GenAI agents",
    detail: "OpenAI / LangGraph",
    icon: Bot,
  },
  {
    title: "Vector retrieval",
    detail: "Embeddings / RAG",
    icon: Network,
  },
  {
    title: "Recommendations",
    detail: "Personalized product logic",
    icon: BrainCircuit,
  },
];

const auraProof = [
  "React Native / Expo mobile frontend",
  "Firebase Auth, Firestore, Cloud Functions, and Storage",
  "OpenAI + LangGraph agent reasoning layer",
  "Wardrobe embeddings and vector retrieval",
  "Outfit recommendation engine with style memory",
  "Feedback personalization and shopping logic",
  "TestFlight workflow with real mobile screens",
  "Saved looks, planner, clothing upload, and background removal",
];

const auraHighlights = [
  {
    icon: Phone,
    title: "Mobile product surface",
    text: "AURA is built around fast closet capture, outfit planning, saved looks, and an iOS TestFlight iteration loop.",
  },
  {
    icon: UploadCloud,
    title: "Wardrobe ingestion",
    text: "Clothing upload and background-removal flows turn user items into clean wardrobe assets for recommendations.",
  },
  {
    icon: MessageSquareText,
    title: "Stylist agent",
    text: "OpenAI + LangGraph orchestrate personalized styling advice using user context, wardrobe state, and feedback.",
  },
  {
    icon: Search,
    title: "Retrieval layer",
    text: "Wardrobe embeddings and vector search help AURA surface relevant pieces instead of treating every item equally.",
  },
  {
    icon: CalendarDays,
    title: "Planner workflow",
    text: "Calendar-aware planning connects saved looks, weather/context prompts, and planned outfit decisions.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping logic",
    text: "Personalized shopping and add-to-wardrobe flows help bridge user preference, inventory gaps, and new finds.",
  },
];

const architecture = [
  {
    title: "Mobile App",
    detail: "React Native / Expo",
    icon: Phone,
  },
  {
    title: "Firebase",
    detail: "Auth / Firestore / Storage",
    icon: Cloud,
  },
  {
    title: "Cloud Functions",
    detail: "Node.js backend workflows",
    icon: CircuitBoard,
  },
  {
    title: "Agent Layer",
    detail: "OpenAI + LangGraph",
    icon: Bot,
  },
  {
    title: "Retrieval",
    detail: "Embeddings / vector search",
    icon: Network,
  },
];

const auraScreenshots = [
  {
    title: "Today look",
    src: "/aura/today-look.png",
    alt: "AURA Today Look screen showing a planned outfit recommendation.",
  },
  {
    title: "Stylist",
    src: "/aura/aura-chat.png",
    alt: "AURA stylist chat screen recommending a black-and-white day outfit.",
  },
  {
    title: "Closet",
    src: "/aura/closet.png",
    alt: "AURA closet screen showing uploaded wardrobe items.",
  },
  {
    title: "Add item",
    src: "/aura/add-to-wardrobe.png",
    alt: "AURA add-to-wardrobe screen reviewing an item found from a shopping page.",
  },
  {
    title: "Calendar",
    src: "/aura/style-calendar.png",
    alt: "AURA style calendar screen for planning outfits by date.",
  },
  {
    title: "Insights",
    src: "/aura/insights.png",
    alt: "AURA insights screen showing wardrobe health and inventory summaries.",
  },
];

const auraOutfitImages = [
  {
    title: "Wardrobe outfit result",
    src: "/aura/outfit-neutral-card.jpg",
    alt: "AURA outfit composition with shirt, hoodie, pants, loafers, and watch.",
  },
  {
    title: "Generated outfit board",
    src: "/aura/outfit-neutral.jpg",
    alt: "AURA outfit board with light blue shirt, white pants, black hoodie, and loafer.",
  },
];

const projects = [
  {
    title: "LLM Training Performance Lab",
    category: "LLM systems",
    description:
      "Built a reproducible PyTorch benchmark lab for GPT-style Transformer training performance across local GPU and CPU-capable workflows.",
    stack: [
      "Python",
      "PyTorch",
      "CUDA",
      "Transformers",
      "AMP",
      "torch.compile",
    ],
    evidence: [
      "Implemented a configurable decoder-only Transformer",
      "Benchmarked FP32, AMP, compile, SDPA, BF16, and fused AdamW paths",
      "Tracked throughput, step latency, GPU memory, validation loss, and profiler traces",
    ],
    icon: BrainCircuit,
    repoUrl: "https://github.com/mirathfan/llm-training-performance-lab",
  },
  {
    title: "GPU AI Performance Lab",
    category: "AI systems",
    description:
      "Benchmarked PyTorch and ONNX Runtime inference on an NVIDIA RTX 3060 Laptop GPU using CUDA, FP32/FP16, batch-size sweeps, and performance reports.",
    stack: ["Python", "PyTorch", "ONNX Runtime", "CUDA", "TensorRT"],
    evidence: [
      "Compared framework/runtime inference paths",
      "Ran FP32/FP16 and batch-size sweeps",
      "Produced performance-oriented reports",
    ],
    icon: Cpu,
    repoUrl: "https://github.com/mirathfan/gpu-ai-performance-lab",
  },
  {
    title: "EfficientFormer vs ResNet18",
    category: "Vision / ML",
    description:
      "Compared EfficientFormerL1 and ResNet18 on CIFAR-10 using PyTorch training and evaluation pipelines.",
    stack: ["PyTorch", "Computer Vision", "CIFAR-10"],
    evidence: [
      "Built model training and evaluation flow",
      "Compared modern efficient architecture against ResNet18",
      "Focused on reproducible computer vision experiments",
    ],
    icon: Layers3,
  },
  {
    title: "KDD NIDS",
    category: "Security / ML",
    description:
      "Built an end-to-end network intrusion detection pipeline using the KDD Cup 1999 dataset with ML classifiers and explainability work.",
    stack: ["Python", "R", "Machine Learning", "Security", "SHAP"],
    evidence: [
      "Prepared security dataset for ML modeling",
      "Explored multiple classifiers for intrusion detection",
      "Connected ML workflow to a practical security use case",
    ],
    icon: ShieldCheck,
    repoUrl: "https://github.com/mirathfan/kdd-nids-pipeline",
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frontend / Mobile",
    skills: ["React", "React Native", "Next.js", "Expo"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Firebase", "Cloud Functions", "APIs"],
  },
  {
    title: "AI / ML",
    skills: ["OpenAI", "LangGraph", "Vector Search", "PyTorch"],
  },
  {
    title: "Performance",
    skills: ["ONNX Runtime", "CUDA", "TensorRT", "Batch sweeps"],
  },
  {
    title: "Tools",
    skills: ["Git", "Firestore", "Storage", "TestFlight"],
  },
];

const focusAreas = [
  "AI products",
  "Full-stack engineering",
  "GenAI applications",
  "Mobile apps",
  "ML systems",
];

const targetRoles = [
  "Software Engineer",
  "Full-Stack Engineer",
  "AI Application Developer",
  "GenAI Developer",
  "React / React Native",
  "Node / Python",
];

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <h2 className="text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl">
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
  children: React.ReactNode;
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
      className={[
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 text-sm font-semibold tracking-normal transition",
        primary
          ? "border-aqua/70 bg-aqua text-slate-950 shadow-[0_0_30px_rgba(83,243,225,0.18)] hover:bg-white"
          : "border-white/16 bg-white/[0.035] text-slate-100 hover:border-aqua/55 hover:text-aqua",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function IconLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Github;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/14 bg-white/[0.035] text-slate-200 transition hover:border-aqua/50 hover:text-aqua"
      aria-label={label}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function MiniCodePanel() {
  return (
    <div className="glass-panel hero-code relative min-w-0 rounded-lg p-4 sm:p-6">
      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
        <span className="h-3 w-3 rounded-full bg-[#ff625f]" />
        <span className="h-3 w-3 rounded-full bg-[#f9c75c]" />
        <span className="h-3 w-3 rounded-full bg-[#67d379]" />
        <span className="ml-auto text-xs text-slate-500">engineer.ts</span>
      </div>
      <pre className="min-w-0 overflow-x-auto text-[11px] leading-6 text-slate-300 sm:text-xs">
        <code>{`const engineer = {
  role: "Full-Stack AI Engineer",
  stack: ["React Native", "Next.js", "Node", "Python"],
  ai: ["OpenAI", "LangGraph", "vector search"],
  product: "AURA",
};

async function buildProduct(userNeed) {
  const memory = await retrieveRelevantContext(userNeed);
  const plan = await agent.reason({ userNeed, memory });
  return shipAcrossMobileBackendAndAI(plan);
}`}</code>
      </pre>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/86 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <a
            href="#top"
            className="text-lg font-semibold tracking-[0.18em] text-aqua"
            aria-label="Mir Athfan Ali portfolio home"
          >
            MA
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-aqua"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <IconLink href={profile.github} label="Open GitHub" icon={Github} />
            <IconLink
              href={profile.linkedin}
              label="Open LinkedIn"
              icon={Linkedin}
            />
          </div>
        </div>
      </header>

      <section id="top" className="section-shell pb-16 pt-16 sm:pt-24 lg:pb-24">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
          <div className="min-w-0">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 text-2xl font-semibold tracking-normal text-aqua sm:text-3xl">
              {profile.headline}
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              I build real AI products end-to-end across mobile, backend, AI
              agents, vector search, and recommendation systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={profile.resume} primary>
                <FileText className="h-4 w-4" aria-hidden="true" />
                View Resume
              </ButtonLink>
              <ButtonLink href={profile.auraWebsite}>
                View AURA
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email Me
              </ButtonLink>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.025] px-4 py-3">
                <MapPin className="h-4 w-4 text-aqua" aria-hidden="true" />
                {profile.location}
              </div>
              <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.025] px-4 py-3">
                <Workflow className="h-4 w-4 text-rosegold" aria-hidden="true" />
                Open to {profile.openTo}
              </div>
            </div>
          </div>

          <div className="relative">
            <MiniCodePanel />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="section-shell grid gap-0 py-7 md:grid-cols-[0.72fr_repeat(5,1fr)]">
          <div className="mb-5 border-l border-aqua/60 pl-4 md:mb-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aqua">
              What I Build
            </p>
          </div>
          {whatIBuild.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="border-white/10 py-4 md:border-l md:px-6 md:py-0"
              >
                <Icon className="mb-3 h-6 w-6 text-aqua" aria-hidden="true" />
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="aura" className="section-shell py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              title="AURA — AI Personal Stylist"
              description="AURA is a mobile AI stylist app that helps users build outfits from their wardrobe, save looks, plan outfits, and get personalized AI styling advice."
            />
            <div className="mb-7 flex flex-wrap gap-3">
              <ButtonLink href={profile.auraWebsite} primary>
                View AURA Site
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={profile.auraRepo}>
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </ButtonLink>
            </div>
            <div className="space-y-2.5">
              {auraProof.map((point) => (
                <div key={point} className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-aqua"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="aura-gallery">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Real AURA app screens
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  TestFlight/mobile workflow snapshots
                </p>
              </div>
              <Sparkles className="h-5 w-5 text-aqua" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {auraScreenshots.map((screen, index) => (
                <figure key={screen.src} className="phone-shot">
                  <div className="relative aspect-[1320/2868] overflow-hidden rounded-md bg-black">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      fill
                      priority={index < 2}
                      sizes="(min-width: 1024px) 180px, (min-width: 640px) 28vw, 44vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <figcaption className="px-1.5 py-2 text-xs font-medium text-slate-300">
                    {screen.title}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {auraOutfitImages.map((image) => (
                <figure key={image.src} className="outfit-shot">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#f5efe8]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 290px, (min-width: 640px) 42vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-1.5 py-2 text-xs font-medium text-slate-300">
                    {image.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="section-shell">
          <SectionHeading
            title="AURA Product Workflows"
            description="The product is organized around real user flows: capture the wardrobe, retrieve relevant pieces, reason through styling context, and save or plan outfits."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {auraHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="feature-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-aqua/25 bg-aqua/8 text-aqua">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="architecture" className="section-shell py-20 lg:py-24">
        <SectionHeading
          title="AURA Architecture"
          description="A compact view of how the mobile UI, Firebase backend, agent layer, and retrieval system work together."
        />
        <div className="architecture-rail">
          {architecture.map((node, index) => {
            const Icon = node.icon;

            return (
              <div key={node.title} className="architecture-node">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-aqua/25 bg-aqua/8 text-aqua">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white">{node.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{node.detail}</p>
                </div>
                {index < architecture.length - 1 ? (
                  <ArrowUpRight
                    className="architecture-arrow h-5 w-5 text-slate-500"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="mt-5 rounded-lg border border-rosegold/20 bg-rosegold/8 px-5 py-4 text-sm text-slate-300">
          Style memory and feedback loops flow back into retrieval and agent
          prompts, so recommendations can become more personalized over time.
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="section-shell">
          <SectionHeading
            title="Selected Projects"
            description="Focused engineering projects spanning LLM training performance, AI inference benchmarking, computer vision model comparison, and machine learning for security."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article key={project.title} className="project-card">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-aqua/25 bg-aqua/8 text-aqua">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rosegold">
                      {project.category}
                    </p>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-5 space-y-2">
                    {project.evidence.map((item) => (
                      <div key={item} className="flex gap-2 text-sm text-slate-300">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-aqua"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tool) => (
                      <span key={tool} className="tech-chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <ButtonLink href={project.repoUrl ?? profile.github}>
                      <Github className="h-4 w-4" aria-hidden="true" />
                      Code
                    </ButtonLink>
                    <ButtonLink
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(
                        `${project.title} walkthrough`,
                      )}`}
                    >
                      <FileText className="h-4 w-4" aria-hidden="true" />
                      Walkthrough
                    </ButtonLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell py-20 lg:py-24">
        <SectionHeading
          title="Skills Matrix"
          description="A recruiter-friendly scan of the tools I use across product, AI application, backend, model workflow, and deployment-ready surfaces."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 grid grid-cols-2 gap-2">
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

      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              title="About"
              description="Recent MS Computer Science graduate from Illinois Tech, interested in AI products, full-stack engineering, GenAI applications, mobile apps, and ML systems."
            />
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="skill-pill">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-lg p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-rosegold/30 bg-rosegold/10 text-rosegold">
                <BriefcaseBusiness className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Currently looking
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Open to roles where I can build useful AI-powered products and
                  grow alongside strong engineering teams.
                </p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {targetRoles.map((role) => (
                    <div key={role} className="flex gap-2 text-sm text-slate-300">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-aqua"
                        aria-hidden="true"
                      />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm text-slate-400">
                  Open to Chicago, California, and Remote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            title="Let’s Build Something Useful"
            description="Open to software engineer, full-stack engineer, AI application developer, GenAI developer, React/React Native, Node, and Python roles."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <a href={`mailto:${profile.email}`} className="contact-card">
              <Mail className="h-5 w-5 text-aqua" aria-hidden="true" />
              <div className="mt-5 text-sm text-slate-400">Email</div>
              <div className="mt-1 break-words text-sm font-semibold text-white">
                {profile.email}
              </div>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <Github className="h-5 w-5 text-aqua" aria-hidden="true" />
              <div className="mt-5 text-sm text-slate-400">GitHub</div>
              <div className="mt-1 text-sm font-semibold text-white">
                github.com/mirathfan
              </div>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <Linkedin className="h-5 w-5 text-aqua" aria-hidden="true" />
              <div className="mt-5 text-sm text-slate-400">LinkedIn</div>
              <div className="mt-1 break-words text-sm font-semibold text-white">
                linkedin.com/in/mirathfan
              </div>
            </a>
            <a
              href={profile.auraWebsite}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <Sparkles className="h-5 w-5 text-aqua" aria-hidden="true" />
              <div className="mt-5 text-sm text-slate-400">AURA</div>
              <div className="mt-1 break-words text-sm font-semibold text-white">
                aurastylist.framer.website
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="section-shell flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}</p>
          <p>{profile.headline} · Chicago, IL</p>
        </div>
      </footer>
    </main>
  );
}
