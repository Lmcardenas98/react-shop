export default function SectionSeasonSales() {
  const text =
    "Take 25% off all sweaters and knits. Discount applied at checkout.";
  return (
    <div className="section-season-sale" id="pp">
      <div className="season-sale-text">
        <h1>End of Season sale</h1>
        <p>{text.slice(0, 10)}</p>
        <button className="sale-btn">SHOP NOW</button>
      </div>
    </div>
  );
}
