
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "@/redux/data/slice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";


const FormSearch = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState)=> state.data.searchText)
  
  const [inputValue, setInputValue] = useState(searchText);

  useEffect(()=> {
    setInputValue(searchText)
  },[searchText])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    dispatch(setSearchText(e.target.value));
  };

  return (
    <form className="relative">
      <input
      value={inputValue}
        onChange={handleSearch}
        type="text"
        className="dark:bg-colorDarkBlue py-4 rounded-md w-[310px] sm:w-[354px] md:w-[426px] px-16 dark:text-colorWhite bg-colorWhite placeholder-colorVeryDarkBlue dark:placeholder-colorWhite text-colorVeryDarkBlue drop-shadow-md"
        placeholder="Search for a country..."
      />
      <div className="absolute text-colorVeryDarkBlue dark:text-colorWhite inset-y-0 flex items-center left-7">
        <FaSearch />
      </div>
    </form>
  );
};

export default FormSearch;
