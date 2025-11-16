"use client";

import { useState, useEffect } from "react";

export default function CVPreviewPage() {
  const [lang, setLang] = useState("pt");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generatePreview = async () => {
      try {
        setLoading(true);
        setError(null);

        // Importação dinâmica para evitar SSR
        const { pdf } = await import("@react-pdf/renderer");
        const CVDocument = (await import("../components/cv/CVDocument")).default;

        // Gera o PDF como blob
        const blob = await pdf(<CVDocument lang={lang} />).toBlob();

        // Cria URL do blob para o iframe
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        setLoading(false);
      } catch (err) {
        console.error("Error generating PDF preview:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    generatePreview();

    // Cleanup: revoga a URL do blob quando o componente é desmontado ou lang muda
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [lang]); // Regenera quando o idioma muda

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0e10] via-[#151517] to-[#1d1d1f]">
      {/* Header Controls */}
      <div className="sticky top-0 z-50 bg-[#0e0e10]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/about"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Voltar
            </a>
            <h1 className="text-xl font-bold text-white">CV Preview</h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              disabled={loading}
            >
              <span
                className={`text-xs font-medium transition-colors ${
                  lang === "pt" ? "text-[#5B9FE3]" : "text-gray-500"
                }`}
              >
                PT
              </span>
              <span className="text-gray-600">/</span>
              <span
                className={`text-xs font-medium transition-colors ${
                  lang === "en" ? "text-[#5B9FE3]" : "text-gray-500"
                }`}
              >
                EN
              </span>
            </button>

            <div className="text-xs text-gray-500 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
              {loading ? "Gerando..." : "Preview em tempo real"}
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview */}
      <div className="w-full h-[calc(100vh-73px)] flex items-center justify-center">
        {loading && (
          <div className="text-gray-400 flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5B9FE3]"></div>
            <p>Gerando preview do CV...</p>
          </div>
        )}

        {error && (
          <div className="text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-6 max-w-md">
            <h3 className="font-semibold mb-2">Erro ao gerar preview</h3>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {pdfUrl && !loading && !error && (
          <iframe src={pdfUrl} className="w-full h-full border-0" title="CV Preview" />
        )}
      </div>
    </div>
  );
}
