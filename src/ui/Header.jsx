import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import Li from "./Li";

function Header() {
  return (
    <nav className=" flex  items-center justify-between bg-cyan-800  px-5 py-3  text-slate-200">
      <h1 className=" text-2xl capitalize  md:ml-9 md:text-3xl ">QC</h1>
      <DropDown />
      <div className="hidden md:mr-4 md:flex md:w-96 md:items-center  md:justify-around md:text-xl">
        <Li to="/">Home</Li>

        <Li to="/about">About</Li>
        <Li to="/product">Product</Li>
        <Link
          className=" rounded-full p-3 transition-all hover:bg-cyan-700"
          to="/cart"
        >
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
