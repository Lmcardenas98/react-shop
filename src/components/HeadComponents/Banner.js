import banner from "../../media/banner.jpg";
import useProviderCart from "../../hook/useProviderCart";
import { useEffect, useState } from "react";

export default function Banner() {
  const { cart, products } = useProviderCart();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const random = Math.floor(Math.random() * 10);
      setItem(products?.filter((item) => item.id === random)[0]);
    }, 10000);
  });

  console.log(item);
  return (
    <div className="banner-container">
      <div className="head-banner">
        <div className="banner-item-description">
          <h2>{item?.category}</h2>
          <h1>Higth cuality {item?.title}</h1>
          <h2>For only {item?.price}$</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem I
          </p>
          <button className="header-btn">SHOW NOW</button>
        </div>
        <div className="banner-item-image">
          <img className="banner-image" alt="item" src={item?.image}></img>
        </div>
      </div>
    </div>
  );
}
