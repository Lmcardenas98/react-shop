import Banner from "../../components/HeadComponents/Banner";
import bannerImg from "../../media/banner.jpg";

export default function SectionDeals() {
  return (
    <div className="section-deals-container">
      <div className="banner-container">
        <div className="head-banner">
          <div className="banner-item-description">
            <h1>Deal of the day</h1>
            <p>Get at discount price!</p>
            <p>The countdown is finished</p>
            <button className="header-btn">SHOP NOW</button>
          </div>
          <div className="deals-image ">
            <img className="deals-img" src={bannerImg}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
