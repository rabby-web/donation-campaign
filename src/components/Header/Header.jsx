import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <div className="absolute w-full">
      <nav className="flex flex-col md:flex-row justify-between items-center mx-5 p-3">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className="flex gap-5 text-xl font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
