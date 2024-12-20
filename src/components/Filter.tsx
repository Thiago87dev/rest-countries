
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRegion } from "@/redux/data/slice";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";

const Filter = () => {
  const selectdRegion = useSelector((state: RootState) => state.data.selectedRegion)

  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const [selectedContinent, setSelectedContinent] = useState(selectdRegion);

  const dispatch = useDispatch();

  useEffect(()=>{
    setSelectedContinent(selectdRegion)
  },[selectdRegion])

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedRegion(e.target.value));
    setSelectedContinent(e.target.value);
  };
  
  const handleCloseFilter = () => {
    dispatch(setSelectedRegion(''));
    setSelectedContinent('');
  };

  return (
    <div className="flex items-center gap-2">
      {selectedContinent && (
        <div onClick={handleCloseFilter} className="dark:text-colorWhite text-colorVeryDarkBlue cursor-pointer rounded-full active:scale-90 hover:dark:text-gray-300 hover:text-gray-500">
          <IoClose size={30} />
        </div>
      )}
      <select
        value={selectedContinent}
        onChange={handleFilterChange}
        className="dark:bg-colorDarkBlue dark:text-colorWhite w-full py-4 px-6 rounded-md bg-colorWhite text-colorVeryDarkBlue drop-shadow-md cursor-pointer"
      >
        <option className="cursor-pointer" hidden value="">
          Filter by Region
        </option>
        {continents.map((continent) => (
          <option className="cursor-pointer" key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
