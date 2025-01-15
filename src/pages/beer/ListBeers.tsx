import { useEffect, useState } from "react";
import BeerService from "../../services/BeerService";
import BeerInterface from "../../entity/BeerInterface";
import CardBeer from "./component/CardBeer";
interface ListBeersProps {
  idBrewerie?: number;
}

const ListBeers = ({ idBrewerie }: ListBeersProps) => {
  const [beers, setBeers] = useState<BeerInterface[]>([]);
  const [beersService] = useState(new BeerService());

  useEffect(() => {
    beersService.findAllBeers().then((data) => {
      if (idBrewerie) {
        const beer = data.filter((b) => b.id_brewerie === idBrewerie);
        setBeers(beer);
      } else {
        setBeers(data);
      }
    });
  }, [beersService]);

  return (
    <>
      <div className="flex flex-col justify-content-center items-center gap-10 w-[80%]">
        {beers &&
          beers.map((beer: BeerInterface) => {
            return <CardBeer beer={beer} key={beer.id_beer} />;
          })}
      </div>
    </>
  );
};
export default ListBeers;
