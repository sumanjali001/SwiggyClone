import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  getCurrentItemQuantity,
  increaseItemQuantity,
} from "../utils/cartSlice";
function HandleAddDelete({ id }) {
  const itemQuantity = useSelector(getCurrentItemQuantity(id));
  const dispatch = useDispatch();

  return (
    <div className="flex items-center ">
      <button
        className="border-3 bg-green-500 text-white m-2 w-6 "
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </button>
      {itemQuantity}
      <button
        className="border-3 bg-green-500 text-white m-2 w-6  "
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </button>
    </div>
  );
}

export default HandleAddDelete;
HandleAddDelete.propTypes = {
  id: PropTypes.string.isRequired,
};
