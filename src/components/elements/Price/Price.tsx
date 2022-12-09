import { useEffect, useState } from "react";
import { PriceModel } from "./Price.model";

export const Price = ({ value, oldValue, pixDiscount }: PriceModel) => {
  const [currentValue, setCurrentValue] = useState("");
  const [pastValue, setPastValue] = useState("");

  useEffect(() => {
    let currentValueFormt = value.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
    });
    setCurrentValue(currentValueFormt);

    let pastValueFormt = oldValue.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
    });
    setPastValue(pastValueFormt);
  });

  return (
    <div className="flex gap-x-2 flex-col">
      <p className="text-xs line-through text-gray-400 font-light">
        R$ {pastValue}
      </p>
      <span className="font-semibold text-2xl text-orange-500">
        R$ {currentValue}
      </span>
      <p className="font-light text-gray-400">
        À vista no PIX com até{" "}
        <strong className="font-bold text-gray-400">{pixDiscount}% OFF</strong>
      </p>
    </div>
  );
};
