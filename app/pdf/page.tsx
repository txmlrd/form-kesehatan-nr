"use client";
import { PdfGenerator } from "@/components/PdfGenerator";
import { PDFViewer } from "@react-pdf/renderer";
import { useFormStore } from "@/store/formStore";

export default function TestPDF() {
  const { allData } = useFormStore();
  const dummyData = {
    tamu: "Budi Santoso",
    kegiatan: "Pemeriksaan Kesehatan Tahunan",
    tanggalSurat: "14 Agustus 2025",
    orangList: [
      {
        nama: "Andi Pratama",
        statusDerajat: "P1",
        statusKelaikan: "Laik Kerja",
      },
      {
        nama: "Siti Aminah",
        statusDerajat: "P3",
        statusKelaikan: "Laik Kerja dengan Catatan",
      },
      {
        nama: "Joko Widodo",
        statusDerajat: "P5",
        statusKelaikan: "Tidak Laik Kerja",
      },
    ],
  };

  return (
    <PDFViewer width="100%" height="1100">
      <PdfGenerator data={allData} />
    </PDFViewer>
  );
}
