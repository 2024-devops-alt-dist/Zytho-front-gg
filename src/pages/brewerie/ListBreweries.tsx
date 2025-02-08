import { useEffect, useState } from "react";
import BrewerieService from "../../services/BrewerieService";
import BrewerieInterface from "../../entity/BrewerieInterface";
import CardBrewerie from "./CardBrewerie";
import Button from "../../components/Button";

const ListBreweries = () => {
  const [breweries, setBreweries] = useState<BrewerieInterface[]>([]);
  const [breweriesService] = useState(new BrewerieService());

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const breweries = await breweriesService.findAll<BrewerieInterface>();
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
              <div key={brewerie.id_brewerie}>
                <CardBrewerie brewerie={brewerie} />
                <div className="mt-6 w-[60%] m-auto">
                  <Button
                    path={`/breweries/${brewerie.id_brewerie}`}
                    labelButton="Détails"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default ListBreweries;
