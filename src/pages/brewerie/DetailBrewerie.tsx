import { useEffect, useState } from "react";
import BrewerieInterface from "../../entity/BrewerieInterface";
import BrewerieService from "../../services/BrewerieService";
import { useParams } from "react-router-dom";
import ListBeers from "../beer/ListBeers";
import CardBrewerie from "./CardBrewerie";

const DetailBrewerie = () => {
  const [brewerie, setBrewerie] = useState<BrewerieInterface>();
  const { id } = useParams();
  const [brewerieService] = useState(new BrewerieService());

  useEffect(() => {
    brewerieService
      .findById<BrewerieInterface>(Number(id))
      .then((data) => {
        setBrewerie(data);
        console.log(brewerie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
