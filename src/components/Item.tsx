import Image from "next/image";
import { ItemProps } from "@/types";
import Link from "next/link";

interface ItemComponentProps {
  item: ItemProps;
}

const Item = ({ item }: ItemComponentProps) => {

  return (
    <div>
      <div>
        <Link href={`/countryDetail/${item.alpha3Code}`}>
          <Image
            className="rounded-t-md w-[245px] h-[140px] object-cover"
            alt="bandeira"
            src={item.flag}
            width={245}
            height={245}
          />
        </Link>
      </div>
      <div className="dark:text-colorWhite flex flex-col w-[245px] gap-4 drop-shadow-md bg-colorWhite dark:bg-colorDarkBlue rounded-b-md">
        <div className="flex flex-col gap-4 p-6 pb-10">
          <Link href={`/countryDetail/${item.alpha3Code}`}>
            <h1 className="text-xl font-bold">{item.name}</h1>
          </Link>
          <div className="flex flex-col text-sm gap-1 font-semibold">
            <p>
              Population:
              <span className="pl-1 font-normal  dark:text-colorVeryLightGray">
                {item.population.toLocaleString("pt-BR")}
              </span>
            </p>
            <p>
              Region:
              <span className="pl-1 font-normal dark:text-colorVeryLightGray">
                {item.region}
              </span>
            </p>
            <p>
              Capital:
              <span className=" pl-1 font-normal dark:text-colorVeryLightGray">
                {item.capital}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
