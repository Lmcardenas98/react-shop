import { useEffect, useState } from "react";
import useProviderCart from "../../hook/useProviderCart";

export default function SectionDeals() {
  const { products } = useProviderCart();
  let img = products?.filter((item) => item.id === 3);
  if (img) {
    return (
      <div className="section-deals-container">
        <div className="banner-container">
          <div className="head-banner">
            <div className="deals-item-description">
              <h1>Deal of the day</h1>
              <p>Get at discount price!</p>
              <p>The countdown is finished</p>
              <button className="header-btn">SHOP NOW</button>
            </div>
            <div className="deals-image ">
              <img className="deals-img" src={img[0]?.image}></img>;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
