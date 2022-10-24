import { Input } from "./Input";
import { Story, StoryObj, Meta} from '@storybook/react';
import {InputArgsModel} from "./Input.model"

export default {
  title: "Components/Elements/Input",
  component: Text,

};

const Template:Story<InputArgsModel> = ({ ...args }) => (
  <Input {...args}/>
);

export const InputEmail: StoryObj<InputArgsModel> = {
  render: Template.bind({}),
  name: 'Input / email',
  args: {
    placeholder:'Digite seu e-mail...',
    type: 'email',
    label: 'e-mail',
  },
};

export const InputUser: StoryObj<InputArgsModel> = {
  render: Template.bind({}),
  name: 'Input / usuário',
  args: {
    placeholder:'Digite sua senha...',
    type: 'password',
    label: 'Senha',
  },
};




