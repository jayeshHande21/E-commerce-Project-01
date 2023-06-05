import { useContext, useState } from "react";
import { BootContext } from "../../Context/BootContext";

export const Address = () => {
  const { cartItem, totalCartPrice } = useContext(BootContext);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    dist: "",
    state: "",
    number: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const handleClick = () => {
    setShowForm(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    setSubmitted(true);
  };

  const handleFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="addressContent">
      <div className="orderList">
        <h3>Address Details</h3>
        <div className="demo-Address">
          {" "}
          <hr />
          <h2>Prince Danial</h2>
          <input type="radio" />
          3204 Sinhgad Campus,Vadgaon <br />
          Dist : Pune , Maharastra <br />
          <b>Mobile Number</b> 1294129192
        </div>
        {submitted && submittedData && (
          <div className="">
            {" "}
            <hr />
            <h2> {submittedData.name}</h2>
            <input type="radio" />
            Address: {submittedData.address} <br /> Dist {submittedData.dist} ,{" "}
            {submittedData.state}
            <br />
            <b>Mobile Number:</b>
            {submittedData.number}
          </div>
        )}{" "}
        <hr />
        <div className="addNewAdd">
          <button onClick={handleClick} className="addressBtn">
            <span className="btnContent">+</span>
          </button>
          <h3>Add New Address Here</h3>
        </div>
      </div>

      {showForm && !submitted && (
        <div className="fullscreen-form">
          <form onSubmit={handleSubmit}>
            {/* Add your form fields here */}
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              required
              onChange={handleFormData}
            />{" "}
            <br />
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Address"
              required
              onChange={handleFormData}
            />
            <br />
            <input
              type="text"
              name="dist"
              value={formData.dist}
              placeholder="Dist"
              required
              onChange={handleFormData}
            />{" "}
            <br />
            <input
              type="text"
              name="state"
              value={formData.state}
              placeholder="State"
              required
              onChange={handleFormData}
            />{" "}
            <br />
            <input
              type="number"
              name="number"
              value={formData.number}
              placeholder="Number"
              onChange={handleFormData}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      <div className="priceDetails">
        <h1>Price Details</h1>
        <ul>
          <li>
            {" "}
            Price ({cartItem.length} Item){" "}
            <span className="right">RS {totalCartPrice} </span>
          </li>
          <li>
            {" "}
            Discount <span className="right"> RS 0 </span>
          </li>
          <li>
            {" "}
            Delivary Charges <span className="right">RS 100</span>{" "}
          </li>{" "}
        </ul>
        <hr />
        <b>Total</b> : {totalCartPrice + 100}
        <button className="orderBtn">
          <span>Place Order</span>
        </button>
      </div>
    </div>
  );
};
