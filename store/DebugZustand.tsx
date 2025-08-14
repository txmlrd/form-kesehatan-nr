"use client";
import { useFormStore } from "@/store/formStore";

export default function DebugZustand() {
  const { formData, orangList } = useFormStore();

  console.log("Form Data:", formData);
  console.log("Orang List:", orangList);

  return <div>Debug Console: Cek di console browser</div>;
}
