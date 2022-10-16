import { TextArgsModel } from "./Text.model";
import { clsx } from "clsx";

export const Text = ({ label, size = "md" }: TextArgsModel) => {
  return (
    <div>
      <h1
        className={clsx(
          "text-gray-400 font-sans", 
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-md": size === "lg",
        }
        )}
      >
        {label}
      </h1>
    </div>
  );
};
