import { TextArgsModel } from "./Text.model";
import { clsx } from "clsx";

export const Text = ({
  label,
  variantUppercase,
  size = "md",
}: TextArgsModel) => {
  return (
    <div>
      <p
        className={clsx("text-gray-400 font-sans", {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-md": size === "lg",

          "text-white-100 uppercase font-semibold":
            variantUppercase === "primary",
          "text-gray-800 uppercase font-semibold":
            variantUppercase === "outline",
        })}
      >
        {label}
      </p>
    </div>
  );
};
