import { useEffect } from "react";
import BrewerieInterface from "../../entity/BrewerieInterface";
import CardBrewerie from "./CardBrewerie";
import { useBrewerieStore } from "../../store/useBrewerieStore";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const ListBreweries = () => {
  const { breweriesStore, fetchBreweries } = useBrewerieStore();
  const navigate = useNavigate();

  const handleClick = (brewerie: BrewerieInterface) => {
    navigate(`/breweries/${brewerie.id_brewerie}`);
  };

  useEffect(() => {
    fetchBreweries();
  }, []);

  return (
    <>
      <h1>Liste des Brasseries</h1>
      <div className="flex flex-col justify-content-center gap-y-16">
        {breweriesStore &&
          breweriesStore.map((brewerie: BrewerieInterface) => {
            return (
              <div key={brewerie.id_brewerie}>
                <CardBrewerie brewerie={brewerie} />
                <div className="mt-6 w-full">
                  <Button
                    onClick={() => handleClick}
                    className="w-full justify-center"
                  >
                    Détails
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default ListBreweries;
