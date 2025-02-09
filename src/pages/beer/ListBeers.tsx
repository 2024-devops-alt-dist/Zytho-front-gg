import { useEffect } from "react";
import BeerInterface from "../../entity/BeerInterface";
import CardBeer from "./component/CardBeer";
import { useBeerStore } from "../../store/useBeerStore";
interface ListBeersProps {
  idBrewerie?: number;
}

const ListBeers = ({ idBrewerie }: ListBeersProps) => {
  const { beersStore, fetchBeers } = useBeerStore();

  useEffect(() => {
    fetchBeers();
  }, []);

  const filterBeers = idBrewerie
    ? beersStore.filter((b) => b.id_brewerie === idBrewerie)
    : beersStore;

  return (
    <>
      <div className="flex flex-col justify-content-center items-center gap-10 w-[80%]">
        {filterBeers.map((beer: BeerInterface) => {
          return <CardBeer beer={beer} key={beer.id_beer} />;
        })}
      </div>
    </>
  );
};
export default ListBeers;
