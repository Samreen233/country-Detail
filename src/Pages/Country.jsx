import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../API/postAPI";
import CountryCard from "../Components/Layout/CountryCard";
import Loader from "../Components/UI/Loader";
import "../App.css";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
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

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curcountry, index) => {
          return <CountryCard country={curcountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
