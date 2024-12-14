"use client";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import { toggleDarkModeRedux } from "@/redux/darkMode/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Navbar = () => {
  const dispatch = useDispatch()
  
  const darkMode = useSelector((state: RootState) => state.darkMode)

  const toggleDarkMode = () => {
    dispatch(toggleDarkModeRedux())
  };
  return (
    <div className="w-full px-3 md:px-32 py-6 bg-colorWhite text-colorVeryDarkBlue dark:text-colorWhite dark:bg-colorDarkBlue">
      <div className="flex justify-between">
        <h1 className="font-extrabold  md:text-2xl">Where in the world?</h1>
        <div className="flex items-center gap-2 select-none">
          <div onClick={toggleDarkMode} className="cursor-pointer">
            {darkMode ? (
              <p className="pr-1">
                <FaMoon />
              </p>
            ) : (
              <p>
                <FaSun size={20} />
              </p>
            )}
          </div>
          <div className="font-semibold text-sm md:text-lg">
            {darkMode ? <p>Dark Mode</p> : <p>Light Mode</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
