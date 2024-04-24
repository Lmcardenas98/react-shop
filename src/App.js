import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.js";
import About from "./pages/About.js";
import Shop from "./pages/Shop.js";
import Login from "./pages/Login.js";
import Context from "./context/ContextProviderCart.js";
import { useState, useEffect } from "react";
import Home from "./pages/Home.js";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState(null);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((items) => setProducts(items));

    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  if (isloading) {
    return (
      <div>
        <h1>Loading........</h1>
      </div>
    );
  } else {
    return (
      <Context.Provider
        value={{ cart, setCart, products, setProducts, search, setSearch }}
      >
        <div className="App">
          {/* <Login /> */}
          <BrowserRouter>
            <Routes>
              <Route>
                <Route index element={<Home />} />
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
}

export default App;
