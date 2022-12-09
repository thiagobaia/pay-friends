import { LikeHeart } from "./LikeHeart";
import { Story, StoryObj} from '@storybook/react';
import {LikeHeartModel} from "./LikeHeart.model"

export default {
  title: "Components/Elements/Like Heart",
  component: LikeHeart,
};

const Template:Story<LikeHeartModel> = ({ ...args }) => (
  <LikeHeart {...args}/>
);

export const Outiline: StoryObj<LikeHeartModel> = {
  render: Template.bind({}),
  name: 'Like Heart Outiline',
  args: {
  active:false,
  },
};


export const Active: StoryObj<LikeHeartModel> = {
  render: Template.bind({}),
  name: 'Like Heart Active',
  args: {
  active:true,
  },
};






