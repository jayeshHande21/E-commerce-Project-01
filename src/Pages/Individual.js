import { ProductDB } from "./ProductDB";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BootContext } from "..";
// import { BootProvider } from "../Context/BootContext";

export const Individual = () => {
  const { data } = useContext(BootContext);
  const { id } = useParams();

  const showIndividual = data.filter((product) => product.id === id);
  console.log(showIndividual);

  return (
    <div>
      <h1>This is Individual Page </h1>
      {showIndividual.map((product) => {
        return (
          <div key={product.name} className="product-card">
            <div className="productList">
              {product.name}
              <br />
              {product.details} <br />
              {product.currency} {product.price} <br />
              <br />
              Category : {product.category} <br />
              Size : {product.size} <br />
              Rating : {product.rating} <br />
            </div>
          </div>
        );
      })}
    </div>
  );
};
