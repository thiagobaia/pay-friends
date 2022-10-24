import { Button } from "./Button";
import { Story, StoryObj, Meta} from '@storybook/react';
import {ButtonArgsModel} from "./Button.model"

export default {
  title: "Components/Elements/Button",
  component: Text,

};

const Template:Story<ButtonArgsModel> = ({ ...args }) => (
  <Button {...args}/>
);

export const ButtonPrimary: StoryObj<ButtonArgsModel> = {
  render: Template.bind({}),
  name: 'Button Primary',
  args: {
    label: 'Entrar',  
    variant: 'primary',
    labelSize: 'sm'
  },
};

export const ButtonOutline: StoryObj<ButtonArgsModel> = {
  render: Template.bind({}),
  name: 'Button Outline',
  args: {
    label: 'cancelar',
    variant: 'outline',
    labelSize: 'sm'
  },
};




