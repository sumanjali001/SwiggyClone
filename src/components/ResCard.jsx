import { useParams } from "react-router-dom";
import { useResMenu } from "../utils/useResMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import DiscountCard from "./DiscountCard";
import Spinner from "./Spinner";

function ResCard() {
  const { resid } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const { data, isLoading } = useResMenu(resid);
  if (isLoading) return <Spinner />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    aggregatedDiscountInfo,
  } = data.data.data.cards[2].card.card.info;
  const categories =
    data?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (!isLoading) {
    return (
      <div className="text-center">
        <div className="font-bold my-6 w-6/12 bg-gray-50 mx-auto p-2 rounded-lg shadow-lg border-gray-500 shadow-gray-400">
          <h1 className="my-6 text-2xl">{name}</h1>
          <p className="">
            ⭐{avgRating} - ({totalRatingsString})
          </p>
          <p className="font-bold text-md underline text-orange-500 ">
            {cuisines.join(",")}-{costForTwoMessage}
          </p>
        </div>
        <h2 className="font-bold text-lg my-2">Deals For You</h2>
        <div className="flex justify-center">
          {aggregatedDiscountInfo.descriptionList.map((dis, i) => (
            <DiscountCard key={i} discount={dis} />
          ))}
        </div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    );
  }
}

export default ResCard;
