"use client";

import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchText } from "@/redux/data/slice";


const FormSearch = () => {
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    <form className="relative">
      <input
        onChange={handleSearch}
        type="text"
        className="dark:bg-colorDarkBlue py-4 rounded-md w-[426px] px-16 dark:text-colorWhite bg-colorWhite placeholder-colorVeryDarkBlue dark:placeholder-colorWhite text-colorVeryDarkBlue drop-shadow-md"
        placeholder="Search for a country..."
      />
      <div className="absolute text-colorVeryDarkBlue dark:text-colorWhite inset-y-0 flex items-center left-7">
        <FaSearch />
      </div>
    </form>
  );
};

export default FormSearch;
