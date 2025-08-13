import React from "react";
import clsx from "clsx";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface TextFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

const TextForm: React.FC<TextFormProps> = ({ label, className, required, ...props }) => {
  return (
    <div className={clsx("grid w-full max-w-sm items-center gap-3", className)}>
      <Label>
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Input {...props} />
    </div>
  );
};

export default TextForm;
