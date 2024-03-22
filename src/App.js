import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import About from "./pages/About.js";
import Shop from "./pages/Shop.js";
import Context from "./context/ContextProvider.js";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState("mesa");

  return (
    <Context.Provider value={{ cart, setCart }}>
      <div className="App">
        {/* <Login /> */}
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Layout />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
