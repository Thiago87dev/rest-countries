"use client";
// Components
import FormSearch from "@/components/FormSearch";
import Pagination from "@/components/Pagination";
import { useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
import { setData } from "@/redux/data/slice";
import Filter from "@/components/Filter";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const result = await response.json();
        dispatch(setData(result));
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <div className="flex items-center justify-between py-10">
        <div>
          <FormSearch />
        </div>
        <div>
          <Filter/>
        </div>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}
