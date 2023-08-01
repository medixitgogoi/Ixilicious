import {BsCart} from "react-icons/bs";

const CartIcon = () => {
  return (
    <div className="flex gap-[2px] items-center justify-center">
      <div className="font-medium">
        <BsCart />
      </div>
      <span>Cart(3)</span>
    </div>
  );
}

export default CartIcon;
