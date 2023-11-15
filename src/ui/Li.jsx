import { Link } from "react-router-dom";

function Li({ children, to }) {
  return (
    <Link
      className=" hidden  transition-all duration-300
           hover:bg-cyan-700 sm:rounded-lg sm:px-2 sm:py-1 md:block"
      to={to}
    >
      {children}
    </Link>
  );
}

export default Li;
