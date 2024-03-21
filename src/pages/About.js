import { useReducer } from "react";
import Footer from "../layouts/Footer";
import Head from "../layouts/Head";
import { useState } from "react";

const reducer = (state, action) => {
  return {
    count: state.count + 1,
  };
};

export default function About() {
  const [state, dispatch] = useReducer(reducer, { count: 1 });
  // const [theme, setTheme]  = useState('light');

  return (
    <>
      <Head />

      <h1>About</h1>
      <button onClick={() => dispatch()}>subir</button>
      <h1>{state.count}</h1>

      {/* <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        /> */}
      <Footer />
    </>
  );
}
