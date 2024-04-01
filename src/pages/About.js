import { useReducer } from "react";
import Layout from "./Layout";

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
      <Layout>
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
      </Layout>
    </>
  );
}
