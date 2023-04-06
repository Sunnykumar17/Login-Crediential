import React, { useContext } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { AppContext } from "./components/Context";

const App = () => {
  const { isLogIn } = useContext(AppContext);
  return (
    <div>
      {isLogIn ? (
        <div>
          <Navbar />
          <Home />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};
export default App;
