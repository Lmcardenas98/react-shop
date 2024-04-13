import SectionSeasonSales from "./bodySections/SectionSeasonSales";
import SectionTopCategories from "./bodySections/SectionTopCategories";
import SectionTopCollection from "./bodySections/SectionTopCollections";
import SectionDeals from "./bodySections/SectionsDeals";
import Banner from "../components/HeadComponents/Banner";
import { useEffect, useReducer, useRef, useState } from "react";

export default function Body() {
  const selector = document.querySelector(".banner-container");
  const [first, setFirst] = useState(0.2);
  const [second, setSecond] = useState(0.2);
  const [third, setThird] = useState(0.2);
  const [four, setFour] = useState(0.2);
  const [fifth, setFive] = useState(0.2);
  window.addEventListener("scroll", function () {
    if (selector) {
      let p = document
        .querySelector(".banner-container")
        .getBoundingClientRect();
      let a = document
        .querySelector(".section-top-categories")
        .getBoundingClientRect();
      let b = document
        .querySelector(".section-season-sale")
        .getBoundingClientRect();
      let c = document
        .querySelector(".section-top-collection")
        .getBoundingClientRect();
      let d = document
        .querySelector(".section-deals-container")
        .getBoundingClientRect();
      console.log(p.height + a.height, Math.abs(p.top));
      if (p.height > Math.abs(p.top)) {
        setFirst(1);
      } else {
        setFirst(0.2);
      }
      if (p.height + a.height > Math.abs(p.top) && p.height < Math.abs(p.top)) {
        setSecond(1);
      } else {
        setSecond(0.2);
      }
      if (
        p.height + a.height + b.height > Math.abs(p.top) &&
        p.height + a.height < Math.abs(p.top)
      ) {
        setThird(1);
      } else {
        setThird(0.2);
      }
      if (
        p.height + a.height + b.height + c.height > Math.abs(p.top) &&
        p.height + a.height + b.height < Math.abs(p.top)
      ) {
        setFour(1);
      } else {
        setFour(0.2);
      }
    }
  });

  return (
    <>
      <div className="nav-side-bar">
        <div style={{ opacity: first }}></div>
        <div style={{ opacity: second }}></div>
        <div style={{ opacity: third }}></div>
        <div style={{ opacity: four }}></div>
        <div style={{ opacity: fifth }}></div>
      </div>
      <Banner />
      <SectionTopCategories />
      <SectionSeasonSales />
      <SectionTopCollection />
      <SectionDeals />
    </>
  );
}
