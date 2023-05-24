import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

export const UserProfile = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <div className="user">
      <div className="userProfile">
        <h3>Profile Details</h3> <hr />
        <p>
          <span className="profile"> Name</span> : Jayesh Hande <br />
        </p>
        <p>
          {" "}
          <span className="profile">Email</span>: jayeshhande00@gmail.com <br />
        </p>
        <NavLink to="/Login">
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button>
        </NavLink>
      </div>
    </div>
  );
};
