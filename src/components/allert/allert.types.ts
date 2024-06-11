import { HTMLAttributes } from "react";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "primary" | "success" | "warning" | "danger";
    classname?: string;
    title: string;
    label: string;
  }
  