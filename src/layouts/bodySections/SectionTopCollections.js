import { useEffect, useRef } from "react";
import useProviderCart from "../../hook/useProviderCart";

export default function SectionTopCollection() {
  const { products } = useProviderCart();
  const divRef = useRef(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     divRef.current.scrollLeft += 400;
  //     console.log(divRef.current.scrollLeft);
  //   }, 5000);
  // }, []);

  return (
    <div className="section-top-collection section">
      <h1>Top Collections</h1>
      <div className="top-collection-container">
        <div className="top-colection-cards-container" ref={divRef}>
          {products?.map((item) => (
            <div className="collection-card">
              <div className="collection-image-container">
                <img className="collection-image" src={item.image}></img>
              </div>
              <div className="collection-descriptio-container">
                <p className="collection-description">
                  {item.title.slice(0, 20)}
                </p>
                <p className="collection-price">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
