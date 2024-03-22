import useProvider from "../hook/useProvider";

export default function BtnCart() {
  const { cart, setCart } = useProvider();

  setCart("aprendiz");

  return (
    <div className="btn-cart">
      <button>{cart}</button>
    </div>
  );
}
