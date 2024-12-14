
import fs from "fs";
import path from "path";

import Item from "@/components/Item";
import { CountryProps } from "@/types";
import FormSearch from "@/components/FormSearch";


export default function Home() {
  const filePath = path.join(process.cwd(), "data.json");
  const data: CountryProps[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return (
    <div>
      <div className="py-10">
        <FormSearch/>
        <div className="py-14 flex gap-16 flex-wrap">
          {data.map((country) => (
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
      </div>
    </div>
  );
}
