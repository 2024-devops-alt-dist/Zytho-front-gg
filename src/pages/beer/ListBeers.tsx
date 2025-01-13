import { useState } from "react";
import BeerService from "../../services/BeerService";
import BeerInterface from "../../entity/BeerInterface";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const ListBeers = () => {
  const [beers, setBeers] = useState<BeerInterface[]>([]);
  const [beersService] = useState(new BeerService());

  beersService.findAllBeers().then((beers) => {
    console.log(beers);
    setBeers(beers);
  });
  const header = (beer: BeerInterface) => {
    return <img alt={beer.name} src="/public/assets/picture_big/beer-1.jpg" />;
  };
  const footer = (
    <>
      <Button label="Détail" icon="pi pi-check" />
    </>
  );
  return (
    <>
      <h1>Liste des Bières</h1>
      <div className="card flex flex-col justify-content-center">
        {beers &&
          beers.map((beer: BeerInterface) => {
            return (
              <Card
                title={beer.name}
                subTitle={"Bière " + beer.color}
                footer={footer}
                header={header(beer)}
                className="md:w-25rem"
              >
                <p className="m-0">{beer.description}</p>
              </Card>
            );
          })}
      </div>
    </>
  );
};
export default ListBeers;
