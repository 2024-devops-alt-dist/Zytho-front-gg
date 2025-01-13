import { useEffect, useState } from "react";
import BeerService from "../../services/BeerService";
import BeerInterface from "../../entity/BeerInterface";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const ListBeers = () => {
  const [beers, setBeers] = useState<BeerInterface[]>([]);
  const [beersService] = useState(new BeerService());

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const beers = await beersService.findAllBeers();
        console.log(beers);
        setBeers(beers);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };
    fetchBeers();
  }, [beersService]);
  const header = (beer: BeerInterface) => {
    return <img alt={beer.name} src="/public/assets/picture_big/beer-1.jpg" />;
  };
  const footer = (beer: BeerInterface) => {
    return (
      <Link to={`/beers/${beer.id_beer}`}>
        <Button label="Détail" icon="pi pi-check" />
      </Link>
    );
  };
  return (
    <>
      <h1>Liste des Bières</h1>
      <div className="card flex flex-col justify-content-center">
        {beers &&
          beers.map((beer: BeerInterface) => {
            return (
              <Card
                key={beer.id_beer}
                title={beer.name}
                subTitle={"Bière " + beer.color}
                footer={footer(beer)}
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
