import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { HiShoppingCart } from "react-icons/hi";
import { IoIosHelpBuoy } from "react-icons/io";
import { HiHome } from "react-icons/hi2";
import { setIsLoggedin, setUname, setUserDetails } from "../utils/userSlice";
import { HiArrowCircleRight } from "react-icons/hi";
function Header() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userData = useSelector((store) => store.user.userData);
  const user = useSelector((store) => store.user.uname);
  console.log(userData);

  const items = useSelector((store) => store.cart.items);

  const isLoggedin = useSelector((store) => store.user.isLoggedin);
  function handleLogout() {
    dispatch(setIsLoggedin(false));
    dispatch(setUname(""));
    dispatch(setUserDetails({}));
  }

  return (
    <div className="flex justify-between bg-green-100">
      <div className="flex" onClick={() => navigate("/")}>
        <img
          className="w-10 h-14 my-4  "
          src={"../../public/images/logo.png"}
          alt="burger"
        />
        <span className="my-4 p-4 text-center font-bold text-orange-500">
          FOODIE APP
        </span>
      </div>
      <div>
        <ul className="flex m-4 p-4 font-bold text-gray-700">
          <li className="px-2 ">
            <Link to="/">
              <div className="flex">
                <HiHome className="m-1" />
                <p>Home</p>
              </div>
            </Link>
          </li>

          <li className="px-2">
            <Link to="/help">
              <div className="flex">
                <IoIosHelpBuoy className="m-1" />
                <p>Help</p>
              </div>
            </Link>
          </li>
          <li className="px-2 ">
            <Link to="/cart">
              <div className="flex">
                <HiShoppingCart className="mx-1 my-1.5" />
                <p>Cart-{items.length}</p>
              </div>
            </Link>
          </li>

          {user !== "" && (
            <li className="px-2">
              <button className="border-2 rounded-full border-orange-400 px-2 bg-white  text-gray-700">
                {user[0].toUpperCase()}
              </button>
            </li>
          )}

          <li className="px-2">
            {isLoggedin ? (
              <button className="flex gap-1" onClick={handleLogout}>
                Logout
                <HiArrowCircleRight className="my-1" />
              </button>
            ) : (
              <Link to="/login">
                <button className="flex gap-1">
                  Login
                  <HiArrowCircleRight className="my-1" />
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

Header.propTypes = {
  uname: PropTypes.string.isRequired,
};
{
  /**
  <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="burger" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  
  */
}
