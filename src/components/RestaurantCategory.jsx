import PropTypes, { func } from "prop-types";
import { useState } from "react";
import ItemsList from "./ItemsList";
function RestaurantCategory({ data, setShowIndex, showItems }) {
  function handleClick() {
    setShowIndex();
  }
  return (
    <div className="md:w-8/12 sm:w-10/12 mx-auto my-4 p-4 shadow-lg bg-gray-50">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold ">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemsList items={data.itemCards} />}
    </div>
  );
}

export default RestaurantCategory;

RestaurantCategory.propTypes = {
  data: PropTypes.string.isRequired,
  setShowIndex: PropTypes.string.isRequired,
  showItems: PropTypes.string.isRequired,
};
