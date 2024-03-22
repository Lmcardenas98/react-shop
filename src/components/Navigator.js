import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigator() {
  const [menuSelect, setMenuSelect] = useState("");

  return (
    <div className="navigator">
      <h1 onClick={() => setMenuSelect(menuSelect === "" ? "block" : "")}>+</h1>
      <div className="navigator-menu" style={{ display: menuSelect }}>
        <div className="navigator-choices">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
