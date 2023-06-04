import "./styles.css";
import boot from "./boot.png";

import { Home } from "./Pages/Home";
import { AddToCart } from "./Pages/AddToCart";
import { ProductList } from "./Pages/ProductList";
import { AddToWishList } from "./Pages/AddToWishList";
import { Individual } from "./Pages/Individual";
import { UserProfile } from "./Pages/UserProfile";
import { Login } from "./Pages/Login";
import { Address } from "./Pages/Private/Address";
import { RequiresAuth } from "./Components/RequiresAuth";
import { AuthContext } from "./Context/AuthContext";
import { BootContext } from "./Context/BootContext";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Mockman from "mockman-js";

export default function App() {
  const { isLoggedIn } = useContext(AuthContext);

  const { handleSearch, cartItem, wishlistItem, setProductsToDisplay, data } =
    useContext(BootContext);
  // const location = useLocation();
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   setIsLoggedIn(!isLoggedIn);

  //   //Nevigate Direct to the Previos Address (Address Page)
  //   navigate(location?.state?.from?.pathname);
  // };

  const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontWeight: isActive ? "600" : "200",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "red" : "",
  });

  const handleExploreBtn = () => {
    console.log("clicked");
    setProductsToDisplay(data);
  };

  return (
    <div className="App">
      <div className="Header">
        <h1>
          Feet<span className="Fly">Fly</span>{" "}
          {/* <h3> Where Comfort Meets Style"</h3> */}
          <img src={boot} alt="mockBee logo" width="50" height="40" />
        </h1>

        <div className="search">
          <label>
            Search Product{" "}
            <input
              placeholder="Search Product here"
              type="search"
              onChange={handleSearch}
            />
          </label>
        </div>

        <nav>
          <NavLink
            to={"/ProductList"}
            style={getActiveStyle}
            className="nav-link"
            onClick={() => handleExploreBtn()}
          >
            <span>Explore</span>
          </NavLink>{" "}
          <NavLink
            to={"/AddToWishList"}
            style={getActiveStyle}
            className="nav-link"
          >
            <span>🧡({wishlistItem.length})</span>
          </NavLink>{" "}
          <NavLink
            to={"/AddToCart"}
            style={getActiveStyle}
            className="nav-link"
          >
            <span>🛒({cartItem.length})</span>
          </NavLink>{" "}
          {!isLoggedIn ? (
            <NavLink to="/Login">
              <button>LogIn</button>
            </NavLink>
          ) : (
            <NavLink
              to={"/UserProfile"}
              style={getActiveStyle}
              className="nav-link"
            >
              <span>🤵</span>
            </NavLink>
          )}
        </nav>
      </div>

      {/* <div className="exploreDiv">
        <h2>EXPLORE</h2>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route
          path="/AddToCart"
          element={
            <RequiresAuth>
              <AddToCart />{" "}
            </RequiresAuth>
          }
        />
        <Route
          path="/AddToWishList"
          element={
            <RequiresAuth>
              <AddToWishList />{" "}
            </RequiresAuth>
          }
        />
        <Route path="/Individual/:id" element={<Individual />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Login" element={<Login />} />

        <Route
          path="/Address"
          element={
            <RequiresAuth>
              <Address />
            </RequiresAuth>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}
