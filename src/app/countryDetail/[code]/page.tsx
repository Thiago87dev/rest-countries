"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";

const CountryDetail = () => {
  const { code } = useParams();
  const countries = useSelector((state: RootState) => state.data.data);
  const filteredCountry = countries.filter(
    (country) => country.alpha3Code === code
  );
  return (
    <div className="text-colorWhite">
      {filteredCountry.map((country) => (
        <div key={country.alpha3Code}>
          <Image alt="flag" src={`${country.flag}`} width={200} height={200}/>
          <p>{country.name}</p>
          <p>{country.nativeName}</p>
          <p>{country.population.toLocaleString()}</p>
          <p>{country.region}</p>
          <p>{country.subregion}</p>
          <p>{country.capital}</p>
          <p>{country.topLevelDomain}</p>
          <div>
            {country.currencies.map((curr) => (
              <p key={country.alpha2Code}>{curr.name} </p>
            ))}
          </div>
          <div>
            {country.languages.map((lang) => (
              <p key={country.alpha3Code}>{lang.name}</p>
            ))}
          </div>
          <div>
            {country.borders.map((border, index) => (
              <p key={index}>{border}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetail;
