export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#0e0e10] via-[#151517] to-[#1d1d1f] text-gray-200 relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#6e4aff20,_transparent_70%)] blur-[120px] pointer-events-none" />

      {/* Card central */}
      <div className="relative z-10 flex flex-col items-center p-14 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl w-[90%] max-w-3xl">
        {/* Título AMAROK + .dev */}
        <div className="flex items-center justify-center gap-4 whitespace-nowrap">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white select-none">
            A M A R O K
          </h1>

          <span className="text-lg md:text-xl bg-white/10 px-3 py-[0.15rem] rounded-md tracking-widest text-gray-300 select-none leading-none relative top-[0.2rem]">
            .dev
          </span>
        </div>

        {/* Subtexto */}
        <p className="mt-10 text-center text-xl md:text-2xl text-gray-300">
          Building something extraordinary...
        </p>

        <p className="mt-1 text-[#b79aff] text-sm md:text-base animate-pulse">
          Under construction
        </p>

        {/* Progress bar */}
        <div className="relative mt-10 h-1.5 w-72 overflow-hidden rounded-full bg-gray-800">
          <div className="absolute h-full w-1/2 bg-gradient-to-r from-[#b79aff] via-[#8e6bff] to-[#b79aff] animate-progress"></div>
        </div>
      </div>
    </main>
  );
}
