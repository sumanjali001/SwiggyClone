import PropTypes from "prop-types";

import HandleAddDelete from "./HandleAddDelete";

function CartItem({ item }) {
  const id = item.card.info.id;

  return (
    <div className="flex justify-between p-2">
      <p>{item.card.info.name}</p>
      <div className="flex justify-between gap-3">
        <HandleAddDelete id={id} />
        <div className=" w-10 m-2">₹{Math.round(item.totalPrice)}</div>
      </div>
    </div>
  );
}

export default CartItem;
CartItem.propTypes = {
  item: PropTypes.string.isRequired,
};
