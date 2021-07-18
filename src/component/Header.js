import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center lg:mx-20 mx-5 pt-6">
      <div className="logo text-lg">
        <img
          src="https://res.cloudinary.com/evergreenx/image/upload/v1626017966/JEZ_SALAD_fuuirs.svg"
          alt="logo"
          className=""
        />
      </div>

      <nav className="nav w-96 hidden lg:block ">
        <ul className="flex justify-around text-base capitalize ">
          <li className="text-primary font-bold cursor-pointer">Home</li>

          <li className="font-medium cursor-pointer">Menu</li>

          <li className="font-medium cursor-pointer">Contact</li>

          <li className="font-medium cursor-pointer">About us</li>
        </ul>
      </nav>

      <div className="signinbtn">
        <button className=" px-11 rounded-full py-4 border-0 bg-primary font-semibold text-white">
          Sign
        </button>
      </div>
    </header>
  );
};

export default Header;
