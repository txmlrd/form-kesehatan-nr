import React from "react";
import TextForm from "@/components/form/TextForm";

import { Dropdown } from "@/components/form/Dropdown";
import { Button } from "@/components/ui/button";

interface Person {
  nama: string;
  statusDerajat: string;
  statusKelaikan: string;
  tanggal: Date | undefined;
}

interface FormTabelProps {
  orangList: Person[];
  onChangeRow: (index: number, field: keyof Person, value: string) => void;
  onAddRow: () => void;
  onRemoveRow: (index: number) => void;
}

const FormTabel: React.FC<FormTabelProps> = ({ orangList, onChangeRow, onAddRow, onRemoveRow }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Header + tombol tambah */}
      <div className="flex gap-2 items-center">
        <h2 className="font-bold ">Daftar Orang</h2>
        <Button type="button" size="sm" onClick={onAddRow} className="cursor-pointer">
          + Tambah Baris
        </Button>
      </div>

      {/* Form horizontal */}
      <div className="flex flex-row flex-wrap gap-5 pb-2">
        {orangList.map((orang, index) => (
          <div key={index} className="p-4 border rounded-md bg-white flex flex-col gap-3 w-64 min-w-[16rem]">
            <TextForm label="Nama (dalam tabel)" placeholder="Ketik nama" required value={orang.nama} onChange={(e) => onChangeRow(index, "nama", e.target.value)} />

            <Dropdown value={orang.statusDerajat} onChange={(value: string) => onChangeRow(index, "statusDerajat", value)} />

            <TextForm label="Status Kelaikan Kerja (dalam tabel)" placeholder="Ketik status kelaikan kerja" required value={orang.statusKelaikan} onChange={(e) => onChangeRow(index, "statusKelaikan", e.target.value)} />

            <Button type="button" variant="destructive" size="sm" className="cursor-pointer" onClick={() => onRemoveRow(index)}>
              Hapus
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormTabel;
