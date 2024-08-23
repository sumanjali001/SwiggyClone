import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import Item from "./Item";
function ItemsList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.card.info.id} item={item} />
      ))}
    </div>
  );
}

export default ItemsList;

ItemsList.propTypes = {
  items: PropTypes.string.isRequired,
};
