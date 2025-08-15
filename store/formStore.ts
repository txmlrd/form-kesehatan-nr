import { create } from "zustand";

interface Orang {
  nama: string;
}

interface FormData {
  tamu: string;
  kegiatan: string;
  tanggalSurat: Date | string; // Use Date for date objects, or string for formatted dates
}

interface FormState {
  formData: FormData;
  orangList: Orang[];
  allData: FormData & { orangList: Orang[] };
  setFormData: (data: Partial<FormData>) => void;
  addOrang: () => void;
  updateOrang: (index: number, field: keyof Orang, value: string) => void;
  removeOrang: (index: number) => void;
  saveAllData: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  allData: {
    tamu: "",
    kegiatan: "",
    tanggalSurat: "",
    orangList: [
      {
        nama: "",
        statusKelaikan: "",
        statusDerajat: "",
      },
    ],
  },
  formData: {
    tamu: "",
    kegiatan: "",
    tanggalSurat: "",
  },
  orangList: [{ nama: "", statusKelaikan: "", statusDerajat: "" }],

  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  addOrang: () =>
    set((state) => ({
      orangList: [...state.orangList, { nama: "", statusKelaikan: "", statusDerajat: "" }],
    })),

  updateOrang: (index, field, value) =>
    set((state) => {
      const updated = [...state.orangList];
      updated[index][field] = value;
      return { orangList: updated };
    }),

  removeOrang: (index) =>
    set((state) => ({
      orangList: state.orangList.filter((_, i) => i !== index),
    })),

  saveAllData: () =>
    set((state) => ({
      allData: {
        ...state.formData,
        orangList: state.orangList,
      },
    })),
}));
