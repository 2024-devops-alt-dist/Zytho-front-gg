import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrewerieService from "../../services/BrewerieService";
import BrewerieInterface from "../../entity/BrewerieInterface";
import CardBrewerie from "./CardBrewerie";

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

  return (
    <>
      <h1>Liste des Brasseries</h1>
      <div className="flex flex-col justify-content-center gap-y-16">
        {breweries &&
          breweries.map((brewerie: BrewerieInterface) => {
            return (
              <div>
                <CardBrewerie brewerie={brewerie} />
                <div className="mt-6">
                  <Link to={`/breweries/${brewerie.id_brewerie}`}>
                    <button className="button-active">Détails</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default ListBreweries;
