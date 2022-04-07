import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg fixed">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl hover:bg-indigo-600 hover:text-white">
            BRAND.
          </h1>
          <ul className="hidden md:flex cursor-pointer">
            <li className="cursor-pointer hover:font-bold">
              <Link to="Home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:font-bold">
              <Link to="About" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li className="cursor-pointer hover:font-bold">
              <Link to="Support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li className="cursor-pointer hover:font-bold">
              <Link to="Platforms" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li className="cursor-pointer hover:font-bold">
              <Link to="Pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-8">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:font-bold">
          <Link onClick={handleClose} to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:font-bold">
          <Link
            onClick={handleClose}
            to="About"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:font-bold">
          <Link
            onClick={handleClose}
            to="Support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:font-bold">
          <Link
            onClick={handleClose}
            to="Platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer hover:font-bold">
          <Link
            onClick={handleClose}
            to="Pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
