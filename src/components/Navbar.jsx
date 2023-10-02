import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { useGlobalContext } from "../context";
import Search from "./Search";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDropbox } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Navbar = () => {
  const { setSidebar } = useGlobalContext();
  const { city } = useGlobalContext();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function handleLoc() {
    setSidebar(true);
  }
  return (
    <nav className="">
      <ul className="list-none flex flex-wrap justify-evenly items-center bg-slate-200 h-18 text-xl ">
        <Link to="/">
          {/* <li>
            {" "}
            <AiOutlineDropbox />
            Rental.in
          </li> */}
          <img src="src/assets/images/logo.jpg" className="w-24 h-12 m-2" />
        </Link>

        <li className="px-10">
          <button onClick={() => handleLoc()} className="text-xl">
            <GrLocation /> {city}
          </button>
        </li>

        <li className="px-10">
          <Link to="/rent">Rent</Link>
        </li>
        <li>
          <Search />
        </li>
        <li className="px-10">
          <Link to="/cart">
            <AiOutlineShoppingCart />
          </Link>
        </li>
        <li className="px-10">
          <Link to="/login">Login</Link>
        </li>
        <li className="px-10">
          <Link to="/wishlist">
            <AiOutlineHeart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
