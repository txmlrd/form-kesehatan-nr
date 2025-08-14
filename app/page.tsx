"use client";
import TextForm from "@/components/form/TextForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import FormTabel from "@/components/tabel/FormTabel";
import { CalendarForm } from "@/components/form/DateForm";
import { useFormStore } from "@/store/formStore";
import DebugZustand from "@/store/DebugZustand";

export default function Home() {
  const { formData, setFormData, orangList, addOrang, updateOrang, removeOrang } = useFormStore();

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100 p-10">
      <div className="flex flex-col items-center mb-10 w-full p-10">
        <Image src="/logo.webp" alt="Description" width={200} height={500} />
        <div className="flex flex-row gap-5 w-full">
          <div className="flex flex-col gap-5 w-1/2">
            <h1 className="text-2xl font-bold mb-4">Form Surat Keterangan Pemerikasaan Kesehatan</h1>

            <TextForm label="Tamu/Kontraktor" placeholder="Ketik tamu/kontraktor" required value={formData.tamu} onChange={(e) => setFormData({ ...formData, tamu: e.target.value })} />

            <TextForm label="Kegiatan" placeholder="Ketik nama kegiatan" required value={formData.kegiatan} onChange={(e) => setFormData({ ...formData, kegiatan: e.target.value })} />

            <div className="w-fit overflow-x-scroll flex-wrap">
              <FormTabel orangList={orangList} onChangeRow={updateOrang} onAddRow={addOrang} onRemoveRow={removeOrang} />
            </div>
            <CalendarForm date={formData.tanggalSurat} onChange={(date) => setFormData({ ...formData, tanggalSurat: date })} />
          </div>

          <div className="w-1/2">
            <h1 className="text-2xl font-bold mb-4">Preview</h1>
          </div>
        </div>

        <Button className="mt-4">Submit</Button>
        <DebugZustand />
      </div>
    </div>
  );
}
