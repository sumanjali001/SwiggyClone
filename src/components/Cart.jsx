import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import CartItems from "./CartItems";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center m-4 p-4">
      <div className="text-2xl font-bold">Cart</div>
      <div className="w-6/12 mx-auto my-4">
        {cartItems.length === 0 ? (
          <h1>Cart is Empty !!! Pls Add Items</h1>
        ) : (
          <CartItems items={cartItems} />
        )}
      </div>
    </div>
  );
}

export default Cart;
