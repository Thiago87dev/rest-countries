"use client";
// Components
import FormSearch from "@/components/FormSearch";
import Pagination from "@/components/Pagination";
import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/redux/data/slice";
import Filter from "@/components/Filter";
import { RootState } from "@/redux/store";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data.length === 0) {
          const response = await fetch("/data.json");
          const result = await response.json();
          dispatch(setData(result));
        }
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      }
    };
    fetchData();
  }, [dispatch, data]);

  return (
    <div>
      <div className="flex flex-col gap-8 md:gap-0 items-start md:flex-row px-[10px] md:px-0 md:items-center justify-between py-10">
        <div>
          <FormSearch />
        </div>
        <div>
          <Filter />
        </div>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}
