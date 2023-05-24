// import { ProductDB } from "./ProductDB";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BootContext } from "../Context/BootContext";
import { Cart } from "./AddToCart";

export const ProductList = () => {
  const {
    productsToDisplay,
    handleWishListBtn,
    handleCartBtn,
    handleCategory,
    handleSizes,
    handleRating,
    handleSortingLowToHigh,
    handleSortingHighToLow,
    showSuccessMessage,
    clearFilter,
    rangeFilter
  } = useContext(BootContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="ExploreMain">
      {isLoading ? (
        <p className="loading">LOADING...</p>
      ) : (
        <>
          <div className="Filters">
            <h4>Filters</h4>{" "}
            <button className="clearFilter" onClick={clearFilter}>
              Clear
            </button>
            <h4>Price</h4>
            <label>
              0 <input type="range" max="1800" min="0" onChange={rangeFilter} />
              1810
            </label>
            <h4>Categories</h4>
            <div className="categories">
              <label>
                {" "}
                <input type="checkbox" value="men" onChange={handleCategory} />
                Men
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  value="women"
                  onChange={handleCategory}
                />
                Women
              </label>
              <br />
              <label>
                <input type="checkbox" value="kids" onChange={handleCategory} />
                Kids
              </label>
            </div>
            <h4>Sizes</h4>
            <div className="Sizes">
              <label>
                <input type="checkbox" value="s" onChange={handleSizes} />S
              </label>{" "}
              <br />
              <label>
                <input type="checkbox" value="m" onChange={handleSizes} />M
              </label>{" "}
              <br />
              <label>
                <input type="checkbox" value="l" onChange={handleSizes} />L
              </label>{" "}
              <br />
              <label>
                <input type="checkbox" value="xl" onChange={handleSizes} />
                XL
              </label>{" "}
              <br />
              <label>
                <input type="checkbox" value="xxl" onChange={handleSizes} />
                XXL
              </label>
            </div>
            <h4>Rating</h4>
            <div className="rating">
              <label>
                <input
                  type="radio"
                  value="4"
                  onChange={handleRating}
                  name="rating"
                />
                4 stars & above
              </label>{" "}
              <br />{" "}
              <label>
                <input
                  type="radio"
                  value="3"
                  onChange={handleRating}
                  name="rating"
                />
                3 stars & above
              </label>{" "}
              <br />{" "}
              <label>
                <input
                  type="radio"
                  value="2"
                  onChange={handleRating}
                  name="rating"
                />
                2 stars & above
              </label>{" "}
              <br />{" "}
              <label>
                <input
                  type="radio"
                  value="1"
                  onChange={handleRating}
                  name="rating"
                />
                1 stars & above
              </label>{" "}
              <br />
            </div>
            <h4>Sort by Price</h4>
            <div className="sort-by-price">
              <label>
                <input type="radio" onChange={handleSortingLowToHigh} />
                price- Low-to-High
              </label>{" "}
              <br />{" "}
              <label>
                <input type="radio" onChange={handleSortingHighToLow} />
                price- High-to-Low
              </label>{" "}
              <br />{" "}
            </div>
          </div>
          <div className="AllListedProducts">
            {productsToDisplay.map((product) => {
              return (
                <div key={product.name} className="product-card">
                  <div className="productList">
                    <img
                      src={product.img}
                      alt={product.name}
                      style={{ height: "100px" }}
                    />
                    {product.name}
                    <br />
                    {product.details} <br />
                    {product.currency} {product.price} <br />
                    <br />
                    Category : {product.category} <br />
                    Size : {product.size} <br />
                    Rating : {product.rating} <br />
                    Product Category : {product.productCategory} <br />
                    {/* {!buttonClicked ? (
                <button onClick={() => handleCartBtn(product)}>
                  Add To Cart
                </button>
              ) : (
                <button>
                  <NavLink to="/Cart">Go To Cart</NavLink>
                </button>
              )} */}
                    <button onClick={() => handleCartBtn(product)}>
                      Add To Cart
                    </button>{" "}
                    {showSuccessMessage && (
                      <div className="success-message">
                        Item Successfully Added!{" "}
                      </div>
                    )}
                    {""}
                    <button onClick={() => handleWishListBtn(product)}>
                      Add to WishList
                    </button>{" "}
                    {showSuccessMessage && (
                      <div className="success-message">
                        Item Successfully Added!{" "}
                      </div>
                    )}
                    <br /> <br />
                    <NavLink to={`/Individual/${product.id}`}>
                      View Item
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
