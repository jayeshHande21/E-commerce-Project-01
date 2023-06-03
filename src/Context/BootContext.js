import { createContext, useState } from "react";
import { ProductDB } from "../Pages/ProductDB";
// import { NavLink } from "react-router-dom";
// import { v4 as uuid } from "uuid";

export const BootContext = createContext();

export const BootProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [wishlistItem, setWishlistItem] = useState([]);
  const [data, setData] = useState(ProductDB);
  const [productsToDisplay, setProductsToDisplay] = useState(ProductDB);
  const [totalWishListItem, setTotalWishListItem] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [totalCartPrice, setTotalCartPrice] = useState();
  const [rangeValue, setRangeValue] = useState(0);

  const categoryClickHandler = (category) => {
    console.log(category);
    const checkCategory = data.filter(
      (product) => product.productCategory === category
    );
    // console.log(checkCategory);
    setProductsToDisplay(checkCategory);
  };

  //Cart Buttton
  const handleCartBtn = (product1) => {
    const isAdded = cartItem.find((item) => item.id === product1.id);
    if (!isAdded) {
      setCartItem([...cartItem, { ...product1, quantity: 1 }]);
    } else {
      const updatedCartItems = cartItem.map((item) => {
        if (item.id === product1.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItem(updatedCartItems);
    }

    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  const removeFromCart = (productID) => {
    const removedItem = cartItem.filter((item) => item.id !== productID);
    setCartItem(removedItem);
  };

  //Increase the Quantity in the Cart
  const increaseProductBtn = (product) => {
    const updatedCartItems = cartItem.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItem(updatedCartItems);
  };

  //Decrease the Quantity in the Cart
  const decreaseProductBtn = (product) => {
    const updatedCartItems = cartItem.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItem(updatedCartItems);
  };

  //WishList Button
  const handleWishListBtn = (product2) => {
    const isAdded = wishlistItem.find((item) => item.id === product2.id);
    if (!isAdded) {
      setWishlistItem([...wishlistItem, product2]);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    } else {
      setTotalWishListItem(totalWishListItem + 1);
    }
  };
  const increaseWishListTotal = () => {
    setTotalWishListItem(totalWishListItem + 1);
  };
  const removeFromWishList = (productID) => {
    const removedItem = wishlistItem.filter((item) => item.id !== productID);
    setWishlistItem(removedItem);

    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };
  //Handle All Filters

  //Range Filter
  const rangeFilter = (event) => {
    const productInRange = event.target.value;
    setRangeValue(productInRange);
    if (productInRange) {
      const product = data.filter((item) => item.price <= productInRange);
      setProductsToDisplay(product);
    } else {
      setProductsToDisplay(data);
    }
  };

  //ClearFilter
  const clearFilter = () => {
    setProductsToDisplay(data);
  };

  const handleSearch = (event) => {
    const searchProduct = event.target.value;
    if (searchProduct) {
      const product = data.filter(({ name }) =>
        name.toUpperCase().includes(searchProduct.toUpperCase())
      );

      setProductsToDisplay(product);
    } else {
      setProductsToDisplay(data);
    }
  };

  const handleCategory = (event) => {
    const userInput = event.target.value;

    if (userInput && event.target.checked) {
      const selectedCategory = ProductDB.filter(
        (item) => item.category.toUpperCase() === userInput.toUpperCase()
      );

      setProductsToDisplay(selectedCategory);
    } else {
      setProductsToDisplay(data);
    }
  };

  const handleSizes = (event) => {
    const userInput = event.target.value;

    if (userInput && event.target.checked) {
      const selectedSizes = ProductDB.filter(
        (item) => item.size.toUpperCase() === userInput.toUpperCase()
      );

      setProductsToDisplay(selectedSizes);
    } else {
      setProductsToDisplay(data);
    }
  };

  const handleRating = (event) => {
    const userInput = event.target.value;

    if (userInput && event.target.checked) {
      const selectedRating = ProductDB.filter(
        (item) => item.rating >= Number(userInput)
      );

      setProductsToDisplay(selectedRating);
    } else {
      setProductsToDisplay(data);
    }
  };

  const handleSortingLowToHigh = () => {
    const filterSort = [...data].sort((a, b) => a.price - b.price);

    setProductsToDisplay(filterSort);
  };

  const handleSortingHighToLow = () => {
    const filterSort = [...data].sort((a, b) => b.price - a.price);
    setProductsToDisplay(filterSort);
  };

  return (
    <BootContext.Provider
      value={{
        categoryClickHandler,
        handleCartBtn,
        handleWishListBtn,
        cartItem,
        wishlistItem,
        handleCategory,
        data,
        handleSizes,
        handleRating,
        handleSortingLowToHigh,
        handleSortingHighToLow,
        removeFromCart,
        productsToDisplay,
        removeFromWishList,
        totalWishListItem,
        increaseWishListTotal,
        handleSearch,
        showSuccessMessage,
        clearFilter,
        increaseProductBtn,
        decreaseProductBtn,
        rangeFilter,
        rangeValue,
        setTotalCartPrice,
        totalCartPrice,
      }}
    >
      {" "}
      {children}{" "}
    </BootContext.Provider>
  );
};
