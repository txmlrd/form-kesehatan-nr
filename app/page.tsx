"use client";
import TextForm from "@/components/form/TextForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";
import { CalendarForm } from "@/components/form/DateForm";
import { Dropdown } from "@/components/form/Dropdown";
import FormTabel from "@/components/tabel/FormTabel";

export default function Home() {
  const [formData, setFormData] = useState({
    tamu: "",
    kegiatan: "",
    nama: "",
    statusDerajat: "",
    statusKelaikan: "",
    tanggalSurat: "",
  });
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-10">
      <div className="flex flex-col items-center mb-10">
        <Image src="/logo.webp" alt="Description" width={500} height={500} />
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold mb-4">Form Surat Keterangan Pemerikasaan Kesehatan</h1>
            <TextForm label="Tamu/Kontraktor" placeholder="Ketik tamu/kontraktor" required value={formData.tamu} onChange={(e) => setFormData({ ...formData, tamu: e.target.value })} />
            <TextForm label="Kegiatan" placeholder="Ketik nama kegiatan" required value={formData.kegiatan} onChange={(e) => setFormData({ ...formData, kegiatan: e.target.value })} />
            <div className="bg-gray-200">
              <FormTabel />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4">Preview</h1>
          </div>
        </div>

        <Button>Submit</Button>
      </div>
    </div>
  );
}
