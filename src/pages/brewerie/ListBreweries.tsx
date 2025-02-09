import { useEffect } from "react";
import BrewerieInterface from "../../entity/BrewerieInterface";
import CardBrewerie from "./CardBrewerie";
import Button from "../../components/Button";
import { useBrewerieStore } from "../../store/useBrewerieStore";

const ListBreweries = () => {
  const { breweriesStore, fetchBreweries } = useBrewerieStore();

  useEffect(() => {
    fetchBreweries();
  }, [breweriesStore]);

  return (
    <>
      <h1>Liste des Brasseries</h1>
      <div className="flex flex-col justify-content-center gap-y-16">
        {breweriesStore &&
          breweriesStore.map((brewerie: BrewerieInterface) => {
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
