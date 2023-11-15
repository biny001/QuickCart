import { useState } from "react";
import { Link } from "react-router-dom";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mr-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" relative cursor-pointer p-1 md:hidden"
      >
        {!isOpen ? (
          <svg
            width="40px"
            height="40px"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
                fill="#ffffff"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
                fill="#ffffff"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
                fill="#ffffff"
              />{" "}
            </g>
          </svg>
        ) : (
          <svg
            width="35px"
            height="40px"
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
                d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                fill="#ffffff"
              />{" "}
            </g>
          </svg>
        )}

        {isOpen && (
          <ul className="absolute -left-10 mt-2 flex w-28 flex-col items-center justify-between  bg-cyan-800/75 py-3 text-center text-sm  md:text-lg">
            <Link className=" -mt-1 py-3 hover:w-full hover:bg-cyan-900" to="/">
              Home
            </Link>

            <Link className=" py-3 hover:w-full hover:bg-cyan-900" to="/about">
              About
            </Link>
            <Link
              className=" py-3 hover:w-full hover:bg-cyan-900"
              to="/product"
            >
              Product
            </Link>
            <Link
              className=" -mb-3 py-3 hover:w-full hover:bg-cyan-900"
              to="/cart"
            >
              Cart
            </Link>
          </ul>
        )}
      </button>
    </div>
  );
}

export default DropDown;
