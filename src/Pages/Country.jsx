import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../API/postAPI";
import CountryCard from "../Components/Layout/CountryCard";
import Loader from "../Components/UI/Loader";
import "../App.css";
import { SearchFilter } from "../Components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountryData();

      startTransition(() => {
        setCountries(res.data);
      });
    };

    fetchData();
  }, []);
  if (isPending) return <Loader />;
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };
  const filterCountires = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={setFilter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountires.map((curcountry, index) => {
          return <CountryCard country={curcountry} key={index} />;
        })}
      </ul>
      <Loader />
    </section>
  );
};

export default Country;
