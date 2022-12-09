import { ProductCard } from "./ProductCard";
import { Story, StoryObj } from "@storybook/react";
import { ProductCardModel } from "./ProductCard.model";

//assets
import ProductImage from '../../../../assets/component/ProductCard/oculos-masculino-bossa-nova-preto-fosco.png'

export default {
  title: "Components/Compositions/Product Card",
  component: ProductCard,
};

const Template: Story<ProductCardModel> = ({ ...args }) => (
  <ProductCard {...args} />
);

export const Default: StoryObj<ProductCardModel> = {
  render: Template.bind({}),
  name: "Product Card",
  args: {
    ProductImage:ProductImage,
    ProductTitle:
      "óculos de sol masculino chilli beans bossa nova fosco preto",
    ProductSubTitle: "What is Lorem Ipsum?",
    ProductDescription:
      "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ProductCategory: "óculos",
    ProductGenere: "female",
    ProductPrice: 100,
    ProductForwardPrice: 55,
    ProductOldPrice: 99,
    ProductPixDiscount: 5,
  },
};
