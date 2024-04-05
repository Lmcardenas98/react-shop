import { useState } from "react";
import Layout from "./Layout";
import Card from "../components/Cards";
import useProviderCart from "../hook/useProviderCart";

const Shop = () => {
  const { products, search } = useProviderCart();

  const renderFilter = () => {
    return search?.map((user) => (
      <Card
        key={user.id}
        id={user.id}
        title={user.title}
        image={user.image}
        descript={user.description}
        category={user.category}
        price={user.price}
      />
    ));
  };

  const renderMap = () => {
    return products?.map((user) => (
      <Card
        key={user.id}
        id={user.id}
        title={user.title}
        image={user.image}
        descript={user.description}
        category={user.category}
        price={user.price}
      />
    ));
  };
  return (
    <>
      <Layout>
        <div className="bodyBox">
          {search === null ? renderMap() : renderFilter()}
        </div>
      </Layout>
    </>
  );
};

export default Shop;
