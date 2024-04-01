import { useState } from "react";
import { Link } from "react-router-dom";
import useProviderCart from "../hook/useProviderCart";

export default function Navigator() {
  const [menuSelect, setMenuSelect] = useState("");
  const { cart } = useProviderCart();
  return (
    <div className="navigator">
      <h1 onClick={() => setMenuSelect(menuSelect === "" ? "block" : "")}>+</h1>
      <div className="navigator-menu" style={{ display: menuSelect }}>
        <div className="navigator-choices">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">cart</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="head-cart-items">
        <b style={{ display: cart.length === 0 ? "none" : "block" }}>
          cart items: {cart.length}
        </b>
      </div>
    </div>
  );
}
