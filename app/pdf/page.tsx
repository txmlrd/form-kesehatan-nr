"use client";
import { PdfGenerator } from "@/components/PdfGenerator";
import { PDFViewer } from "@react-pdf/renderer";
import { useFormStore } from "@/store/formStore";

export default function PreviewPage() {
  const { formData, orangList } = useFormStore();

  return (
    <PDFViewer width="100%" height="800">
      <PdfGenerator data={{ ...formData, orangList }} />
    </PDFViewer>
  );
}
