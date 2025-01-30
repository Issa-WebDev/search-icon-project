import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");

  const handleSearch = () => {
    setShowInput((prev) => !prev);
    setBgColor("bg-black");
  };

  const handleHiddenSearchBar = (e) => {
    if (e.target.id === "contenair") {
      setShowInput((prev) => !prev);
      setBgColor("bg-white");
    }
  };
  return (
    <div
      id="contenair"
      className={`${bgColor} flex items-center justify-center h-screen`}
      onClick={handleHiddenSearchBar}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search something..."
          className="border-orange-400 outline-orange-500 w-[400px] border text-white px-3 py-2 rounded-md placeholder:italic"
        />
      ) : (
        <FaSearch size={20} onClick={handleSearch} className="cursor-pointer" />
      )}
    </div>
  );
};

export default HiddenSearchBar;
