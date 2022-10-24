import { Login } from "./Login";
import { Story, StoryObj, Meta } from "@storybook/react";
import { LoginArgsModel } from "./Login.model";

export default {
  title: "Components/Compositions/Login",
  component: Login,
};

const Template: Story<LoginArgsModel> = ({ ...args }) => <Login {...args} />;

export const Default: StoryObj<LoginArgsModel> = {
  render: Template.bind({}),
  name: "Login",
  args: {
    InputEmail: {
      placeholder: "Digite seu e-mail...",
      type: "email",
      label: "e-mail",
    },
    InputUser: {
      placeholder: "Digite sua senha...",
      type: "password",
      label: "Senha",
    },
    ButtonPrimary: {
      label: "Entrar",
      variant: "primary",
      labelSize: "sm",
    },
  },
};
