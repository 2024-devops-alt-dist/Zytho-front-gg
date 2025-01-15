import BrewerieInterface from "../../entity/BrewerieInterface";

interface CardBrewerieProps {
  brewerie: BrewerieInterface;
  element?: "card" | "detail";
}

const CardBrewerie = ({
  brewerie,
  element: positionTitle = "card",
}: CardBrewerieProps) => {
  return (
    <div key={brewerie.id_brewerie}>
      <div>
        {positionTitle === "detail" && (
          <h3 className="text-3xl mb-6 tracking-wide">{brewerie.name}</h3>
        )}
        <img
          className="w-full lg:h-[600px] object-cover"
          alt={brewerie.name}
          src={`/public/assets/breweries/dek/brewerie${brewerie.id_brewerie}.jpg`}
        />
      </div>
      <div className="flex flex-col gap-5 items-start w-[60%] m-auto mt-5">
        {positionTitle === "card" && (
          <h3 className="text-xl tracking-wide">{brewerie.name}</h3>
        )}
        <h4 className="font-light">{brewerie.country}</h4>
        <p className="m-0 text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          incidunt ipsa sit est ab ratione quibusdam modi consectetur hic
          consequatur ipsam atque minus autem quod, facere commodi? Et,
          pariatur? Alias.
        </p>
      </div>
    </div>
  );
};

export default CardBrewerie;
