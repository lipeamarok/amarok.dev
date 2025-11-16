import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      slug: "ghost-wallet-hunter",
      titleImage: "/projects/ghost-wallet-hunter/logo-ghost-hunter_3.png",
      titleImageWidth: 250,
      titleImageHeight: 55,
      imagePlaceholder: "Ghost Wallet Hunter — Demo / Preview",
      description:
        "Forensic intelligence system for Solana wallets powered by seven specialized detective agents. Built in Julia for real-time detection of exploits, fraud patterns and coordinated network behavior.",
      stack: "Julia · Oxygen.jl · Solana RPC · React · Vite · Tailwind · Three.js",
    },
    {
      slug: "aisyad",
      titleImage: "/projects/aisyad/logo-3.png",
      titleImageWidth: 450,
      titleImageHeight: 75,
      imagePlaceholder: "Aisyad — Demo / Preview",
      description:
        "SaaS platform for automating Meta Ads campaigns. Create, optimize and manage ads with AI-driven diagnostics, real-time insights and full OAuth2 integration with Facebook Ads.",
      stack:
        "FastAPI · Python · PostgreSQL · JWT · OAuth2 · Next.js · TypeScript · Zustand · Tailwind",
    },
    {
      slug: "bugxhunter",
      titleImage: "/projects/bugxhunter/logo_bug.png",
      titleImageWidth: 220,
      titleImageHeight: 30,
      imagePlaceholder: "BugHunter — Demo / Preview",
      description:
        "Autonomous bug hunting system with simulated environments, intelligent orchestration and continuous learning. Powered by Julia for high-performance analysis and Rust/Tauri for secure system operations.",
      stack: "Julia · Rust · Tauri · React · Docker · AI/ML · SQLite/Postgres",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-[#0e0e10] via-[#151517] to-[#1d1d1f] text-gray-200 p-10 pt-12">
      <div className="max-w-6xl w-full">
        {/* Título da página */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-7">
          Featured Projects
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <Link
              key={i}
              href={`/projects/${project.slug}`}
              className="block rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10
                         shadow-xl transition-all duration-300 cursor-pointer group
                         flex flex-col h-[520px] overflow-hidden
                         hover:scale-[1.03]
                         hover:shadow-[0_20px_60px_-15px_rgba(91,159,227,0.4)]
                         hover:border-[#5B9FE3]/40
                         hover:bg-white/8"
            >
              {/* Placeholder DEMO */}
              <div
                className="h-40 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#8e6bff30] to-[#b79aff20] border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 text-center px-4
                              group-hover:from-[#5B9FE3]/20 group-hover:to-[#5B9FE3]/10 group-hover:border-[#5B9FE3]/30 group-hover:text-gray-300"
              >
                <span className="text-sm">{project.imagePlaceholder}</span>
              </div>

              {/* Título + Logo */}
              <div className="mt-8 flex items-center justify-center gap-4 relative h-16 flex-shrink-0">
                {project.titleImage ? (
                  <>
                    <Image
                      src={project.titleImage}
                      alt="Project Title"
                      width={project.titleImageWidth || 300}
                      height={project.titleImageHeight || 90}
                      className="object-contain"
                    />
                    {project.animatedLogo && (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-[120px] h-[120px] object-contain absolute -left-24 opacity-70"
                      >
                        <source src={project.animatedLogo} type="video/mp4" />
                      </video>
                    )}
                  </>
                ) : (
                  <>
                    {project.logo && (
                      <Image
                        src={project.logo}
                        alt={`${project.title} Logo`}
                        width={170}
                        height={170}
                        className="object-contain absolute -left-20 animate-pulse-opacity"
                      />
                    )}

                    <h2 className="text-2xl font-semibold text-white group-hover:text-purple-200 transition tracking-tight">
                      {project.title}
                    </h2>
                  </>
                )}
              </div>

              {/* Descrição */}
              <p className="mt-4 text-gray-400 text-sm leading-relaxed text-center flex-grow px-1">
                {project.description}
              </p>

              {/* Stack */}
              <p className="mt-6 text-xs text-gray-500 text-center tracking-wide flex-shrink-0">
                Stack: <span className="text-gray-300">{project.stack}</span>
              </p>
            </Link>
          ))}
        </div>

        {/* LINK "who is amarok?" */}
        <div className="mt-6 text-center">
          <a
            href="/about"
            className="text-gray-400 hover:text-purple-300 transition-all duration-200 text-sm tracking-wide underline underline-offset-4 decoration-purple-400/30 hover:decoration-purple-400"
          >
            who is amarok?
          </a>
        </div>
      </div>
    </main>
  );
}
