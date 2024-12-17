"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

const CountryDetail = () => {
  const { code } = useParams();
  const countries = useSelector((state: RootState) => state.data.data);
  const filteredCountry = countries.filter(
    (country) => country.alpha3Code === code
  );
  return (
    <div className="my-20">
      <div className="flex flex-col">
        <div>
          <Link href={"/"}>
            <button className="flex  items-center gap-2 bg-colorWhite text-colorVeryDarkBlue dark:text-colorWhite dark:bg-colorDarkBlue px-10 py-2 rounded-md drop-shadow-lg active:scale-95">
              <FaArrowLeftLong size={20} /> Back
            </button>
          </Link>
        </div>
        {filteredCountry.map((country) => (
          <div
            className="flex justify-between items-center mt-20"
            key={country.alpha3Code}
          >
            <div>
              <Image
                alt="flag"
                src={`${country.flag}`}
                width={560}
                height={560}
              />
            </div>
            <div className="flex flex-col gap-10 dark:text-colorWhite text-colorVeryDarkBlue w-[40%]">
              <div>
                <h1 className="font-bold text-3xl">{country.name}</h1>
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col gap-2">
                  <p>
                    <span className="font-semibold mr-2">Native Name:</span>
                    {country.nativeName}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Population:</span>
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Region:</span>
                    {country.region}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Sub Region:</span>
                    {country.subregion}
                  </p>
                  <p>
                    <span className="font-semibold mr-2">Capital:</span>
                    {country.capital}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>
                    <span className="font-semibold mr-2">
                      Top Level Domain:
                    </span>
                    {country.topLevelDomain}
                  </p>
                  <div className="flex">
                    <span className="font-semibold mr-2">Currencies:</span>
                    {country.currencies &&
                      country.currencies.map((curr, index) => (
                        <p key={index}>{curr.name} </p>
                      ))}
                  </div>
                  <div className="flex">
                    <span className="font-semibold mr-2">Languages:</span>
                    {country.languages.map((lang, index) => (
                      <p key={index}>{lang.name}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`flex ${country.borders && country.borders.length > 3 ? 'items-start': 'items-center' } text-sm`}>
                {country.borders && <span className="font-semibold mr-2">Border Countries:</span>}
                <div className="flex gap-2 flex-wrap">
                  {country.borders &&
                    country.borders.map((border, index) => {
                      const borderCountry = countries.find((c) => c.alpha3Code === border)
                      return (
                        <p
                          className="flex rounded-md dark:bg-colorDarkBlue py-1 px-6 gap-1"
                          key={index}
                        >
                          {borderCountry?.name}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryDetail;
