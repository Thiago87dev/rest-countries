"use client";
// Components
import FormSearch from "@/components/FormSearch";
import Pagination from "@/components/Pagination";
import { useEffect } from "react";
// Redux
import { useDispatch } from "react-redux";
import { setData } from "@/redux/data/slice";

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
      <div className="py-10">
        <FormSearch />
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}
