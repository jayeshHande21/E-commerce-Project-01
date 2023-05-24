import { BootContext } from "..";
import { useContext } from "react";

export const AddToWishList = () => {
  const {
    wishlistItem,
    removeFromWishList,
    handleCartBtn,
    totalWishListItem,
    increaseWishListTotal,
    showSuccessMessage
  } = useContext(BootContext);

  return (
    <div>
      <h3>Total Items in the WishList: {wishlistItem.length}</h3>
      {wishlistItem.map((product) => {
        return (
          <div key={product.name} className="product-card">
            <div className="productList">
              {product.name}
              <br />
              {product.details} <br />
              {product.currency} {product.price} <br />
              <br />
              Number of Item: {totalWishListItem}{" "}
              <button onClick={increaseWishListTotal}>+</button>
              <br />
              <button onClick={() => removeFromWishList(product.id)}>
                Remove from Wishlist
              </button>
              {showSuccessMessage && (
                <div className="success-message">
                  Item Successfully Removed!
                </div>
              )}
              <br />
              <button onClick={() => handleCartBtn(product)}>
                Add to Cart
              </button>
              {showSuccessMessage && (
                <div className="success-message">Item Successfully Added!</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
