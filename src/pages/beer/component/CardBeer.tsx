import BeerInterface from "../../../entity/BeerInterface";
import TableDataBeer from "./TableDataBeer";
import Button from "../../../components/Button";
import Detailingredient from "./DetailIngredient";

interface CardBeerProps {
  beer: BeerInterface;
  element?: "card" | "detail";
}

const CardBeer = ({ beer, element = "card" }: CardBeerProps) => {
  return (
    <div
      className={`w-[60%] flex flex-col items-center ${
        element === "card" ? "lg:flex-row" : "justify-center w-full gap-14"
      }`}
    >
      <div>
        <img
          className="w-full lg:h-[600px] object-cover"
          alt={beer.name}
          src={`/public/assets/beer/beer${beer.id_beer}.jpg`}
        />
      </div>
      <div className="flex flex-col gap-5 items-start w-[60%] m-auto mt-5">
        <h3 className="text-3xl mb-6 tracking-wide">{beer.name}</h3>
        {element === "detail" && <h4>{beer.id_brewerie}</h4>}
        <TableDataBeer beer={beer} />
        <h4 className="font-light">{""}</h4>
        <p className="m-0 text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          incidunt ipsa sit est ab ratione quibusdam modi consectetur hic
          consequatur ipsam atque minus autem quod, facere commodi? Et,
          pariatur? Alias.
        </p>
        {element === "detail" && <Detailingredient idBeer={beer.id_beer} />}
        <div className="mt-6 w-full">
          <Button
            path={element === "card" ? `/beers/${beer.id_beer}` : "/"}
            labelButton={element !== "card" ? "Acheter" : "Détails"}
          />
        </div>
      </div>
    </div>
  );
};

export default CardBeer;
