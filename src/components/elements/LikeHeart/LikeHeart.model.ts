import { ButtonHTMLAttributes, ReactNode } from "react";

export interface LikeHeartModel extends ButtonHTMLAttributes<HTMLButtonElement> {
    active: boolean;
    children?: ReactNode;
}
