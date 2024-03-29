import { useEffect, useState } from "react";
import Card from "../components/Cards";
// import { useRef } from "react";
import useProviderCart from "../hook/useProviderCart";

export default function Body() {
  // const myRef = useRef();
  // const myRefVal = myRef.current.value;
  // console.log(myRefVal);
  const { products, setProducts } = useProviderCart();
  const [search, setSearch] = useState(null);

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
      <input
        type="text"
        className="search-box"
        onChange={(e) =>
          setSearch(
            products.filter((user) => user.category.includes(e.target.value))
          )
        }
      ></input>

      <div className="bodyBox">
        {search === null ? renderMap() : renderFilter()}
      </div>
    </>
  );
}
