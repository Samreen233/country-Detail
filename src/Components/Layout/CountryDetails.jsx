import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../API/postAPI";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountryIndData(params.id);

      startTransition(() => {
        setCountries(res.data);
      });
    };

    fetchData();
  }, []);
  if (isPending) return <Loader />;
  console.log("params: ", params);
  return;
};

export default CountryDetails;
