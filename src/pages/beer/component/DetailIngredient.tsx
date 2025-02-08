// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import IngredientService from "../../../services/IngredientService";
import { IngredientInterface } from "../../../entity/IngredientInterface";
import { Card } from "primereact/card";
// import { IngredientInterface } from "../../../entity/IngredientInterface";

interface DetailIngredientProps {
  idBeer: number;
}

const DetailIngredient = ({ idBeer }: DetailIngredientProps) => {
  const [ingredients, setIngredient] = useState<IngredientInterface[]>();
  const [ingredientsService] = useState(new IngredientService());
  const fetchIngredients = async () => {
    const data = await ingredientsService.findByBeerIngerdient(Number(idBeer));

    setIngredient(data);
  };
  useEffect(() => {
    fetchIngredients();
  }, [idBeer]);

  return (
    <div className="flex justify-around w-full">
      {ingredients &&
        ingredients.map((i) => {
          return <Card title={i.name} key={i.id_ingredient}></Card>;
        })}
    </div>
  );
};
export default DetailIngredient;
