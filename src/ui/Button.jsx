function Button({ children, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className=" rounded-lg bg-teal-400  px-2 py-2 text-sm text-slate-200 transition-all duration-200 hover:bg-teal-600 active:scale-90 sm:py-3 sm:text-base  sm:font-bold md:py-3"
    >
      {children}
    </button>
  );
}

export default Button;
