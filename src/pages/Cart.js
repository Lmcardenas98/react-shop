import Body from "../layouts/Body";
import Footer from "../layouts/Footer";
import Head from "../layouts/Head";
import useProviderCart from "../hook/useProviderCart";
import Card from "../components/Cards";
import { useState } from "react";

const Cart = () => {
  const { cart, setCart, products, setProducts } = useProviderCart();
  //   const [bridge, setBridge] = useState([]);
  const algo = [];

  products?.filter((el) => {
    cart?.forEach((value) => {
      if (el.id === value) {
        algo.push(el);
      }
    });
  });

  return (
    <>
      <Head />
      <div className="cart">
        {algo.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            title={user.title}
            image={user.image}
            descript={user.description}
            category={user.category}
            price={user.price}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
