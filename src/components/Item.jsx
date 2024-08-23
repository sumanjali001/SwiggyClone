import PropTypes from "prop-types";
import { CDN_URL } from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { addItems, getCurrentItemQuantity } from "../utils/cartSlice";
import HandleAddDelete from "./HandleAddDelete";

function Item({ item }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(
    getCurrentItemQuantity(item.card.info.id)
  );

  function handleAdd(item) {
    if (!currentQuantity) {
      const newItem = {
        ...item,
        quantity: 1,
        unitPrice: item.card.info.price
          ? item.card.info.price / 100
          : item.card.info.defaultPrice / 100,
        totalPrice: item.card.info.price
          ? item.card.info.price / 100
          : item.card.info.defaultPrice / 100,
      };
      dispatch(addItems(newItem));
    }
  }

  return (
    <div
      key={item.card.info.id}
      className="flex  justify-between p-2 m-2 text-left border-gray-200 border-b-2"
    >
      <div className="w-9/12">
        <div className="py-2 font-bold  ">
          <span>{item.card.info.name}</span>
          <span>
            - ₹
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </span>
        </div>

        <p className="text-xs">{item.card.info.description}</p>
      </div>
      {item.card.info.imageId ? (
        <div className="w-3/12 p-4">
          <div className="absolute">
            <button
              className="bg-white text-green-600 lg:mx-16 md:p-2 sm:p-1 md:mx-7  sm:mx-1 rounded-lg shadow-gray-400 shadow-lg"
              onClick={() => handleAdd(item)}
            >
              {currentQuantity === 0 ? (
                "Add + "
              ) : (
                <HandleAddDelete id={item.card.info.id} />
              )}
            </button>
          </div>

          <img
            src={CDN_URL + item.card.info.imageId}
            className="w-full"
            alt="food"
          />
        </div>
      ) : (
        <button
          className="bg-white w-[100px] h-[50px] p-2 mx-16 text-green-600   rounded-lg shadow-gray-400 shadow-lg"
          onClick={() => dispatch(handleAdd(item))}
        >
          {currentQuantity === 0 ? (
            "Add + "
          ) : (
            <HandleAddDelete id={item.card.info.id} />
          )}
        </button>
      )}
    </div>
  );
}

export default Item;
Item.propTypes = {
  item: PropTypes.string.isRequired,
};
