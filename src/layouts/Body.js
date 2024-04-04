import SectionTopCategories from "./bodySections/SectionTopCategories";

export default function Body() {
  return (
    <>
      <SectionTopCategories />
      <div className="section-season-sale">
        <div className="mask"></div>
        <div className="season-sale-text">
          <h1>End of Season sale</h1>
          <p>
            Take 25% off all sweaters and knits. Discount applied at checkout.
          </p>
          <button className="sale-btn">SHOP NOW</button>
        </div>
      </div>
    </>
  );
}

/* <input
        type="text"
        className="search-box"
        onChange={(e) =>
          setSearch(
            products.filter((user) => user.category.includes(e.target.value))
          )
        }
      ></input> */
