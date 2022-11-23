import { InputArgsModel } from "./Input.model";
import { clsx } from "clsx";

export const Input = ({
  label,
  id,
  type = "text",
  name,
  placeholder,
  disabled = false,
  error,
  value,
  helperText,
  onChange,
}: InputArgsModel) => {
  return (
    <div>
      <p className="text-gray-100 first-letter:capitalize ml-1 mb-2 font-sans font-semibold">
        {label}
      </p>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={clsx(
          "outline-none p-3 rounded-md w-full font-sans placeholder:italic placeholder:text-slate-400 sm:text-sm",
          {
            "border-red-400 border-solid border-2": error == true,
            "border-none": error == false,
          }
        )}
      ></input>
      <p className="text-red-400 first-letter:capitalize ml-1 mt-2 font-sans font-medium">
        {helperText}
      </p>
    </div>
  );
};
