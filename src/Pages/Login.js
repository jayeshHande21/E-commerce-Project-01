import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const [clickedBtn, setClickedBtn] = useState(false);
  const [password, setPassword] = useState([]);
  const { setIsLoggedIn } = useContext(AuthContext);
  const givePermission = () => {
    setIsLoggedIn(true);
  };

  const handlePassword = () => {
    setClickedBtn(!clickedBtn);
    console.log(password);
  };
  const getPassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="signIn">
      <div className="signInHeading">
        <h1>
          Sign<span className="IN">In</span>
        </h1>
        <h2>Get Access To Your Cart , Wishlist and Order</h2>
      </div>

      <div className="signInForm">
        <label>Enter Your FirstName *</label>
        <input
          type="text"
          placeholder="Ex : Jayesh"
          className="requiredSignIn"
        />
        <label>Enter Your LastName *</label>
        <input
          type="text"
          placeholder="Ex :  Hande "
          className="requiredSignIn"
        />
        <label>Enter Your Email *</label>
        <input
          type="email"
          placeholder="Ex : jayeshhande00@gmail.com"
          className="requiredSignIn"
        />
        <label>Enter Your Password *</label>
        <br />
        {clickedBtn ? (
          <input
            type="text"
            placeholder="Password"
            className="requiredSignIn"
            onChange={getPassword}
          />
        ) : (
          <input
            type="password"
            placeholder="Password"
            className="requiredSignIn"
            onChange={getPassword}
            value={password}
          />
        )}
        <br /> <br />
        <button onClick={handlePassword}>
          {clickedBtn ? "Hide Password" : "Show Password"}
        </button>
        <br /> <br />
        <NavLink to="/">
          {" "}
          <button onClick={givePermission}>Login with Test Credential</button>
        </NavLink>
      </div>
    </div>
  );
};
