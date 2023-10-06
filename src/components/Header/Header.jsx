import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const loc = useLocation();
  const handleLogOut = () => {
    logOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={loc.pathname === "/" ? "absolute w-full" : ""}>
      <nav className="flex flex-col md:flex-row justify-between items-center mx-5 p-3">
        <div>
          <img src="https://i.ibb.co/8ss0Ff7/Logo.png" alt="" />
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
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="btn text-white bg-[#F9A51A] hover:bg-[#F9A51A] text-lg font-semibold"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            className="btn text-white bg-[#F9A51A] hover:bg-[#F9A51A] text-lg font-semibold"
            to="/login"
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
