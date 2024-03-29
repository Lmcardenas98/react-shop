import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.js";
import About from "./pages/About.js";
import Shop from "./pages/Shop.js";
import Context from "./context/ContextProviderCart.js";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((items) => setProducts(items));
  }, []);

  return (
    <Context.Provider value={{ cart, setCart, products, setProducts }}>
      <div className="App">
        {/* <Login /> */}
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Shop />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
