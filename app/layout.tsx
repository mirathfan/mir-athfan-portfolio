import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mir Athfan Ali | Full-Stack AI Engineer",
  description:
    "Mir Athfan Ali is a Full-Stack AI Engineer building mobile applications, AI agents, retrieval systems, production backends, and ML performance tooling.",
  keywords: [
    "Mir Athfan Ali",
    "Full-Stack AI Engineer",
    "Software Engineer",
    "AI Application Developer",
    "GenAI Developer",
    "React Native",
    "Next.js",
    "Node.js",
    "Python",
    "OpenAI",
    "LangGraph",
    "Vector Search",
  ],
  authors: [{ name: "Mir Athfan Ali" }],
  creator: "Mir Athfan Ali",
  openGraph: {
    title: "Mir Athfan Ali | Full-Stack AI Engineer",
    description:
      "Portfolio featuring AURA, Forge, LLM training performance work, GPU inference benchmarking, and full-stack AI engineering projects.",
    type: "website",
    images: [{ url: "/og-image.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mir Athfan Ali | Full-Stack AI Engineer",
    description:
      "I build real AI products end-to-end across mobile, backend, AI agents, vector search, and recommendation systems.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
