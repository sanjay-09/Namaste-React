import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  console.log("cart render");
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="w-6/12 mx-auto bg-slate-100 text-center font-bold p-2 m-2 text-xl">
        Cart
      </h1>
      {cartItems.map((item) => (
        <div className="w-6/12 bg-slate-100 mx-auto flex justify-between p-4 rounded-md font-bold">
          <h3>{item.card.info.name}</h3>
          <h3>Rs{item.card.info.price / 100}</h3>
        </div>
      ))}
      {cartItems.length === 0 ? (
        <h1
          className="w-6/12 mx-auto bg-slate-100 text-center font-bold p-2 m-2 text-xl hover:bg-gray-300"
          
        >
         <Link to="/"> Add Items to your Card</Link> 
        </h1>
      ) : (
        <h1
          className="w-6/12 mx-auto bg-slate-100 text-center font-bold p-2 m-2 text-xl hover:bg-gray-300"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </h1>
      )}
    </div>
  );
};
export default Cart;
