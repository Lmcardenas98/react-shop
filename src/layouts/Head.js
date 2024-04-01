import banner from "../media/banner.jpg";
import logo from "../media/logo.jpg";
import Navigator from "../components/Navigator";

export default function Head() {
  return (
    <div>
      <div className="head-banner">
        <img src={banner} alt="banner" className="banner"></img>
      </div>
      <div className="headerBox">
        <div className="imageHead">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="siteName">
          <h1>Sample Name</h1>
        </div>

        <Navigator />
      </div>
    </div>
  );
}
