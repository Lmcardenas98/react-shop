import { useEffect, useState } from "react";

const Login = () => {
  const [users, setUsers] = useState(null);

  const [user, setUser] = useState(null);
  const [passw, setPassw] = useState(null);

  const [theme, setTheme] = useState("grid");
  const [color, setColor] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((items) => setUsers(items));
  }, []);

  console.log(users);

  function search(e) {
    e.preventDefault();
    users.forEach((element) => {
      if (element.username === user && element.password === passw) {
        return setTheme("none");
      } else {
        return setColor("red");
      }
    });
  }

  return (
    <div className="login" style={{ display: theme }}>
      <form
        className="login-form"
        onSubmit={search}
        style={{ backgroundColor: color }}
      >
        <label>nombre</label>
        <input type="text" onChange={(e) => setUser(e.target.value)}></input>
        <label>password</label>
        <input type="text" onChange={(e) => setPassw(e.target.value)}></input>
        <button>login</button>
      </form>
    </div>
  );
};

export default Login;
