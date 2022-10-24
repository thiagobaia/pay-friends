import { InputArgsModel } from "./Input.model";
import { clsx } from "clsx";

export const Input = ({
  placeholder,
  type,
  label,
  helperText,
  error = false,
}: InputArgsModel) => {
  return (
    <div>
      <p className="text-gray-100 first-letter:capitalize ml-1 mb-2 font-sans font-semibold">{label}</p>
      <input
        className={clsx("outline-none p-3 rounded-md w-full font-sans", {
          "border-red-400 border-solid border-2": error === true,
        })}
        placeholder={placeholder}
        type={type}
      />
      <p className="text-red-400 first-letter:capitalize ml-1 mt-2 font-sans font-medium">{helperText}</p>
    </div>
  );
};
