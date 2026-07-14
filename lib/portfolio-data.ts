export type Metric = {
  label: string;
  value: string;
  detail?: string;
};

export type Link = {
  label: string;
  href: string;
};

export type Screenshot = {
  title: string;
  src: string;
  alt: string;
};

export type FeaturedProject = {
  slug: string;
  title: string;
  status: string;
  category: string;
  summary: string;
  problem: string;
  role: string;
  stack: string[];
  metrics: Metric[];
  highlights: string[];
  links: Link[];
  caseStudy: {
    overview: string;
    sections: Array<{
      title: string;
      body: string;
      points?: string[];
    }>;
  };
  screenshots?: Screenshot[];
  capabilityGroups?: Array<{
    title: string;
    items: string[];
  }>;
};

export type AdditionalProject = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  metrics: Metric[];
  highlights: string[];
  links: Link[];
};

export type Experience = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const profile = {
  name: "Mir Athfan Ali",
  title: "Full-Stack AI Engineer",
  location: "Chicago, IL",
  openTo: "Chicago, California, and Remote",
  email: "mirathfan@gmail.com",
  github: "https://github.com/mirathfan",
  linkedin: "https://www.linkedin.com/in/mirathfan/",
  portfolio: "https://mirathfan-portfolio.vercel.app/",
  auraWebsite: "https://aurastylist.framer.website/",
  auraRepo: "https://github.com/mirathfan/AURA",
  resume: "/Mir_Athfan_Ali_AI_ML_Resume.pdf",
  photo: null as string | null,
};

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Resume", href: profile.resume },
  { label: "Contact", href: "#contact" },
];

export const heroMetrics: Metric[] = [
  {
    label: "LLM training throughput",
    value: "3.02x",
    detail: "Measured gpt_small speedup in WSL2 validation",
  },
  {
    label: "Peak GPU memory reduction",
    value: "52.4%",
    detail: "1,120 MB baseline to 533 MB optimized",
  },
  {
    label: "Mobile product shipped",
    value: "TestFlight",
    detail: "AURA end-to-end AI styling platform",
  },
  {
    label: "Operating range",
    value: "Full stack",
    detail: "Mobile, backend, AI, infrastructure, and ML systems",
  },
];

export const auraScreenshots: Screenshot[] = [
  {
    title: "Today look",
    src: "/aura/today-look.png",
    alt: "AURA Today Look screen showing a planned outfit recommendation.",
  },
  {
    title: "Stylist chat",
    src: "/aura/aura-chat.png",
    alt: "AURA stylist chat screen recommending a closet-aware outfit.",
  },
  {
    title: "Digital closet",
    src: "/aura/closet.png",
    alt: "AURA closet screen showing uploaded wardrobe items.",
  },
  {
    title: "Add to wardrobe",
    src: "/aura/add-to-wardrobe.png",
    alt: "AURA add-to-wardrobe screen reviewing an item from a shopping page.",
  },
  {
    title: "Style calendar",
    src: "/aura/style-calendar.png",
    alt: "AURA style calendar screen for planning outfits by date.",
  },
  {
    title: "Wardrobe insights",
    src: "/aura/insights.png",
    alt: "AURA insights screen showing wardrobe health and inventory summaries.",
  },
];

export const auraOutfitImages: Screenshot[] = [
  {
    title: "Closet-aware outfit result",
    src: "/aura/outfit-neutral-card.jpg",
    alt: "AURA outfit composition with shirt, hoodie, pants, loafers, and watch.",
  },
  {
    title: "Generated outfit board",
    src: "/aura/outfit-neutral.jpg",
    alt: "AURA outfit board with light blue shirt, white pants, black hoodie, and loafer.",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "aura",
    title: "AURA - AI Personal Stylist",
    status: "TestFlight release / active development",
    category: "AI mobile product",
    summary:
      "A mobile AI styling platform that turns a real wardrobe into personalized outfit recommendations using wardrobe embeddings, vector retrieval, structured agents, and long-term style feedback.",
    problem:
      "Personal styling apps often ignore the user's real closet. AURA keeps recommendations grounded in uploaded wardrobe items, saved looks, calendar context, and feedback history.",
    role:
      "Sole engineer across product design, React Native app, Firebase backend, Cloud Functions, retrieval, recommendation logic, LangGraph orchestration, testing, and beta preparation.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Cloud Functions",
      "OpenAI",
      "LangGraph",
      "Vector Search",
    ],
    metrics: [
      { label: "Release path", value: "TestFlight" },
      { label: "Agent workflow", value: "10 nodes" },
      { label: "Eval harness", value: "23 golden cases" },
      { label: "Closet validity", value: "0 hallucinated items", detail: "Across the current eval suite" },
    ],
    highlights: [
      "Built closet-grounded outfit generation with validate-and-repair logic for item membership and role canonicalization.",
      "Turned 18 feedback types into style memory signals for future recommendations.",
      "Added privacy-safe metrics, fallbacks, rate limits, quota controls, and account deletion flows.",
    ],
    links: [
      { label: "Live site", href: profile.auraWebsite },
      { label: "GitHub", href: profile.auraRepo },
      { label: "Case study", href: "/projects/aura" },
    ],
    screenshots: auraScreenshots,
    capabilityGroups: [
      {
        title: "Product",
        items: [
          "AI stylist chat",
          "Digital wardrobe",
          "Outfit recommendation cards",
          "Saved looks",
          "Calendar outfit planning",
          "Wear tracking",
          "Wardrobe insights",
          "Personalized shopping recommendations",
        ],
      },
      {
        title: "Intelligence",
        items: [
          "Wardrobe embeddings",
          "Vector retrieval",
          "Role-balanced outfit generation",
          "Recommendation validation",
          "Style memory",
          "Feedback personalization",
          "Wardrobe-gap detection",
          "Shopping recommendation scoring",
        ],
      },
      {
        title: "Agent architecture",
        items: [
          "Intent classification",
          "Style-memory retrieval",
          "Wardrobe-context retrieval",
          "Outfit generation",
          "Refinement",
          "Explanation",
          "Feedback handling",
          "LangGraph orchestration",
        ],
      },
      {
        title: "Production engineering",
        items: [
          "Firebase Authentication",
          "Firestore",
          "Cloud Functions",
          "Firebase Storage",
          "TestFlight distribution",
          "Rate limiting",
          "Account deletion",
          "Privacy controls",
          "AI quota gating",
          "Fallbacks and error handling",
        ],
      },
    ],
    caseStudy: {
      overview:
        "AURA is the portfolio's flagship product: a complete mobile AI styling system that connects wardrobe ingestion, retrieval, agent reasoning, recommendation generation, planning, and feedback loops.",
      sections: [
        {
          title: "Problem",
          body:
            "Most outfit tools recommend generic looks. AURA is built around closet grounding: recommendations should come from pieces the user actually owns, while still adapting to taste, history, and planning context.",
        },
        {
          title: "Product experience",
          body:
            "The mobile app covers wardrobe upload, AI stylist chat, outfit cards, saved looks, calendar planning, wear tracking, wardrobe insights, and personalized shopping logic.",
        },
        {
          title: "System architecture",
          body:
            "React Native and Expo power the mobile interface. Firebase Authentication, Firestore, Cloud Functions, and Storage provide the backend. OpenAI and LangGraph coordinate the stylist agent and structured recommendation workflows.",
        },
        {
          title: "Wardrobe intelligence pipeline",
          body:
            "Uploaded pieces become structured closet items and retrieval context. Embeddings, category normalization, style memory, and feedback signals help AURA choose relevant items instead of treating every closet piece equally.",
        },
        {
          title: "Agent workflow",
          body:
            "The agent classifies intent, retrieves style memory, retrieves wardrobe context, generates outfits, validates closet membership, repairs invalid output when needed, explains choices, and routes feedback back into personalization.",
        },
        {
          title: "Production engineering",
          body:
            "The project includes TestFlight distribution, privacy controls, account deletion, rate limiting, AI usage gating, fallbacks, request timeouts, and TestFlight-ready QA documentation.",
        },
        {
          title: "Challenges and decisions",
          body:
            "The hardest design choice was prioritizing reliable closet-grounded output over open-ended styling creativity. AURA uses validation, item IDs, role canonicalization, and evaluation gates to keep recommendations grounded.",
        },
        {
          title: "Current status and next steps",
          body:
            "AURA is in active development with a TestFlight release path. Next work focuses on improving personalization loops, expanding shopping recommendation quality, and continuing reliability work around expensive AI operations.",
        },
      ],
    },
  },
  {
    slug: "forge",
    title: "Forge - Fitness Intelligence Platform",
    status: "Active development",
    category: "Full-stack mobile platform",
    summary:
      "A production-style workout tracking platform with reliable set logging, progressive-overload recommendations, analytics, and a tested FastAPI backend.",
    problem:
      "Workout tracking needs to stay reliable during active sessions, preserve set-level detail, and turn training history into useful recommendations without fragile mobile/backend state.",
    role:
      "Full-stack engineer across the Expo mobile app, typed client state, FastAPI services, PostgreSQL schema, migrations, test coverage, and Dockerized local development.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "Pytest",
      "TanStack Query",
      "Zustand",
    ],
    metrics: [
      { label: "Status", value: "Active development" },
      { label: "Backend", value: "FastAPI + PostgreSQL" },
      { label: "Auth", value: "JWT + Argon2" },
      { label: "Reliability", value: "Idempotent logging" },
    ],
    highlights: [
      "Implemented authenticated sessions, reusable templates, exercise search, workout history, and analytics foundations.",
      "Persisted active workout drafts with set type, units, RPE, notes, and rest-timer timestamps.",
      "Used client mutation IDs and backend reconciliation to make set creation and completion safer.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/mirathfan/forge-fitness" },
      { label: "Case study", href: "/projects/forge" },
    ],
    caseStudy: {
      overview:
        "Forge is a full-stack fitness intelligence platform focused on reliable workout logging, analytics, and recommendation workflows.",
      sections: [
        {
          title: "Product overview",
          body:
            "Forge supports authenticated workout sessions, reusable templates, live set tracking, exercise history, bodyweight trends, estimated one-rep-max analytics, and progressive-overload recommendations.",
        },
        {
          title: "Core user flow",
          body:
            "Users register, create or reuse templates, run active workout sessions, log sets, complete or abandon sessions, and review history and recommendations.",
        },
        {
          title: "Mobile architecture",
          body:
            "The mobile layer uses Expo, React Native, TypeScript, TanStack Query, Zustand, SecureStore, Zod, and React Hook Form for typed data flow and ergonomic session state.",
        },
        {
          title: "Backend architecture",
          body:
            "FastAPI routes delegate to service classes, repositories isolate persistence logic, SQLAlchemy defines the relational schema, and Alembic manages migrations against PostgreSQL.",
        },
        {
          title: "Reliability and offline behavior",
          body:
            "Active workout drafts persist set details, input units, RPE, notes, set type, and rest timer timestamps. Queued mobile set logging and retry handling protect in-progress workouts from brittle network behavior.",
        },
        {
          title: "Idempotency design",
          body:
            "client_mutation_id values support idempotent set creation and backend reconciliation. Workout completion is also treated as an idempotent backend operation.",
        },
        {
          title: "Analytics and recommendation engine",
          body:
            "Forge includes working-set filtering, estimated one-rep-max calculations, bodyweight trends, previous-performance display, and rule-based progressive-overload recommendations.",
        },
        {
          title: "Testing and CI",
          body:
            "The repository includes backend and mobile tests, continuous integration, Docker-based PostgreSQL setup, seed data, documentation, and a Makefile.",
        },
        {
          title: "Next milestones",
          body:
            "Next work focuses on deeper analytics, richer recommendation quality, and continued reliability around active workout sessions.",
        },
      ],
    },
  },
  {
    slug: "llm-training-performance-lab",
    title: "LLM Training Performance Lab",
    status: "Reproducible benchmark lab",
    category: "ML systems performance",
    summary:
      "Optimized GPT-style Transformer training on an RTX 3060, increasing throughput by 3.02x while reducing peak GPU memory by approximately 52.4%.",
    problem:
      "Training-performance work requires more than final loss. The lab measures throughput, step latency, GPU memory, profiler traces, precision modes, and optimization tradeoffs on constrained consumer GPU hardware.",
    role:
      "Implemented the benchmark harness, configurable GPT-style Transformer, profiling scripts, experiment outputs, optimization matrix, and results documentation.",
    stack: [
      "Python",
      "PyTorch",
      "CUDA",
      "GPT-style Transformers",
      "BF16",
      "FP16",
      "SDPA",
      "PyTorch Profiler",
      "torch.compile",
      "WSL2",
    ],
    metrics: [
      { label: "Baseline throughput", value: "51.0K tok/s" },
      { label: "Optimized throughput", value: "154.2K tok/s" },
      { label: "Throughput lift", value: "3.02x" },
      { label: "Peak memory reduction", value: "52.4%" },
    ],
    highlights: [
      "Benchmarked FP32, TF32, SDPA, FP16, BF16, fused AdamW, and torch.compile configurations.",
      "Generated CSV and JSON artifacts with tokens/sec, step time, max memory, status, and environment disclosure.",
      "Documented Windows/Triton limitations and WSL2 validation instead of fabricating compiled Windows results.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mirathfan/llm-training-performance-lab",
      },
      { label: "Case study", href: "/projects/llm-training-performance-lab" },
    ],
    caseStudy: {
      overview:
        "This lab makes LLM training performance work reproducible on a consumer RTX 3060 Laptop GPU by combining controlled benchmark scripts, profiler traces, precision experiments, and documented tradeoffs.",
      sections: [
        {
          title: "Hardware constraints",
          body:
            "The primary constraint was useful GPT-style training measurement on local NVIDIA RTX 3060 Laptop GPU hardware rather than a large training cluster.",
        },
        {
          title: "Baseline",
          body:
            "The WSL2 gpt_small baseline measured 50,997.73 tokens/sec and 1,119.76 MB peak GPU memory with FP32 manual attention.",
        },
        {
          title: "Profiling methodology",
          body:
            "Runs captured average tokens/sec, step latency, GPU memory, warmup steps, benchmark steps, validation loss, perplexity, and profiler artifacts where appropriate.",
        },
        {
          title: "Optimizations tested",
          body:
            "The optimization matrix covered TF32, scaled dot-product attention, FP16, BF16, fused AdamW, and torch.compile under WSL2 after environment validation.",
        },
        {
          title: "Final results",
          body:
            "The best WSL2 result was BF16 + fused AdamW + torch.compile at 154,197.54 tokens/sec, 26.56 ms/step, 532.91 MB max GPU memory, and a 3.02x speedup.",
        },
        {
          title: "Tradeoffs",
          body:
            "Mixed precision reduced memory, but small-model throughput did not always improve. The lab documents where optimization helped and where framework overhead or environment support limited results.",
        },
        {
          title: "Reproducibility",
          body:
            "The repository includes training, evaluation, benchmark, profiling, configuration, result, CSV, and JSON artifacts for repeatable experiments.",
        },
        {
          title: "Future work",
          body:
            "Next steps include native Linux benchmarking, distributed data parallel tests, activation checkpointing comparison, custom CUDA kernels, and Nsight Systems profiling.",
        },
      ],
    },
  },
  {
    slug: "gpu-ai-performance-lab",
    title: "GPU AI Performance Lab",
    status: "Reproducible inference lab",
    category: "GPU inference performance",
    summary:
      "A hands-on inference optimization lab benchmarking PyTorch, ONNX Runtime, TensorRT, CUDA, and batch-scaling behavior on an NVIDIA RTX 3060 Laptop GPU.",
    problem:
      "AI applications need a practical understanding of latency, throughput, precision, export validation, and backend differences before models can be trusted in deployment workflows.",
    role:
      "Built benchmark scripts, ONNX export and validation flows, runtime comparisons, TensorRT Execution Provider experiments, report generation, and CUDA finance benchmarking.",
    stack: [
      "Python",
      "PyTorch",
      "ONNX Runtime",
      "TensorRT",
      "CUDA",
      "C++",
      "WSL2",
      "ResNet18",
      "YOLOv8n",
    ],
    metrics: [
      { label: "ResNet18 p50", value: "0.860 ms" },
      { label: "Batch-16 throughput", value: "3335 samples/s" },
      { label: "TensorRT lift", value: "+131.6%" },
      { label: "CUDA finance speedup", value: "7.25x" },
    ],
    highlights: [
      "Validated model output across PyTorch and ONNX Runtime with small expected CUDA numerical differences.",
      "Benchmarked FP32 and FP16 inference paths across dynamic batch sizes and GPU execution backends.",
      "Added a C++/CUDA Monte Carlo option-pricing benchmark to study GPU scaling outside vision inference.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mirathfan/gpu-ai-performance-lab",
      },
      { label: "Case study", href: "/projects/gpu-ai-performance-lab" },
    ],
    caseStudy: {
      overview:
        "The GPU AI Performance Lab compares inference and CUDA performance paths across real local GPU tooling and documents latency, throughput, validation, and backend tradeoffs.",
      sections: [
        {
          title: "Environment",
          body:
            "Benchmarks were run with an NVIDIA RTX 3060 Laptop GPU with 6 GB VRAM, WSL2 Ubuntu, CUDA, PyTorch, ONNX Runtime CUDA Execution Provider, and TensorRT Execution Provider paths.",
        },
        {
          title: "ResNet18 inference",
          body:
            "The lab exports ResNet18 to ONNX with dynamic batch support, validates ONNX output against PyTorch, and benchmarks FP32/FP16 paths across batch sizes.",
        },
        {
          title: "Model-output validation",
          body:
            "Output validation is part of the workflow, with maximum absolute differences treated as expected small CUDA numerical differences rather than ignored.",
        },
        {
          title: "TensorRT execution",
          body:
            "TensorRT EP FP16 improved ResNet18 batch-16 throughput by 131.6% versus PyTorch FP32 and improved batch-1 p50 latency versus ONNX Runtime CUDA FP32.",
        },
        {
          title: "CUDA finance module",
          body:
            "The repository also includes a C++/CUDA Monte Carlo option-pricing benchmark, reaching 7.25x speedup versus CPU at 10M simulated paths while documenting overhead at smaller workloads.",
        },
      ],
    },
  },
  {
    slug: "comma-video-compression-challenge",
    title: "Comma Video Compression Challenge",
    status: "Metric-aware compression experiment",
    category: "Machine perception systems",
    summary:
      "Developed and evaluated metric-aware video-compression approaches for machine-perception workloads, reducing the official evaluation score from 2.99 to 1.3546 while keeping the final archive below 1 MB.",
    problem:
      "The challenge rewards perception-aware compression rather than visual fidelity alone, so the work focused on model metrics, reproducible validation, and strict archive-size constraints.",
    role:
      "Developed baselines, evaluated variants, validated CPU evaluation behavior, tracked side-channel size, and documented metric tradeoffs.",
    stack: ["Python", "Video Compression", "Metric Evaluation", "PoseNet", "SegNet"],
    metrics: [
      { label: "Baseline score", value: "2.99" },
      { label: "Final score", value: "1.3546" },
      { label: "Archive size", value: "994,341 bytes" },
      { label: "Side channel", value: "4,808 bytes" },
    ],
    highlights: [
      "Established a reproducible baseline and iterated through validated compression variants.",
      "Reduced model-perception error while staying under the final archive-size limit.",
      "Documented an MPS sharp variant separately because its CPU evaluation path crashed.",
    ],
    links: [{ label: "Case study", href: "/projects/comma-video-compression-challenge" }],
    caseStudy: {
      overview:
        "This project explored video compression through the lens of downstream machine-perception metrics and strict payload constraints.",
      sections: [
        {
          title: "Baseline",
          body:
            "The baseline official evaluation score was 2.99 before compression and side-channel iterations.",
        },
        {
          title: "Metric-aware approach",
          body:
            "The work focused on reducing PoseNet and SegNet metric error while keeping the final archive under 1 MB.",
        },
        {
          title: "Final validation",
          body:
            "The CPU-validated final score was 1.3545992946, with a 994,341-byte archive, 0.00286877 PoseNet metric, and 0.00523134 SegNet metric.",
        },
        {
          title: "Documentation discipline",
          body:
            "The MPS sharp variant was documented separately because its CPU evaluation crashed, so it was not overstated as the final validated result.",
        },
      ],
    },
  },
];

export const additionalProjects: AdditionalProject[] = [
  {
    title: "EfficientFormer vs ResNet18",
    category: "Computer vision",
    summary:
      "Implemented and compared an EfficientFormer-L1-inspired hybrid CNN/Transformer architecture against ResNet18 on CIFAR-10.",
    stack: ["PyTorch", "Vision Transformers", "CNNs", "Quantization", "CIFAR-10"],
    metrics: [
      { label: "Test accuracy", value: "87%" },
      { label: "Inference time", value: "~25% lower" },
    ],
    highlights: [
      "Built modular training, validation, and evaluation pipelines.",
      "Used augmentation, tuning, and deployment-focused optimization.",
      "Benchmarked against a ResNet18 baseline for edge-oriented inference.",
    ],
    links: [],
  },
  {
    title: "KDD Network Intrusion Detection",
    category: "Security ML",
    summary:
      "Built an end-to-end ML pipeline for classifying malicious network traffic from KDD Cup 1999 records using ensemble models and explainability.",
    stack: ["R", "Python", "Random Forest", "XGBoost", "LightGBM", "SHAP", "SMOTE"],
    metrics: [
      { label: "Records", value: "494K+" },
      { label: "Accuracy", value: "99.94%" },
      { label: "Macro F1", value: "0.832" },
    ],
    highlights: [
      "Mapped 23 attack subtypes into 5 attack categories.",
      "Handled class imbalance with feature selection and SMOTE.",
      "Used SHAP to interpret high-impact traffic features.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/mirathfan/kdd-nids-pipeline" }],
  },
];

export const experiences: Experience[] = [
  {
    role: "Full-Stack AI Engineer / Founder",
    company: "AURA, KASAT Labs",
    dates: "October 2025 - Present",
    bullets: [
      "Designed and shipped an AI-powered mobile styling platform from concept through TestFlight distribution.",
      "Built the React Native application, Firebase backend, Cloud Functions, storage workflows, vector retrieval, recommendation engine, and LangGraph-based styling agent.",
      "Developed multimodal wardrobe ingestion, outfit recommendation cards, wardrobe intelligence, personalized shopping, style feedback, saved looks, and calendar wear tracking.",
      "Implemented privacy controls, account deletion, rate limiting, AI usage gating, quota controls, fallbacks, and error handling.",
      "Owned product design, backend architecture, AI orchestration, deployment, testing, and beta preparation as the sole engineer.",
    ],
  },
  {
    role: "Software Engineering Intern - Machine Learning",
    company: "Tech Mahindra",
    dates: "January 2023 - March 2023",
    bullets: [
      "Developed TensorFlow-based computer vision modules in Docker containers and used Jupyter for model experimentation.",
      "Built preprocessing and evaluation workflows that helped standardize model benchmarking on sample images.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frontend and mobile",
    skills: ["React", "React Native", "Expo", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend and data",
    skills: ["FastAPI", "Node.js", "Firebase", "PostgreSQL", "SQLAlchemy", "Alembic"],
  },
  {
    title: "Applied AI",
    skills: [
      "OpenAI APIs",
      "LangGraph",
      "Embeddings",
      "Vector search",
      "Retrieval pipelines",
      "Recommendation systems",
      "Multimodal AI workflows",
    ],
  },
  {
    title: "ML systems",
    skills: [
      "PyTorch",
      "ONNX Runtime",
      "CUDA",
      "TensorRT",
      "Mixed precision",
      "Model profiling",
      "Performance benchmarking",
    ],
  },
  {
    title: "Infrastructure and quality",
    skills: ["Docker", "GitHub Actions", "Pytest", "CI/CD", "EAS", "Vercel", "Git"],
  },
];

export const education = [
  {
    school: "Illinois Institute of Technology",
    degree:
      "Master of Applied Science, Computer Science - Specialization in Artificial Intelligence",
    location: "Chicago, Illinois",
    dates: "August 2024 - May 2026",
  },
  {
    school: "Dayanand Sagar University",
    degree: "Bachelor of Technology, Computer Science",
    location: "Bengaluru, India",
    dates: "August 2019 - May 2023",
  },
];

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}
