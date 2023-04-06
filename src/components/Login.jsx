import React, { useContext, useState } from "react";
import "./Login.css";
import { AppContext } from "./Context";

const Login = () => {
  const { setIsLogIn } = useContext(AppContext);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const HandleAuthentication = () => {
    if (
      (user.name === "sunny" && user.password === "sunny@123") ||
      (user.name === "admin" && user.password === "admin@123")
    ) {
      setIsLogIn(true);
    } else {
      alert("Enter Proper Credentials");
    }
  };
  return (
    <div className="login_Compo">
      <h2>Login Form</h2>
      <div>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <div>
        <button onClick={HandleAuthentication}>Login</button>
          </div>
        
    </div>
  );
};

export default Login;
