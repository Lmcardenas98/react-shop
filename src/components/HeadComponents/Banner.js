import useProviderCart from "../../hook/useProviderCart";
import { useEffect, useState } from "react";

export default function Banner() {
  const { cart, products } = useProviderCart();
  const [cont, setCont] = useState(0);
  let item = products?.filter((item) => item.id <= 2);

  if (item) {
    return (
      <div className="banner-container">
        <div className="head-banner banner1">
          <div className="banner-item-description item1">
            <h2
              onAnimationIteration={() => setCont(1 - cont)}
              className="category1"
            >
              {item[cont]?.category}
            </h2>
            <h1 className="title1">
              Higth cuality {item[cont]?.title.slice(0, 10)}
            </h1>
            <h2 className="price1">For only {item[cont]?.price}$</h2>
            <p className="description1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem I
            </p>
            <button className="header-btn btn1">SHOW NOW</button>
          </div>
          <div className="banner-item-image image1 ">
            <img
              className="banner-image image-tag1"
              alt="item"
              src={item[cont]?.image}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
