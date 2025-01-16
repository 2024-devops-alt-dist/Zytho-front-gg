import { useState } from "react";
import BeerService from "../../services/BeerService";
import CrudDataValue from "./component/crud/CrudDataValue";
import BeerInterface from "../../entity/BeerInterface";
import BrewerieService from "../../services/BrewerieService";
import BrewerieInterface from "../../entity/BrewerieInterface";

const Admin = () => {
  const [beers, setBeers] = useState<BeerInterface[]>([]);
  const [breweries, setBreweries] = useState<BrewerieInterface[]>([]);
  return (
    <>
      <h1>Admin</h1>
      <CrudDataValue<BeerInterface>
        service={BeerService}
        objects={beers}
        changeObjects={setBeers}
        label="bières"
      />

      {
        <CrudDataValue<BrewerieInterface>
          service={BrewerieService}
          objects={breweries}
          changeObjects={setBreweries}
          label="brasseries"
        />
      }
    </>
  );
};

export default Admin;
