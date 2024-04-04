import logo from "../media/logo.jpg";
import Navigator from "../components/HeadComponents/Navigator";
import useProviderCart from "../hook/useProviderCart";
import Banner from "../components/HeadComponents/Banner";

export default function Head() {
  const { cart } = useProviderCart();
  return (
    <div className="header-container">
      <div className="headerBox">
        <div className="imageHead">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <Navigator />
        <div className="head-cart-items">
          <b>cart items: {cart.length}</b>
        </div>
      </div>
      <Banner />
    </div>
  );
}
