import { Login } from "./components/interfaces/compositions/Login/Login";
import "./styles/global.css";

export const App = () => {
  return (
    <div>
      <Login
        InputEmail={{
          label: "Email",
          id: "email",
          placeholder: "Type",
          type: "email",
          value: "email",
        }}
        InputPassword={{
          label: "Password",
          id: "password",
          placeholder: "Type your password...",
          type: "password",
          value: "password",
        }}
        ButtonPrimary={{
          label: "Entrar",
          variant: "primary",
          labelSize: "sm",
          type: "submit",
        }}
      ></Login>
    </div>
  );
};
