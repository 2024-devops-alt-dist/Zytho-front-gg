import { useEffect, useState } from "react";
import BeerInterface from "../../entity/BeerInterface";
import BeerService from "../../services/BeerService";
import BrewerieService from "../../services/BrewerieService";
import BrewerieInterface from "../../entity/BrewerieInterface";
import CardBeer from "./component/CardBeer";
import { useParams } from "react-router-dom";

const DetailBeer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<BeerInterface>();
  const [brewerie, setBrewerie] = useState<BrewerieInterface>();

  const [beersService] = useState(new BeerService());
  const [brewerieService] = useState(new BrewerieService());

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const beer = await beersService.findByIdBeer(Number(id));
        setBeer(beer);
        const brewerie = await brewerieService.findByIdBrewerie(
          beer.id_brewerie
        );
        setBrewerie(brewerie);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBeer();
    console.log(brewerie);
  }, [beersService, id]);

  return beer && <CardBeer beer={beer} element="detail" />;
};
export default DetailBeer;
