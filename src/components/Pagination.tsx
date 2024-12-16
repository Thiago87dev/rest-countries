import Item from "@/components/Item";
import { useSelector, useDispatch } from "react-redux";
import {setCurrentPage} from '@/redux/data/slice'
import { RootState } from "@/redux/store";

const Pagination = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.data.filteredData);
  const currentPage = useSelector((state: RootState) => state.data.currentPage);

  //pagination
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => [
    dispatch(setCurrentPage(page))
  ]

  return (
    <div>
      <div className="py-14 flex gap-16 flex-wrap min-h-[960px]">
        {currentItems
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((country) => (
            <div key={country?.name}>
              <Item
                item={{
                  flag: country?.flag,
                  name: country?.name,
                  population: country?.population,
                  region: country?.region,
                  capital: country?.capital,
                }}
              />
            </div>
          ))}
      </div>
      <div className="my-10 flex items-center justify-center gap-12 w-[620px] mx-auto dark:text-colorWhite">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          First
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            handlePageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Pagination;
