"use client";
import TextForm from "@/components/form/TextForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FormTabel from "@/components/tabel/FormTabel";
import { CalendarForm } from "@/components/form/DateForm";
import { useFormStore } from "@/store/formStore";
import DebugZustand from "@/store/DebugZustand";
import { useRouter } from "next/navigation";
import { ConfirmAlertDialog } from "../components/modal/ConfirmAlertModal";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const { formData, setFormData, orangList, addOrang, updateOrang, removeOrang, saveAllData } = useFormStore();
  const handleSubmit = () => {
    saveAllData();
    console.log("Data final:", useFormStore.getState().allData);
    router.push("/pdf");
  };
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100 p-10">
      <div className="flex flex-col items-center mb-10 w-full p-10">
        <Image src="/logo.png" alt="Description" width={200} height={500} />
        <div className="flex flex-col gap-5 w-full ">
          <h1 className="text-2xl font-bold mb-4">Form Surat Keterangan Pemerikasaan Kesehatan</h1>

          <TextForm label="Tamu/Kontraktor" placeholder="Ketik tamu/kontraktor" required value={formData.tamu} onChange={(e) => setFormData({ ...formData, tamu: e.target.value })} />

          <TextForm label="Kegiatan" placeholder="Ketik nama kegiatan" required value={formData.kegiatan} onChange={(e) => setFormData({ ...formData, kegiatan: e.target.value })} />

          <div className="w-full">
            <FormTabel orangList={orangList} onChangeRow={updateOrang} onAddRow={addOrang} onRemoveRow={removeOrang} />
          </div>
          <CalendarForm date={formData.tanggalSurat} onChange={(date) => setFormData({ ...formData, tanggalSurat: date })} />
        </div>

        <Button onClick={() => setOpenModal(true)} className="mt-4">
          Submit
        </Button>

        <ConfirmAlertDialog
          open={openModal}
          onOpenChange={setOpenModal}
          onConfirm={() => {
            handleSubmit();
            setOpenModal(false);
          }}
        />
        <DebugZustand />
      </div>
    </div>
  );
}
