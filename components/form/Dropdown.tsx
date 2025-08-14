"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "../ui/label";

const statusDerajat = [
  {
    value: "p1",
    label: "P1 Tidak ditemukan kelainan medis",
  },
  {
    value: "p2",
    label: "P2 Ditemukan kelainan medis yang tidak serius",
  },
  {
    value: "p3",
    label: "P3 Ditemukan kelainan medis, risiko kesehatan rendah",
  },
  {
    value: "p4",
    label: "P4 Ditemukan kelainan medis bermakna yang dapat menjadi serius, risiko kesehatan sedang",
  },
  {
    value: "p5",
    label: "P5 Ditemukan kelaianan medis yang serius, risiko kesehatan tinggi",
  },
  {
    value: "p6",
    label: "P6 Ditemukan kelainan medis yang menyebabkan keterbatasan fisik maupun psikis untuk melakukan pekerjaan sesuai jabatan/posisinya",
  },
  {
    value: "p7",
    label: "P7 Tidak dapat bekerja untuk melakukan pekerjaan sesuai jabatan/posisinya dan/atau posisi apapun , dalam perawatan di rumah sakit, atau dalam status izin sakit",
  },
];

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export function Dropdown({ value, onChange }: DropdownProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Label>Status Derajat Kesehatan (dalam tabel)</Label>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="justify-between overflow-hidden">
          {value ? statusDerajat.find((statusDerajat) => statusDerajat.value === value)?.label : "Pilih status derajat"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 overflow-hidden">
        <Command>
          <CommandInput placeholder="Cari status" className="h-9 " />
          <CommandList>
            <CommandEmpty>Status tidak ditemukan.</CommandEmpty>
            <CommandGroup>
              {statusDerajat.map((statusDerajat) => (
                <CommandItem
                  key={statusDerajat.value}
                  value={statusDerajat.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {statusDerajat.label}
                  <Check className={cn("ml-auto text-green-500", value === statusDerajat.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
