"use client";
import { CountryProps } from "@/types";
import FormSearch from "@/components/FormSearch";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";

export default function Home() {
  const [data, setData] = useState<CountryProps[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div >
      <div className="py-10">
        <FormSearch />
      </div>
      <div>
        <Pagination data={data}/>
      </div>
      
    </div>
  );
}
