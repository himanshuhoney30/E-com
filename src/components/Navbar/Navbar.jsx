import React , { useEffect }from "react";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../Features/CartSlice';
import { Link } from "react-router-dom";


const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.allCart)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getCartTotal())
  },)

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </Link>
          </div>
          <div className="flex justify-between items-center gap-4">
            <Link to="/Cart">
            <button
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
              >
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              <p className=" font-bold ">Cart({totalQuantity}) </p>
            </button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
