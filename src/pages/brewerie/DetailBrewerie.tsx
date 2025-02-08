import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListBeers from "../beer/ListBeers";
import CardBrewerie from "./CardBrewerie";
import { useBrewerieStore } from "../../store/useBrewerieStore";
import { BrewerieInterface } from "../../entity/BrewerieInterface";

const DetailBrewerie = () => {
  const { id } = useParams();
  const { getBrewerieById, fetchBrewerieById, breweries } = useBrewerieStore();
  const [brewerie, setBrewerie] = useState<BrewerieInterface | null>();

  useEffect(() => {
    if (getBrewerieById(Number(id))) {
      setBrewerie(getBrewerieById(Number(id)));
    } else {
      fetchBrewerieById(Number(id));
      setBrewerie(breweries.find((b) => b.id_brewerie === Number(id)));
    }
  }, [breweries]);

  return (
    brewerie && (
      <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
        <CardBrewerie brewerie={brewerie} element="detail" />
        <ListBeers idBrewerie={brewerie?.id_brewerie} />
      </div>
    )
  );
};
export default DetailBrewerie;
