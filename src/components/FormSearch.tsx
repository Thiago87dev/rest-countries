'use client'
import { FaSearch } from "react-icons/fa";

const FormSearch = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className="relative">
      <input
        type="text"
        className="dark:bg-colorDarkBlue py-4 rounded-md w-[426px] px-16 dark:text-colorWhite bg-colorWhite placeholder-colorVeryDarkBlue dark:placeholder-colorWhite text-colorVeryDarkBlue drop-shadow-md"
        placeholder="Search for a country..."
      />
      <button
        onClick={handleSearch}
        className="absolute text-colorVeryDarkBlue dark:text-colorWhite inset-y-0 flex items-center left-7"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default FormSearch;
