import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigator() {
  return (
    <div className="navigator">
      <h1>Pages</h1>
      <div className="navigator-menu">
        <div className="navigator-choices">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">cart</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
