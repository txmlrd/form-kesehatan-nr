import React from "react";
import TextForm from "@/components/form/TextForm";
import { CalendarForm } from "@/components/form/DateForm";
import { Dropdown } from "@/components/form/Dropdown";

const FormTabel = () => {
  return (
    <div>
      <TextForm label="Nama (dalam tabel)" placeholder="Ketik nama" required />
      <Dropdown />
      <TextForm label="Status Kelaikan Kerja (dalam tabel)" placeholder="Ketik status kelaikan kerja" required />
      <CalendarForm />
    </div>
  );
};

export default FormTabel;
