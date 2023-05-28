// import { ProductDB } from "./ProductDB";
import { BootContext } from "..";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

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

export const AddToCart = () => {
  const {
    cartItem,
    removeFromCart,
    handleWishListBtn,
    showSuccessMessage,
    increaseProductBtn,
    decreaseProductBtn,
    setTotalCartPrice,
    totalCartPrice,
  } = useContext(BootContext);
  setTotalCartPrice(
    cartItem.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0)
  );

  return (
    <div className="cartItemContent">
      <h3>MY CART({cartItem.length})</h3>
      {cartItem.map((product) => {
        return (
          <div key={product.name} className="product-card">
            <div className="productList">
              <img src={product.img} alt={product.name}></img>
              {product.name}
              <br />
              {product.details} <br />
              {product.currency} {product.price} <br />
              <br />
              Quantity :{product.quantity}
              <div className="cart-button">
                <button onClick={() => increaseProductBtn(product)}>+</button>{" "}
                {product.quantity}{" "}
                <button onClick={() => decreaseProductBtn(product)}>-</button>{" "}
              </div>
              <button onClick={() => removeFromCart(product.id)}>
                Remove from cart
              </button>{" "}
              <button onClick={() => handleWishListBtn(product)}>
                Add To Wishlist
              </button>
              {showSuccessMessage && (
                <div className="success-message">Item Successfully Added! </div>
              )}
            </div>
          </div>
        );
      })}

      <div className="price-Tag">
        <h3>Cart Price Details</h3>
        {cartItem.map((product) => {
          return (
            <div>
              {" "}
              <hr />
              {product.name}({product.quantity}) :{" "}
              {product.price * product.quantity}
            </div>
          );
        })}
        <h4>Total Price : {totalCartPrice} </h4>
        <Link to="/Address">
          {" "}
          <button className="checkout">CHECKOUT</button>
        </Link>
      </div>
    </div>
  );
};
