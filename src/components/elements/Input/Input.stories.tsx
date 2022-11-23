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
    label:'Email',
    placeholder: 'Type your email...',
  },
};

export const InputUser: StoryObj<InputArgsModel> = {
  render: Template.bind({}),
  name: 'Input / password',
  args: {
    label:'Password',
    placeholder: 'Type your password...',
  },
};




