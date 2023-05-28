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
              <img src={product.img} alt={product.name}></img>
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
