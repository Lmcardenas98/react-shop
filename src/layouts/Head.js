import logo from "../media/logo.jpg";
import Navigator from "../components/HeadComponents/Navigator";
import useProviderCart from "../hook/useProviderCart";
import Banner from "../components/HeadComponents/Banner";

export default function Head() {
  const { cart, setSearch, products } = useProviderCart();

  return (
    <div
      className="header-container"
      style={{ position: "sticky", top: 0, zIndex: 9999 }}
    >
      <div className="headerBox">
        <div className="imageHead">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <Navigator />
        <div className="head-cart-items">
          <input
            style={{
              display: window.location.pathname === "/shop" ? "block" : "none",
            }}
            type="seacrch"
            className="search-box"
            onChange={(e) =>
              setSearch(
                products.filter((user) =>
                  user.category.includes(e.target.value)
                )
              )
            }
          ></input>
          <b>cart items: {cart.length}</b>
        </div>
      </div>
    </div>
  );
}
