import { useState } from "react";
import Item from "@/components/Item";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Pagination = () => {
  const data = useSelector((state: RootState) => state.data.filteredData);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  return (
    <div>
      <div className="py-14 flex gap-16 flex-wrap min-h-[960px]">
        {currentItems.map((country) => (
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
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          First
        </button>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
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
