import { CategoriesDB } from "./CategoriesDB";
import { useContext } from "react";
import { BootContext } from "..";
import { NavLink } from "react-router-dom";
import HomeImg from "../Images/HomeImg.jpg";

export const Home = () => {
  const { categoryClickHandler } = useContext(BootContext);

  return (
    <div className="HomeContent">
      <img src={HomeImg} alt="Here is Home Page"></img>
      {CategoriesDB.map((product) => {
        return (
          <div className="category-card" key={product.name}>
            <div
              className="category-list"
              // onClick={() => categoryClickHandler(product.category)}
            >
              <NavLink
                className="nav-link"
                to="/ProductList.js"
                onClick={() => categoryClickHandler(product.category)}
              >
                <h3>New Arrival</h3>

                <p className="categoryHome"> {product.category}</p>
                <hp>Best Collections Here</hp>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};
