// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import IngredientService from "../../../services/IngredientService";
import { IngredientInterface } from "../../../entity/IngredientInterface";

interface DetailIngredientProps {
  idBeer: number;
}

const DetailIngredient = ({ idBeer }: DetailIngredientProps) => {
  const [ingredient, setIngredient] = useState<IngredientInterface[]>();
  const [ingredientsService] = useState(new IngredientService());
  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        ingredientsService.findByBeerIngerdient(Number(idBeer)).then((data) => {
          setIngredient(data);
          console.log(ingredient);
        });
      } catch (error) {
        console.error("Error fetching breweries:", error);
      }
    };
    fetchBreweries();
  }, [idBeer, ingredientsService]);

  return (
    ingredient &&
    ingredient.map((i) => {
      return <div key={i.id_ingredient}>{i.name}</div>;
    })
  );
};
export default DetailIngredient;
