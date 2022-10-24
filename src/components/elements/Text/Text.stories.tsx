import { Text } from "./Text";
import { Story, StoryObj, Meta} from '@storybook/react';
import {TextArgsModel} from "./Text.model"

export default {
  title: "Components/Elements/Text",
  component: Text,
  argTypes: {
    size:{
      options: ['sm', 'md', 'lg'],
      control:{
        type:'inline-radio'
      }
    }
  }
} as Meta<TextArgsModel>;

const Template:Story<TextArgsModel> = ({ ...args }) => (
  <Text {...args}></Text>
);

export const Default: StoryObj<TextArgsModel> = {
  render: Template.bind({}),
  name: 'text',
  args: {
    label:'Esse é um texto de teste'
  },
};

export const Small: StoryObj<TextArgsModel> = {
  render: Template.bind({}),
  name: 'text',
  args: {
    label:'Esse é um texto de teste',
    size:'sm'
  },
};

export const Large: StoryObj<TextArgsModel> = {
  render: Template.bind({}),
  name: 'text',
  args: {
    label:'Esse é um texto de teste',
    size:'lg'
  },
};