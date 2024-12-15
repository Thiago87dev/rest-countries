"use client";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setFilteredData } from "@/redux/data/slice";

const FormSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);

  useEffect(() => {
    const filteredCountries = data.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(setFilteredData(filteredCountries));
  }, [searchTerm, data, dispatch]);

  return (
    <form className="relative">
      <input
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        type="text"
        className="dark:bg-colorDarkBlue py-4 rounded-md w-[426px] px-16 dark:text-colorWhite bg-colorWhite placeholder-colorVeryDarkBlue dark:placeholder-colorWhite text-colorVeryDarkBlue drop-shadow-md"
        placeholder="Search for a country..."
      />
      <button className="absolute text-colorVeryDarkBlue dark:text-colorWhite inset-y-0 flex items-center left-7">
        <FaSearch />
      </button>
    </form>
  );
};

export default FormSearch;
