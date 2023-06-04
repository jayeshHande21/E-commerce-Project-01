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
              onClick={() => categoryClickHandler(product.category)}
            >
              <h3>New Arrival</h3>

              <p className="categoryHome"> {product.category}</p>
              <h4>Best Collections Here</h4>
            </div>
          </div>
        );
      })}

      <div className="footer">
        <h2>
          Feet<span className="Fly">Fly</span>{" "}
        </h2>
        <h4>
          Developed By <a href="">@JayeshHande</a>
        </h4>
        <p>
          {" "}
          <a href="">Insta</a>
        </p>
        <p>
          {" "}
          <a href="">Twitter</a>
        </p>
        <p>
          {" "}
          <a href="">Discord</a>
        </p>
      </div>
    </div>
  );
};
