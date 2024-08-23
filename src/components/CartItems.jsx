import PropTypes from "prop-types";

import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getAllItemsTotalPrice } from "../utils/cartSlice";

function CartItems({ items }) {
  const totalPrice = useSelector(getAllItemsTotalPrice);
  return (
    <>
      <div>
        {items.map((item) => (
          <CartItem item={item} key={item.card.info.id} />
        ))}
      </div>
      <div className="flex justify-between m-4">
        <p className="text-center m-4 p-2 font-bold">
          To Pay : ₹{Math.round(totalPrice)}
        </p>
        <button className="bg-green-400 m-4 rounded-xl p-2">Place Order</button>
      </div>
    </>
  );
}

export default CartItems;

CartItems.propTypes = {
  items: PropTypes.string.isRequired,
};
