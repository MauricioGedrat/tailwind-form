import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="bg-header py-8">
      <div className="ml-32">
        <Logo />
      </div>

      <span className="text-gray-800 border-transparent border-b-2 hover:border-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium uppercase">
        Home
      </span>
    </div>
  );
};

export default Header;
