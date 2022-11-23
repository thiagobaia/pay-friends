import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonArgsModel extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'outline' ;
  label: string;
  labelSize: "sm" | "md" | "lg";
  children?: ReactNode;
}
