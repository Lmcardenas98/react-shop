import useProviderCart from "../../hook/useProviderCart";
import { useEffect, useState } from "react";

export default function Banner() {
  const { cart, products } = useProviderCart();
  const [cont, setCont] = useState(0);
  let item = products?.filter((item) => item.id <= 2);
  useEffect(() => {
    setInterval(() => {
      let now = new Date();
      if (now.getSeconds() % 15 === 1) {
        setCont(1 - cont);
      }
    }, 1000);
  });

  if (item) {
    return (
      <div className="banner-container">
        <div className="head-banner">
          <div className="banner-item-description">
            <h2>{item[cont]?.category}</h2>
            <h1>Higth cuality {item[cont]?.title}</h1>
            <h2>For only {item[cont]?.price}$</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem I
            </p>
            <button className="header-btn">SHOW NOW</button>
          </div>
          <div className="banner-item-image">
            <img
              className="banner-image"
              alt="item"
              src={item[cont]?.image}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
