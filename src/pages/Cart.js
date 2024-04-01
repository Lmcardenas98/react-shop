import useProviderCart from "../hook/useProviderCart";
import Card from "../components/Cards";
import Layout from "./Layout";

const Cart = () => {
  const { cart, products } = useProviderCart();

  const bridge = [];

  products?.filter((el) => {
    cart?.forEach((value) => {
      if (el.id === value) {
        bridge.push(el);
      }
    });
  });

  return (
    <Layout>
      <div className="cart">
        <h1 style={{ display: bridge.length === 0 ? "block" : "none" }}>
          nothing in the cart by this time
        </h1>
        <div className="bodyBox">
          {bridge.map((user) => (
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
      </div>
    </Layout>
  );
};

export default Cart;
