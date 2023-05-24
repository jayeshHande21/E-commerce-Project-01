import { CategoriesDB } from "./CategoriesDB";
import { useContext } from "react";
import { BootContext } from "..";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const { categoryClickHandler } = useContext(BootContext);

  return (
    <div className="HomeContent">
      {CategoriesDB.map((product) => {
        return (
          <div className="category-card" key={product.name}>
            <div
              className="category-list"
              // onClick={() => categoryClickHandler(product.category)}
            >
              <NavLink
                to="/ProductList.js"
                onClick={() => categoryClickHandler(product.category)}
              >
                <p>New Arrival</p>
              </NavLink>
              <p className="categoryHome"> {product.category}</p>
              <hp>Best Collections Here</hp>
            </div>
          </div>
        );
      })}
    </div>
  );
};
