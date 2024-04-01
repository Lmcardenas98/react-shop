import { useState } from "react";
import useProviderCart from "../hook/useProviderCart";

export default function Card(props) {
  const [description, setDescription] = useState("");

  const { cart, setCart } = useProviderCart();

  const handleCart = (id) => {
    setCart([...cart, id]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((value) => value !== id));
  };

  return (
    <div className="card-box">
      <div className="image-box">
        <img className="card-image" src={props.image} alt=" " />
      </div>
      <div className="description-box">
        <div className="card-title-container">
          <p className="card-title">{props.title}</p>
        </div>
        <div className="card-explain">
          <p className="card-category">{props.category}</p>
          <p className="card-price">{props.price}$</p>
        </div>
        <div className="card-see-more">
          <a
            className="card-description-expand"
            onClick={() => setDescription(description === "" ? "block" : "")}
          >
            see more
          </a>
          <p className="card-description" style={{ display: description }}>
            {props.descript}
          </p>
        </div>
        <div className="btn-cart">
          <button
            style={{
              display: window.location.pathname === "/cart" ? "none" : "block",
            }}
            onClick={() => {
              handleCart(props.id);
            }}
          >
            Add to cart
          </button>
          <button
            style={{
              display: window.location.pathname === "/cart" ? "block" : "none",
            }}
            onClick={() => {
              removeFromCart(props.id);
            }}
          >
            remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}
