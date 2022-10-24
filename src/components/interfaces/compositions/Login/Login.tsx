import { clsx } from "clsx";
import { LoginArgsModel } from "./Login.model";
import { Input } from "../../../elements/Input/Input";
import { Button } from "../../../elements/Button/Button";

export const Login = ({
  InputEmail,
  InputUser,
  ButtonPrimary,
}: LoginArgsModel) => {
  return (
    <div className="w-full flex justify-center">
      <form className="w-80 flex gap-y-6 flex-col">
        <Input
          label={InputEmail.label}
          type={InputEmail.type}
          placeholder={InputEmail.placeholder}
        ></Input>
        <Input
          label={InputUser.label}
          type={InputUser.type}
          placeholder={InputUser.placeholder}
        ></Input>
        <Button
          label={ButtonPrimary.label}
          variant={ButtonPrimary.variant}
          labelSize={ButtonPrimary.labelSize}
        ></Button>
      </form>
    </div>
  );
};
