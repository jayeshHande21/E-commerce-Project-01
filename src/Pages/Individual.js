import { ProductDB } from "./ProductDB";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BootContext } from "..";
import img1 from "../Images/img1.jpeg";
import img2 from "../Images/img2.jpeg";
import img3 from "../Images/img3.jpeg";
import img4 from "../Images/img4.jpeg";
import img5 from "../Images/img5.jpeg";
import img6 from "../Images/img6.jpeg";
import img7 from "../Images/img7.jpeg";
import img8 from "../Images/img8.jpeg";
import img9 from "../Images/img9.jpeg";
import img10 from "../Images/img10.jpeg";
import img11 from "../Images/img11.jpeg";
import img12 from "../Images/img12.jpeg";
import img13 from "../Images/img13.jpeg";
import img14 from "../Images/img14.jpeg";
import img15 from "../Images/img15.jpeg";
import img16 from "../Images/img16.jpeg";
import img17 from "../Images/img17.jpeg";
import img18 from "../Images/img18.jpeg";

import { BootProvider } from "../Context/BootContext";

export const Individual = () => {
  const { data } = useContext(BootContext);
  const { id } = useParams();

  const showIndividual = data.filter((product) => product.id === id);
  console.log(showIndividual);

  const { showSuccessMessage, handleCartBtn } = useContext(BootContext);

  return (
    <div className="indudalProductCardList">
      <div className="indudalProductCard">
        {showIndividual.map((product) => {
          return (
            <div key={product.name} className="product-card">
              <div className="productList">
                {/* <p
                className="indidual-wishlistBtn"
                onClick={() => handleWishListBtn(product)}
              >
                <span className="wishlistSymbol">🤍</span>
              </p> */}
                <img src={product.img} alt={product.name}></img>
                {product.name}
                <br />
                {product.details} <br />
                {product.currency} {product.price} <br />
                <br />
                Category : {product.category} <br />
                Size : {product.size} <br />
                Rating : {product.rating} <br />
                <button
                  className="explore-cartBtn"
                  onClick={() => handleCartBtn(product)}
                >
                  <span className="explore-cart-symbol">🛒</span>Add To Cart
                </button>{" "}
                {showSuccessMessage && (
                  <div className="success-message">
                    Item Successfully Added!{" "}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="IndudalProductDetails">
        {showIndividual.map((product) => {
          return (
            <div className="IndudalProductAllInfo">
              <h1>{product.name}</h1>
              <br />
              <p> {product.details} </p> <br />
              <p>
                {" "}
                {product.currency} {product.price}
              </p>{" "}
              <p>Category : {product.category} </p> <br />
              <p>Size : {product.size}</p> <br />
              <p>Rating : {product.rating}</p> <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};
