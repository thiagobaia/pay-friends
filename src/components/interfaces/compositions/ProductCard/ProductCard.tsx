import { LikeHeart } from "../../../elements/LikeHeart/LikeHeart";
import { Price } from "../../../elements/Price/Price";
import { ProductCardModel } from "./ProductCard.model";

export const ProductCard = ({
  ProductImage,
  ProductTitle,
  ProductSubTitle,
  ProductDescription,
  ProductCategory,
  ProductGenere,
  ProductPrice,
  ProductForwardPrice,
  ProductOldPrice,
  ProductPixDiscount
}: ProductCardModel) => {
  return (
    <div className="flex justify-center rounded-md flex-col w-80 bg-white-100 px-3">
      <div className="flex justify-end py-3">
        <LikeHeart active={true} />
      </div>

      <div className="flex cursor-pointer">
        <img src={ProductImage} alt="product-image" />
      </div>

      <div className="py-4">
        <Price value={ProductPrice} oldValue={ProductOldPrice} pixDiscount={ProductPixDiscount} />
      </div>
    </div>
  );
};
