import { useState } from "react";
import BeerService from "../../services/BeerService";
import CrudDataValue from "./component/crud/CrudDataValue";
import BeerInterface from "../../entity/BeerInterface";
import BrewerieService from "../../services/BrewerieService";
import BrewerieInterface from "../../entity/BrewerieInterface";
import { CategoryInterface } from "../../entity/CategoryInterface";
import CategoryService from "../../services/CategoryService";

const Admin = () => {
  const [beers, setBeers] = useState<BeerInterface[]>([]);
  const [breweries, setBreweries] = useState<BrewerieInterface[]>([]);
  const [category, setCategory] = useState<CategoryInterface[]>([]);
  return (
    <>
      <h1>Admin</h1>
      <CrudDataValue<BeerInterface>
        service={BeerService}
        objects={beers}
        changeObjects={setBeers}
        label="bières"
      />

      <CrudDataValue<BrewerieInterface>
        service={BrewerieService}
        objects={breweries}
        changeObjects={setBreweries}
        label="brasserie"
      />
      <CrudDataValue<CategoryInterface>
        service={CategoryService}
        objects={category}
        changeObjects={setCategory}
        label="categorie"
      />
    </>
  );
};

export default Admin;
