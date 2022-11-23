import { ButtonArgsModel } from "./Button.model";
import { clsx } from "clsx";
import { Text } from "../Text/Text";

export const Button = ({
  label,
  variant,
  labelSize,
  children,
  ...props
}: ButtonArgsModel) => {
  return (
    <button
      className={clsx(
        "outline-none p-3 rounded-md w-full disabled:opacity-50",
        {
          "bg-blue-300": variant === "primary",
          "bg-gray-100": variant === "outline",
        }
      )}
      {...props}
    >
      <Text size={labelSize} label={label} variantUppercase={variant}></Text>
      {children}
    </button>
  );
};
