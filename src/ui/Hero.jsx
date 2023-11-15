import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Hero() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/product");
  }
  return (
    <div className="mx-auto  mt-12 flex max-w-6xl items-center gap-x-4  lg:mt-14">
      <div className=" mx-7 space-y-10 py-5   md:pr-28  lg:pr-1">
        <h1 className="flex-grow text-3xl   font-bold text-cyan-900 sm:text-6xl   md:text-6xl  ">
          More Than a Store – Your Lifestyle Companion.
        </h1>
        <p className=" text-sm text-slate-800 sm:pr-12 sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <Button handleClick={handleClick}>Our Product</Button>
      </div>

      <img
        className="   hidden rounded-lg lg:-mt-7 lg:inline-block lg:h-[350px]"
        src="src\assets\livingroom.jpg"
      />
    </div>
  );
}

export default Hero;
