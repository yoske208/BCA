import { NavLink } from "react-router-dom";
import Link_nav_bar from "../../Components/Link_nav_bar";

const Header = () => {
  return (
    <>
      <header >
        <h1>Business Card app</h1>
        {/* <ul className="navlink">
          <li><Link_nav_bar to="/users/home" InnerText="HOME"></Link_nav_bar> </li>
          <li><Link_nav_bar to="/users/about" InnerText="ABOUT"></Link_nav_bar> </li>
          <li><Link_nav_bar to="/users/home" InnerText="CARD"></Link_nav_bar> </li>
          <li><Link_nav_bar to="/users/Users" InnerText="USERS"></Link_nav_bar> </li>
            
         
        </ul> */}

        <div className="navlink">
          <NavLink to={"users/home"}>HOME</NavLink>
          <NavLink to={"users/ABOUT"}>ABOUT</NavLink>
          <NavLink to={"users/Card"}>CARD</NavLink>
          <NavLink to={"/users"}>USERS</NavLink>
          {/* <NavLink to={"/users/add"}>ADD</NavLink> */}
        </div>
      </header>
    </>
  );
};

export default Header;
