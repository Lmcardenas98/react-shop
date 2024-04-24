import { useEffect, useState } from "react";

export default function SectionSeasonSales() {
  const [text, setText] = useState([]);
  const sample =
    "Take 25% off all sweaters and knits. Discount applied at checkout.";

  return (
    <div
      className="section-season-sale obserb"
      data-item="sale"
      id="section-season-sale"
    >
      <div className="season-sale-text">
        <h1>End of Season sale</h1>
        <p>{sample}</p>
        <button className="sale-btn">SHOP NOW</button>
      </div>
    </div>
  );
}
