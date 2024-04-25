import { UilPlayCircle } from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <div className="footerBox">
      <div className="footer-container section">
        <div className="infomration">
          <div className="infomration-box">
            <h2>Contact</h2>
            <address>
              Written by <a href="mailto:webmaster@example.com">Lmcardenas</a>.{" "}
              Visit us at: Example.com Box 564, Disneyland USA
            </address>
          </div>
          <div className="infomration-box">
            <h2>Category</h2>
            <a>Men</a>
            <a>women</a>
            <a>kids</a>
            <a>accesories</a>
            <a>shoe</a>
          </div>
          <div className="infomration-box">
            <h2>Useful link</h2>
            <a>link1</a>
            <a>link1</a>
            <a>link1</a>
            <a>link1</a>
            <a>link1</a>
          </div>
          <div className="infomration-box">
            <h2>Policies</h2>
            <a>link1</a>
            <a>link1</a>
            <a>link1</a>
            <a>link1</a>
            <a>link1</a>
          </div>
        </div>
        <div className="social-media">
          <UilPlayCircle
            size="30"
            color="rgb(0, 0, 0)"
            className="media-icon"
          />
          <UilPlayCircle
            size="30"
            color="rgb(0, 0, 0)"
            className="media-icon"
          />
          <UilPlayCircle
            size="30"
            color="rgb(0, 0, 0)"
            className="media-icon"
          />
          <UilPlayCircle
            size="30"
            color="rgb(0, 0, 0)"
            className="media-icon"
          />
        </div>
      </div>
      <div className="marca">Logo © 2018 all right reserved</div>
    </div>
  );
}
