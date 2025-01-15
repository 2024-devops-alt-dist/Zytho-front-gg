import { useEffect, useState } from "react";
import BrewerieInterface from "../../entity/BrewerieInterface";
import BrewerieService from "../../services/BrewerieService";
import { useParams } from "react-router-dom";
import ListBeers from "../beer/ListBeers";
import CardBrewerie from "./CardBrewerie";

const DetailBrewerie = () => {
  const [brewerie, setBrewerie] = useState<BrewerieInterface>();
  const [brewerieService] = useState(new BrewerieService());
  const { id } = useParams();

  useEffect(() => {
    const fetchBrewerie = async () => {
      try {
        const brewerie = await brewerieService.findByIdBrewerie(Number(id));
        console.log(brewerie);
        setBrewerie(brewerie);
      } catch (error) {
        console.error("Error fetching brewerie:", error);
      }
    };
    fetchBrewerie();
  }, [brewerieService]);

  return (
    brewerie && (
      <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
        <CardBrewerie brewerie={brewerie} element="detail" />
        <ListBeers idBrewerie={brewerie.id_brewerie} />
      </div>
    )
  );
};
export default DetailBrewerie;
