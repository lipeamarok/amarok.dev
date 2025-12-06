"use client";

import { useRouter } from "next/navigation";

function AmarokDevpage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-[#0e0e10] via-[#151517] to-[#1d1d1f] text-gray-200 p-10 pt-12">
      <div className="max-w-4xl w-full">
        {/* Mensagem "Coming Soon" */}
        <div className="text-center mb-10">
          <p className="text-gray-400 text-xl">Full project details coming soon</p>
        </div>

        {/* Demo em Vídeo */}
        <div className="rounded-2xl overflow-hidden border border-white/10 mb-10 shadow-2xl max-w-3xl mx-auto">
          <video
            src="/projects/amarok-dev/trailer.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>

        {/* Botão Voltar Centralizado */}
        <div className="flex justify-center">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#5B9FE3] hover:bg-[#4A8ED2] text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </button>
        </div>
      </div>
    </main>
  );
}

export default AmarokDevpage;
