// import { ProductDB } from "./ProductDB";
import { BootContext } from "..";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

export const AddToCart = () => {
  const {
    cartItem,
    removeFromCart,
    handleWishListBtn,
    showSuccessMessage,
    increaseProductBtn,
    decreaseProductBtn,
    setTotalCartPrice,
    totalCartPrice
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
              navigate {product.name}
              <br />
              {product.details} <br />
              {product.currency} {product.price} <br />
              <br />
              Quantity :{" "}
              <button onClick={() => increaseProductBtn(product)}>
                +
              </button>{" "}
              {product.quantity}{" "}
              <button onClick={() => decreaseProductBtn(product)}>-</button>
              <br />
              <button onClick={() => removeFromCart(product.id)}>
                Remove from cart
              </button>{" "}
              <br />
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
