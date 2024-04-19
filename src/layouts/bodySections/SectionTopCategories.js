import { useState } from "react";
import Card from "../../components/Cards";
import useProviderCart from "../../hook/useProviderCart";
import TopCategories from "../../components/BodyComponents/TopCategories";

export default function SectionTopCategories() {
  const { products, setProducts } = useProviderCart();
  return (
    <div
      id="section-top-categories"
      data-item="categories"
      className="section-top-categories section obserb"
    >
      <h1>Top categories</h1>
      <div className="body-top-categories">
        <TopCategories
          category={products?.filter((item) => item.category === "electronics")}
          name="electronics"
        />
        <TopCategories
          category={products?.filter(
            (item) => item.category === "men's clothing"
          )}
          name="men's clothing"
        />
        <TopCategories
          category={products?.filter((item) => item.category === "jewelery")}
          name="jewelery"
        />
      </div>
    </div>
  );
}
