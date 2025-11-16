"use client";

export const generateCV = async (lang = "pt") => {
  try {
    // Importação dinâmica para evitar SSR
    const { pdf } = await import("@react-pdf/renderer");
    const { saveAs } = await import("file-saver");
    const CVDocument = (await import("../components/cv/CVDocument")).default;

    const blob = await pdf(<CVDocument lang={lang} />).toBlob();
    const fileName =
      lang === "pt" ? "Filipe_Arouck_CV_PT.pdf" : "Filipe_Arouck_CV_EN.pdf";

    saveAs(blob, fileName);
  } catch (error) {
    console.error("Error generating CV:", error);
    throw error;
  }
};
