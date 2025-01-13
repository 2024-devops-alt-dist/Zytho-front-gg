import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import BrewerieService from "../../services/BrewerieService";
import BrewerieInterface from "../../entity/BrewerieInterface";

const ListBreweries = () => {
  const [breweries, setBreweries] = useState<BrewerieInterface[]>([]);
  const [breweriesService] = useState(new BrewerieService());

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const breweries = await breweriesService.findAllBreweries();
        console.log(breweries);
        setBreweries(breweries);
      } catch (error) {
        console.error("Error fetching breweries:", error);
      }
    };
    fetchBreweries();
  }, [breweriesService]);
  const header = (brewerie: BrewerieInterface) => {
    return (
      <img
        alt={brewerie.name}
        src="/public/assets/picture_big/brewerie-1.jpg"
      />
    );
  };
  const footer = (brewerie: BrewerieInterface) => {
    return (
      <Link to={`/breweries/${brewerie.id_brewerie}`}>
        <Button label="Détail" icon="pi pi-check" />
      </Link>
    );
  };
  return (
    <>
      <h1>Liste des Brasseries</h1>
      <div className="card flex flex-col justify-content-center">
        {breweries &&
          breweries.map((brewerie: BrewerieInterface) => {
            return (
              <Card
                key={brewerie.id_brewerie}
                title={brewerie.name}
                subTitle={"Bière " + brewerie.country}
                footer={footer(brewerie)}
                header={header(brewerie)}
                className="md:w-25rem"
              >
                <p className="m-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatum incidunt ipsa sit est ab ratione quibusdam modi
                  consectetur hic consequatur ipsam atque minus autem quod,
                  facere commodi? Et, pariatur? Alias.
                </p>
              </Card>
            );
          })}
      </div>
    </>
  );
};
export default ListBreweries;
