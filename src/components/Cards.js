import { useState } from "react";
import useProviderCart from "../hook/useProviderCart";

export default function Card(props) {
  const [description, setDescription] = useState("");

  const { cart, setCart } = useProviderCart();

  const handleCart = (id) => {
    setCart([...cart, id]);
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
        {/* este href expande el icono para mostrar la descripcion del elemento */}
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
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
