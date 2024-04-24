import useProviderCart from "../../hook/useProviderCart";
import { UilHeart } from "@iconscout/react-unicons";

export default function SectionGetFollow() {
  const { products } = useProviderCart();
  console.log(products);
  return (
    <div className="section-get-follow-container section">
      <div className="get-follow-header">
        <h1>Follow us On Instagram</h1>
        <p>some text</p>
      </div>
      <div className="get-follow-items-container">
        {products?.map((item) => {
          if (item.id <= 5) {
            return (
              <div className="get-follow-item">
                <img src={item.image}></img>
                <UilHeart className="heart" size="30" color="#FFFFFF" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
