import { Header } from "./Header";
import { Story, StoryObj } from "@storybook/react";
import { HeaderModel } from "./Header.model";

export default {
  title: "Components/Compositions/Header",
  component: Header,
};

const Template: Story<HeaderModel> = ({ ...args }) => (
  <Header {...args} />
);

export const Default: StoryObj<HeaderModel> = {
  render: Template.bind({}),
  name: "Header",
  args: {
   
  },
};
