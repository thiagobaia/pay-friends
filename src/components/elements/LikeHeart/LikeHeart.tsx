import { LikeHeartModel } from "./LikeHeart.model";

import heartOutline from "../../../assets/component/ProductCard/heart-outline.png";
import heartRed from "../../../assets/component/ProductCard//heart-red.png";

import { useState } from "react";

export const LikeHeart = ({active, children, ...props}: LikeHeartModel) => {


  const [activeHeart, setActiveHeart] = useState(false);

  const handleActive = () => {
    setActiveHeart(!activeHeart);
    
  };
  return (
    <button className="w-8 rounded-full border border-gray-900 p-1 cursor-pointer hover:bg-gray-200 transition ease-in-out delay-150" onClick={handleActive}>
      {activeHeart == true ? (
        <img src={heartRed} alt="heart-red" />
      ) : (
        <img src={heartOutline} alt="heart-outline" />
      )}
    </button>
  );
};


