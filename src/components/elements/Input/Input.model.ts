import { InputHTMLAttributes, ReactNode } from "react";

export interface InputArgsModel extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  id: string;
  type?: string;
  name?: string;
  placeholder: string;
  width?: string;
  disabled?: boolean;
  value: string | number | undefined;
  onChange?: (e: any) => void;
  error?: boolean;
  helperText?: string;
}
