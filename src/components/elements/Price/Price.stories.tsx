import { Price } from "./Price";
import { Story, StoryObj} from '@storybook/react';
import {PriceModel} from "./Price.model"

export default {
  title: "Components/Elements/Price",
  component: Price,
};

const Template:Story<PriceModel> = ({ ...args }) => (
  <Price {...args}/>
);

export const Default: StoryObj<PriceModel> = {
  render: Template.bind({}),
  name: 'Price',
  args: {
  value: 100,
  oldValue: 150,
  pixDiscount: 5
  },
};






