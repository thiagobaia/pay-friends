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
    ButtonPrimary: {
      label: "Entrar",
      variant: "primary",
      labelSize: "sm",
    },
    InputEmail: {
      label:'Email',
      id:'email',
      placeholder: 'Type your email...',
      type:'email',
      value:'email'
    },
    InputPassword:{
      label:'Password',
      id:'password',
      placeholder: 'Type your password...',
      type:'password',
      value:'password'
    }
  },
};
